import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/',         label: 'Home'          },
  { to: '/products', label: 'Products'      },
  { to: '/company',  label: 'Company'       },
  { to: '/docs',     label: 'Technical Docs'},
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const shadowClass = scrolled
    ? 'shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
    : 'shadow-[0_4px_20px_rgba(0,0,0,0.22)]'

  return (
    <>
      {/* Fixed outer wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4">

        {/* Two-pill row */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full max-w-7xl flex items-center justify-between gap-4"
        >
          {/* ── Left pill: logo + nav links ── */}
          <nav className={`flex items-center gap-6 px-4 py-2.5 rounded-2xl bg-uf-navy/80 backdrop-blur-md ${shadowClass} transition-shadow duration-300`}>
            <Link to="/" className="flex-shrink-0 pl-1">
              <span
                className="font-syne font-bold text-lg tracking-tight"
                style={{ lineHeight: 1.5, overflow: 'visible', display: 'inline-block', paddingBottom: '0.1em' }}
              >
                <span className="text-white">un</span>
                <span className="text-uf-teal">forge</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium transition-colors duration-150 ${
                      isActive ? 'text-uf-teal' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* ── Right pill: CTA + hamburger ── */}
          <div className={`flex items-center gap-2 px-3 py-2 rounded-2xl bg-uf-navy/80 backdrop-blur-md ${shadowClass} transition-shadow duration-300`}>
            <motion.a href="https://auth51.com/console" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center font-sans text-sm font-semibold px-4 py-2 rounded-xl text-white transition-colors duration-150 hover:bg-[#6366f1]">
              <span className="hidden md:inline">Try Auth51</span>
            </motion.a>
            {/* Contact us — desktop */}
            <motion.a
              href="mailto:info@unforge.io?subject=Early%20access%20request"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center justify-center font-sans text-sm font-semibold px-4 py-2 rounded-xl bg-uf-teal text-white transition-colors duration-150 hover:bg-[#178a64]"
            >
              Contact us
            </motion.a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-white rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-0.5 w-5 bg-white rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-white rounded-full"
              />
            </button>
          </div>
        </motion.div>

        {/* Mobile dropdown — second row, full width below both pills */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{ originY: 0 }}
              className="w-full max-w-7xl mt-2 rounded-2xl bg-uf-navy shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-lg font-sans text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-uf-teal bg-white/5'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <div className="mt-3 pt-3 border-t border-white/10">
                  <a
                    href="mailto:info@unforge.io?subject=Early%20access%20request"
                    className="block w-full text-center font-sans text-sm font-semibold px-4 py-2.5 rounded-xl bg-uf-teal text-white hover:bg-[#178a64] transition-colors"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Spacer so content isn't hidden under fixed navbar.
          Home intentionally has no spacer so the hero image starts at the top. */}
      <div className={isHomePage ? 'h-0' : 'h-[88px]'} />
    </>
  )
}
