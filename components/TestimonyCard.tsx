import { FC } from 'react'
import { Box, Text, Blockquote } from '@mantine/core'

const TestimonyCard: FC<{ testimony: { avatar: string; title: string; body: string } }> = ({ testimony }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(226, 231, 240)',
        maxWidth: '375px',
        padding: '1.8em',
        borderRadius: '1.8em'
      }}
    >
      {/* <Box sx={{ marginBottom: '2em' }}>
        <Text weight="bold" sx={{ fontSize: '1.2em' }}>
          Name
        </Text>
        <Text sx={{ fontSize: '1.2em' }}>Job title</Text>
      </Box> */}
      <Box>
        <Blockquote
          cite="Name"
          styles={{ cite: { color: 'black' } }}
          sx={{ fontSize: '1.5em', color: 'rgba(0, 0, 0, 0.6)', lineHeight: '1.5em', fontWeight: 400 }}
        >
          Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut voluptas. Nemo quia eum deserunt omnis eaque.
        </Blockquote>
      </Box>
    </Box>
  )
}

export default TestimonyCard
