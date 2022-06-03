import { getUserFromToken } from '@/utils/auth';
import prisma from '@/utils/prisma';

const changeEmail = async (req, res) => {
  console.log('Im here in change email');
  let user = await getUserFromToken(req.headers.cookie);

  if (!user) {
    console.log('Not user');
    return res.status(401).send('oops');
  }
  console.log(user);

  await prisma.user.update({
    where: { id: user.id },
    data: { email: req.body.newEmail }
  });

  res.json({ email: req.body.newEmail });
};

export default changeEmail;
