import prisma from '@/utils/prisma';
import { createTokenAndSendResetEmail } from '@/utils/mail';

const resetPassword = async (req, res) => {
  const { email } = req.body;
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

  if (!user) {
    //handle this
    res.status(200).send();
    return;
  }
  try {
    await createTokenAndSendResetEmail(user);
  } catch (e) {
    res.status(500).json({ error: 'Sorry, try again.' });
    return;
  }

  res.json({ ok: true });
};
export default resetPassword;
