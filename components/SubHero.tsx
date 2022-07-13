import { Box, Text } from '@mantine/core'
import { FC } from 'react'
import Button from './Button'

const exampleText =
  'Deserunt necessitatibus omnis doloremque. Aut deleniti inventore ipsum quaerat quae ducimus nulla. Deserunt necessitatibus omnis doloremque. Aut deleniti inventore ipsum quaerat quae ducimus nulla. Deserunt necessitatibus omnis doloremque.'

const SubHero: FC<{ text?: string; buttonText?: string }> = ({
  text = exampleText,
  buttonText = 'Try It For Free'
}) => {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: '850px', margin: 'auto' }}>
      <Box mb="3em">
        <Text sx={{ fontSize: '1.6em', lineHeight: '1.8em' }}>{text}</Text>
      </Box>
      <Box sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button text={buttonText} color="black" size={1.5} />
      </Box>
    </Box>
  )
}

export default SubHero
