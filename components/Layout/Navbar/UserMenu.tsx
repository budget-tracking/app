import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface Props { }

function UserMenu(props: Props) {
  const { data: session, status } = useSession()
  if (status === "loading") return null
  console.log(session);

  return (
    <>
      {
        (status === "authenticated") &&
        (session?.user?.name ?? session?.user?.email)
      }
      {
        (status === "authenticated") &&
        <button onClick={() => signOut()}>Sign Out</button>
      }
      {
        (status === "unauthenticated") &&
        <button onClick={() => signIn()}>Sign In</button>
      }
    </>
  )
}

export default UserMenu
