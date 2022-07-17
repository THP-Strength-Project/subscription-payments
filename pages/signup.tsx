import AuthPage from '@/components/AuthPage'
import { isUserSignedIn } from '@/utils/auth'

const SignUp = () => <AuthPage signup />

export default SignUp
export async function getServerSideProps({ preview = false, query, req }) {
  if (isUserSignedIn(req.headers.cookie)) {
    return {
      redirect: {
        destination: '/account',
        permanent: false
      }
    }
  }

  if (!query.price) {
    return {
      redirect: {
        destination: '/pricing',
        permanent: false
      }
    }
  }

  return {
    props: {
      preview
    }
  }
}
