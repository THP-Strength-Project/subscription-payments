import { FC } from 'react'
import { Box, Title, Text } from '@mantine/core'
import Button from '@/components/Button'
import Image from 'next/image'

const BottomCTA: FC<{ title: string; text: string; buttonText: string }> = ({ title, text, buttonText }) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: '3em',
        borderTopRightRadius: '3em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5em',
        minHeight: '70vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      >
        <Image
          src="/gradient.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL={`/_next/image?url=/gradient.png&w=16&q=1`}
        />
      </Box>
      <Box sx={{ width: '35%', position: 'relative', textAlign: 'center' }}>
        <Title order={2} sx={{ fontSize: '4em', marginBottom: '.5em' }}>
          {title}
        </Title>
        <Text sx={{ fontSize: '1.75em', lineHeight: '1.3em' }}>{text}</Text>

        <Box sx={{ marginTop: '1.8em', display: 'flex', justifyContent: 'center' }}>
          <Button text={buttonText} color="white" size={1.8} />
        </Box>
      </Box>
    </Box>
  )
}

BottomCTA.defaultProps = {
  title: 'Ready to Work with the most Intuitive Editor of All Time?',
  text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare semlacinia quam venenatis vestibulum.',
  buttonText: 'Lets go'
}

export default BottomCTA
