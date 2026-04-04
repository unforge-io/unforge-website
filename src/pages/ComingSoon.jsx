import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ComingSoon({ title = 'Coming Soon', desc = 'This page is coming soon.' }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-sm w-full"
      >
        {/* Logo */}
        <Link to="/" className="inline-block mb-10">
          <span className="font-syne font-bold text-2xl">
            <span className="text-uf-navy">un</span>
            <span className="text-uf-teal">forge</span>
          </span>
        </Link>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-uf-alt border border-uf-border flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-uf-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>

        <h1
          className="font-syne font-bold text-2xl text-uf-navy mb-3"
          style={{ lineHeight: 1.3 }}
        >
          {title}
        </h1>
        <p className="font-sans text-uf-body text-sm mb-8 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="btn-primary block text-center">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
