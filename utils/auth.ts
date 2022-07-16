import prisma from './prisma'
import jwt from 'jsonwebtoken'
import * as cookie from 'cookie'

export const getUserFromToken = async (cookies) => {
  if (!cookies[process.env.COOKIE_NAME]) {
    return false
  }

  let user = jwt.verify(cookies[process.env.COOKIE_NAME], process.env.JWT_SECRET)
  user = await prisma.user.findUnique({
    where: { id: user.id }
  })
  return user
}

export const isUserSignedIn = (userCookie) => {
  const parsedCookies = cookie.parse(userCookie)
  if (!parsedCookies || !parsedCookies[process.env.COOKIE_NAME]) {
    return false
  }
  const user = jwt.verify(parsedCookies[process.env.COOKIE_NAME], process.env.JWT_SECRET)

  return !!user
}
