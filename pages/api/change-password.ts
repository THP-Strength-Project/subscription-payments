import { getUserFromToken } from '@/utils/auth';
import bcrypt from 'bcrypt';
import prisma from '@/utils/prisma';

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  const salt = bcrypt.genSaltSync();
  const hashedNewPassword = bcrypt.hashSync(newPassword, salt);

  let user;
  try {
    user = await getUserFromToken(req.headers.cookie);
  } catch (e) {
    res.status(500).send({ error: 'oops' });
    return;
  }

  if (!user) {
    return res.status(401).send('Not Authorized.');
  }

  try {
    user = await prisma.user.findUnique({
      where: { id: user.id }
    });
  } catch (e) {
    res.status(500).send({ error: 'Sorry, try again.' });
    return;
  }

  try {
    if (!bcrypt.compareSync(password, user.password)) {
      //handle this

      return res.status(401).send('oops');
    }
  } catch (e) {
    res.status(500).send({ error: 'Sorry, try again.' });
    return;
  }

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword }
    });
  } catch (e) {
    res.status(500).send({ error: 'Sorry, try again.' });
    return;
  }

  res.json({ ok: true });
};

export default changePassword;
