import AuthPage from '@/components/AuthPage'
import { isUserSignedIn } from '@/utils/auth'

const SignIn = () => <AuthPage />

export default SignIn
export async function getServerSideProps({ preview = false, req }) {
  if (isUserSignedIn(req.headers.cookie || '')) {
    return {
      redirect: {
        destination: '/account',
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
