import AuthForm from '@/components/AuthForm'
import FAQList from '@/components/FAQList'
import { Box } from '@mantine/core'

const TestPage = () => {
  return (
    <Box px="50px">
      <AuthForm />
      <AuthForm signup />
      <FAQList
        items={new Array(5).fill({
          question: 'How do I jump higher?',
          answer: 'You have to train really hard. Eat well, and practive jumping over and over.'
        })}
      />
    </Box>
  )
}

export default TestPage
