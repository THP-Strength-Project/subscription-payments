import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../utils/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, name } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, salt)
      }
    });
  } catch (e) {
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
