import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {}

function Dasboard(props: Props) {
  const {} = props

  const router = useRouter()
  
  const {data: session, status } = useSession()
  if (status === 'loading') return null
  
  if ( session === null) router.push('/')

  return (
    <></>
  )
}

export default Dasboard
