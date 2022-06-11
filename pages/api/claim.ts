import bcrypt from 'bcrypt';
import prisma from '@/utils/prisma';
/**
 *
 * @param req the incoming request
 * @param res the response object
 * This API function will update a users password
 * after clicking the link in the password reset,
 * users go to a form where they put in their new password
 * that form submits to this API function
 *
 * 1. update the users password after enctrypting it
 * 2. delete the token for the user
 */
const claim = async (req, res) => {
  const { password, token } = req.body;
  const salt = bcrypt.genSaltSync();
  const newPassword = bcrypt.hashSync(password, salt);

  const claimToken = await prisma.token.delete({
    where: { value: token }
  });



  await prisma.user.update({
    where: { id: claimToken.userId },
    data: { password: newPassword }
  });

  res.json({ ok: true });
};

export default claim;
