import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  { to: '/founders', label: 'Founders' },
  { to: '/docs',     label: 'Docs'     },
  { to: '/company',  label: 'Company'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* 3px teal top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-uf-teal z-50" />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed top-[3px] left-0 right-0 z-40 bg-white border-b border-uf-border transition-shadow duration-200 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-syne font-bold text-xl tracking-tight">
              <span className="text-uf-navy">un</span>
              <span className="text-uf-teal">forge</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium transition-colors duration-150 ${
                    isActive ? 'text-uf-teal' : 'text-uf-body hover:text-uf-teal'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="font-sans text-sm font-medium text-uf-body hover:text-uf-teal transition-colors duration-150"
            >
              Sign In
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/signup"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Request Access
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2"
          >
            <motion.div className="flex flex-col gap-1.5 w-5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-uf-navy rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-uf-navy rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-uf-navy rounded-full"
              />
            </motion.div>
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-uf-border bg-white"
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {NAV_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block py-2.5 font-sans text-sm font-medium transition-colors ${
                        isActive ? 'text-uf-teal' : 'text-uf-body hover:text-uf-teal'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <div className="mt-4 pt-4 border-t border-uf-border flex flex-col gap-3">
                  <Link to="/login" className="font-sans text-sm font-medium text-uf-body">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn-primary text-sm text-center">
                    Request Access
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header (3px line + 64px header) */}
      <div className="h-[67px]" />
    </>
  )
}
