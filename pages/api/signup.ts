import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma';
import { stripe } from '../../utils/stripe';
import { sendVerifyEmail } from '../../utils/mail';
import { v4 as uuidv4 } from 'uuid';
import { getURL } from '@/utils/helpers';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, name } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, salt),
        tokens: {
          create: {
            value: uuidv4()
          }
        }
      }
    });
  } catch (e) {
    console.log('Here');
    console.log(e);
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }
  if (!user) {
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }
  let customer;
  try {
    customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        id: user.id
      }
    });
  } catch (e) {
    console.log('Here 2');
    console.log(e);
    await prisma.user.delete({ where: { id: user.id } });
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }

  try {
    user = await prisma.user.update({
      where: { id: user.id },
      data: { customerId: customer.id },
      include: {
        tokens: true
      }
    });
  } catch (e) {
    console.log('Here 3');
    console.log(e);
    await prisma.user.delete({ where: { id: user.id } });
    await stripe.customers.del(user.customerId);
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }

  const verifiedURL = `${getURL()}/verify?token=${user.tokens[0].value}`;

  const emailData = {
    user: {
      name: user.name,
      verifiedURL
    }
  };

  await sendVerifyEmail(user.email, emailData);

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now()
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '8d' }
  );

  res.setHeader(
    'Set-Cookie',
    cookie.serialize(process.env.COOKIE_NAME as string, token, {
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    })
  );

  res.json(user);
};
