import prisma from './prisma';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

export const getUserFromToken = async (userCookie) => {
  const parsedCookies = cookie.parse(userCookie);

  let user = jwt.verify(
    parsedCookies[process.env.COOKIE_NAME],
    process.env.JWT_SECRET
  );
  user = await prisma.user.findUnique({
    where: { id: user.id }
  });
  return user;
};
