import React, { ReactChild } from 'react'
import UserMenu from './Navbar/UserMenu'

interface Props { }

function Layout({children}: {
  children: ReactChild
}) {
  return (
    <>
      <header>
        <UserMenu />
      </header>
      {children}
      <footer>footer</footer>
    </>
  )
}

export default Layout
