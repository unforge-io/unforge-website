import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash) {
      globalThis.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const scrollToHash = () => {
      const element = document.getElementById(hash)
      if (!element) return
      const top = element.getBoundingClientRect().top + globalThis.scrollY
      globalThis.scrollTo({ top, behavior: 'auto' })
    }

    // First scroll once route content mounts.
    const raf = globalThis.requestAnimationFrame(scrollToHash)
    // Scroll again after potential async layout shifts (video/font load, etc.).
    const retry = globalThis.setTimeout(scrollToHash, 250)

    return () => {
      globalThis.cancelAnimationFrame(raf)
      globalThis.clearTimeout(retry)
    }
  }, [location.pathname, location.hash])
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
