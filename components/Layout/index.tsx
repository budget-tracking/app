import React, { ReactChild } from 'react'
import Logo from './Navbar/Logo'
import UserMenu from './Navbar/UserMenu'

interface Props { }

function Layout({children}: {
  children: ReactChild
}) {
  return (
    <>
      <header>
        <Logo />
        <UserMenu />
      </header>
      {children}
      <footer>footer</footer>
    </>
  )
}

export default Layout
