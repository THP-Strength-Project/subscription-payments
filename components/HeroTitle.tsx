import { FC } from 'react'
import { Title } from '@mantine/core'

const HeroTitle: FC<{ text: string; color?: string; size?: number }> = ({ text, color, size }) => {
  const fontSize = size ? `${size}rem` : '4rem'
  return (
    <Title
      order={1}
      sx={(theme) => ({
        fontSize,
        color: color || theme.colors.violet[3],
        lineHeight: '80px',
        letterSpacing: '-2px'
      })}
    >
      {text}
    </Title>
  )
}

export default HeroTitle
