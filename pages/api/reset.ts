import prisma from '@/utils/prisma';
import { createTokenAndSendResetEmail } from '@/utils/mail';

const resetPassword = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!user) {
    //handle this
  }
  await createTokenAndSendResetEmail(user);

  res.json({ ok: true });
};
export default resetPassword;
