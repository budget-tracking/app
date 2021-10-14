import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { User } from 'cruds/User/types'

interface Props {}

function Dasboard(props: Props) {
  const {} = props

  const router = useRouter()
  
  const {data: session, status } = useSession() as {
    data: NextAuthSessionData<User>, status: any
  }

  if (status === 'loading') return null
  
  if ( session === null) router.push('/')

  return (
    <>
      <button onClick={() => router.push('/dashboard/create')}>Add Entry</button>
      <pre>{JSON.stringify(session?.user)}</pre>
    </>
  )
}

export default Dasboard
