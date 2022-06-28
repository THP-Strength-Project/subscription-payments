import { getUserFromToken } from '@/utils/auth'
import bcrypt from 'bcrypt'
import prisma from '@/utils/prisma'

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body
  const salt = bcrypt.genSaltSync()
  const hashedNewPassword = bcrypt.hashSync(newPassword, salt)

  let user = await getUserFromToken(req.headers.cookie)

  if (!user) {
    return res.status(401).send('oops')
  }

  user = await prisma.user.findUnique({
    where: { id: user.id }
  })

  if (!bcrypt.compareSync(password, user.password)) {
    //handle this

    return res.status(401).send('oops')
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedNewPassword }
  })

  res.json({ ok: true })
}

export default changePassword
