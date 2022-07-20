import { Box } from '@mantine/core'
import Image from 'next/image'
import { FC } from 'react'

const LogoWall: FC<{ logos: string | StaticImageData[] }> = ({ logos = [] }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {logos.map((logo) => (
        <Box px="1.4em" sx={{ width: 100 / logos.length + '%' }}>
          <Image src={logo} layout="intrinsic" />
        </Box>
      ))}
    </Box>
  )
}

export default LogoWall
