import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

function Logo(props: Props) {
  const {} = props

  return (
    <Link href="/">
      <a title="Home">
        <Image src="/vercel.svg" alt="" width="150px" height="70px" />
      </a>
    </Link>
  )
}

export default Logo
