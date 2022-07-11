import { Title, Text, Box } from '@mantine/core'
import { FC } from 'react'

const FeatureText: FC<{ title: string; titleWithColor: string; body: string }> = ({ title, titleWithColor, body }) => {
  return (
    <Box>
      <Box>
        <Title>{title}</Title>
        <Title
          sx={(theme) => ({
            color: theme.colors.red[3]
          })}
        >
          {titleWithColor}
        </Title>
      </Box>
      <Box sx={{ marginTop: '2em' }}>
        <Text sx={{ fontSize: '1.5em', lineHeight: '1.8em', color: 'rgba(0, 0, 0, 0.6)' }}>{body}</Text>
      </Box>
    </Box>
  )
}
export default FeatureText
