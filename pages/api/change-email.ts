import { getUserFromToken } from '@/utils/auth'
import prisma from '@/utils/prisma'

const changeEmail = async (req, res) => {
  const user = await getUserFromToken(req.headers.cookie)

  if (!user) {
    return res.status(401).send('oops')
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { email: req.body.newEmail }
  })

  res.json({ email: req.body.newEmail })
}

export default changeEmail
