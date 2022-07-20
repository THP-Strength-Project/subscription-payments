import { getUserFromToken } from '@/utils/auth'
import prisma from '@/utils/prisma'

const changeEmail = async (req, res) => {
  let user
  try {
    user = await getUserFromToken(req.headers.cookie)
  } catch (e) {
    res.status(500).send({ error: 'oops' })
    return
  }

  if (!user) {
    return res.status(401).send('oops')
  }

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { email: req.body.newEmail }
    })
  } catch (e) {
    console.log(e)
    res.status(500).send({ error: 'Could not change email, try again.' })
    return
  }

  res.json({ email: req.body.newEmail })
}

export default changeEmail
