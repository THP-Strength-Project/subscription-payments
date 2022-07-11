import { FC } from 'react'
import { UnstyledButton, Box } from '@mantine/core'

const Button: FC<{
  fullWidth?: boolean
  active?: boolean
  size?: number
  text: string
  type?: 'ghost' | 'filled' | 'transparent'
  color?: string
}> = ({ size, text, type = 'filled', active = false, fullWidth = false, color }) => {
  const gray = 'rgba(0, 2, 24, 0.48)'
  const border = `1px solid ${gray}`
  return (
    <Box
      sx={{
        fontSize: `${size}em` || 'em',
        minWidth: '120px'
      }}
    >
      <UnstyledButton
        sx={(theme) => ({
          width: fullWidth ? '100%' : 'initial',
          backgroundColor: type === 'filled' ? 'black' : 'white',
          color: color || (type === 'filled' ? 'white' : type === 'ghost' ? 'black' : gray),
          padding: '0.8em 1em',
          borderRadius: '2em',
          fontSize: '.8em',
          letterSpacing: '.1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          border: type === 'ghost' ? border : '1px solid transparent',
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: type === 'ghost' ? gray : type === 'filled' ? 'black' : gray,
            background: 'white',
            border
          }
        })}
      >
        {text}
      </UnstyledButton>
    </Box>
  )
}

export default Button
