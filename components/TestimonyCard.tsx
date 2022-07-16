import { FC } from 'react'
import { Box, Blockquote, Sx } from '@mantine/core'

const TestimonyCard: FC<{ name: string; text: string; sx?: Sx }> = ({ name, text, sx = {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(226, 231, 240)',
        maxWidth: '375px',
        padding: '1.8em',
        borderRadius: '1.8em',
        ...sx
      }}
    >
      <Blockquote
        cite={name}
        styles={{ cite: { color: 'black', fontSize: '.8em' } }}
        sx={{ fontSize: '1.5em', color: 'rgba(0, 0, 0, 0.6)', lineHeight: '1.5em', fontWeight: 400 }}
      >
        {text}
      </Blockquote>
    </Box>
  )
}

export default TestimonyCard
