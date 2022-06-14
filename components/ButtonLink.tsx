import Link from 'next/link'


const ButtonLink = ({children, href}) => {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink