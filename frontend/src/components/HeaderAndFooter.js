import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function HeaderAndFooter() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '150px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default HeaderAndFooter
