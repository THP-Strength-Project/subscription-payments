import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma';
import { formatUserForClient } from '@/utils/helpers';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        email
      }
    });
  } catch (e) {
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
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

    res.json(formatUserForClient(user));
  } else {
    res.status(401);
    res.json({ error: 'Email or Password is wrong' });
  }
};
