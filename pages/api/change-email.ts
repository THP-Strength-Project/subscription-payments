import { getUserFromToken } from '@/utils/auth';
import prisma from '@/utils/prisma';

const changePassword = async (req, res) => {
  let user = await getUserFromToken(req.headers.cookie);

  if (!user) {
    console.log('Not user');
    return res.status(401).send('oops');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { email: req.body.email }
  });

  res.json({ email: req.body.email });
};

export default changePassword;
