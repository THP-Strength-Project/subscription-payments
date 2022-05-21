import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma';
import { stripe } from '../../utils/stripe';
import { sendVerifyEmail } from '../../utils/mail';
import { v4 as uuidv4 } from 'uuid';
import { getURL } from 'next/dist/shared/lib/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, name } = req.body;

  let user;

  try {
    user = await prisma.$transaction(async (prisma) => {
      let _user = await prisma.user.create({
        data: {
          name,
          email,
          password: bcrypt.hashSync(password, salt)
        }
      });

      const customer = await stripe.customers.create({
        email,
        name,
        metadata: {
          id: _user.id
        }
      });

      _user = await prisma.user.update({
        where: { id: _user.id },
        data: { customerId: customer.id }
      });

      let verifyToken = await prisma.token.create({
        data: {
          value: uuidv4(),
          userId: _user.id
        }
      });

      const verifiedURL = `${getURL()}/verify?token=${verifyToken.value}`;

      const emailData = {
        user: {
          name: _user.name,
          verifiedURL
        }
      };
      console.log(emailData);

      await sendVerifyEmail(_user.email, emailData);
      return _user;
    });
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
    res.status(401);
    res.json({ error: 'User already exists' });
    return;
  }

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
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    })
  );

  res.json(user);
};
