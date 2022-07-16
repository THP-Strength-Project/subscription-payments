import { getSignPage } from '@/utils/graphcms'
import AuthPage from '@/components/AuthPage'

const SignUp = ({ content }) => {
  return <AuthPage signup />
}

export default SignUp
export async function getServerSideProps({ preview = false, query }) {
  if (!query.price) {
    return {
      redirect: {
        destination: '/pricing',
        permanent: false
      }
    }
  }

  const page = await getSignPage(preview)

  return {
    props: {
      content: page,
      preview
    }
  }
}
