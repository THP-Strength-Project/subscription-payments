import { getSignPage } from '@/utils/graphcms'
import AuthPage from '@/components/AuthPage'

const SignIn = ({ content }) => {
  return <AuthPage />
}

export default SignIn
export async function getStaticProps({ preview = false }) {
  const page = await getSignPage(preview)

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  }
}
