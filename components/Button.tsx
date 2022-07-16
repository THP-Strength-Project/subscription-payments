import { FC } from 'react'
import { Box, Button as MButton } from '@mantine/core'

const Button: FC<{
  fullWidth?: boolean
  active?: boolean
  size?: number
  text: string
  type?: 'button' | 'reset' | 'submit'
  color?: 'white' | 'black' | 'transparent'
  loading?: boolean
  onClick?: () => void
}> = ({ onClick, size, text, type = 'text', active = false, fullWidth = false, color = 'white', loading = false }) => {
  const gray = 'rgba(0, 2, 24, 0.48)'

  return (
    <Box
      sx={{
        fontSize: `${size}em` || 'em',
        minWidth: '120px'
      }}
    >
      <MButton
        onClick={onClick}
        loading={loading}
        type={type}
        sx={(theme) => ({
          width: fullWidth ? '100%' : 'initial',
          backgroundColor: color,
          color: color === 'white' ? 'black' : color === 'black' ? 'white' : 'black',
          padding: '0.1em 1.5em',
          borderRadius: '2em',
          fontSize: '.8em',
          letterSpacing: '.1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          border: color === 'white' ? '1px solid white' : color === 'black' ? '1px solid black' : `1px solid ${gray}`,
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: color === 'transparent' ? gray : color === 'white' ? 'black' : 'black',
            background: color === 'transparent' ? 'transparent' : color === 'white' ? 'transparent' : 'white',
            border:
              color === 'white' ? `1px solid ${gray}` : color === 'black' ? `1px solid ${gray}` : `1px solid ${gray}`
          },
          '&:active': {
            transform: 'scale(1.1)',
            boxShadow: theme.shadows.xs
          }
        })}
      >
        {text}
      </MButton>
      {/* <UnstyledButton
        loading
        type={type}
        sx={(theme) => ({
          width: fullWidth ? '100%' : 'initial',
          backgroundColor: color,
          color: color === 'white' ? 'black' : color === 'black' ? 'white' : 'black',
          padding: '0.8em 1.5em',
          borderRadius: '2em',
          fontSize: '.8em',
          letterSpacing: '.1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          border: color === 'white' ? '1px solid white' : color === 'black' ? '1px solid black' : `1px solid ${gray}`,
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            color: color === 'transparent' ? gray : color === 'white' ? 'black' : 'black',
            background: color === 'transparent' ? 'transparent' : color === 'white' ? 'transparent' : 'white',
            border:
              color === 'white' ? `1px solid ${gray}` : color === 'black' ? `1px solid ${gray}` : `1px solid ${gray}`
          },
          '&:active': {
            transform: 'scale(1.1)'
          }
        })}
      >
        {text}
      </UnstyledButton> */}
    </Box>
  )
}

export default Button
