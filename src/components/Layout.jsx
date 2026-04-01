import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
