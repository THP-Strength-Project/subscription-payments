import prisma from '../utils/prisma';

const Verify = () => {
  return <h3>Signed Up</h3>;
};
export default Verify;

export const getServerSideProps = async ({ query }) => {
  console.log(query);

  const { token } = query;

  if (!token) {
    //handle this
  }

  const match = await prisma.token.delete({
    where: { value: token }
  });

  if (!match) {
    //handle this
  }

  await prisma.user.update({
    where: { id: match.userId },
    data: {
      isVerified: true
    }
  });

  return {
    props: {}
  };
};
