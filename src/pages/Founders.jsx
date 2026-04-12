import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

function LinkedInButton({ href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 border border-uf-teal text-uf-teal font-sans text-xs font-medium px-4 py-2 rounded-lg hover:bg-uf-teal hover:text-white transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
    )
  }
  return (
    <button
      disabled
      className="mt-5 inline-flex items-center gap-2 border border-uf-border text-uf-muted font-sans text-xs font-medium px-4 py-2 rounded-lg opacity-60 cursor-not-allowed"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      LinkedIn
    </button>
  )
}

const COFOUNDERS = [
  {
    name: 'Dr. Prasenjit Shil',
    role: 'Co-Founder & Co-Investor',
    badges: ['Senior Member IEEE', 'IEEE HKN Member'],
    bio: 'Data and AI leader in the energy sector specializing in advanced analytics, load forecasting, and large-scale data platforms. Leads high-impact initiatives improving grid reliability and operational efficiency using modern cloud technologies.',
    highlights: [
      '2022 Utility Analytics Institute Top 25 Thought Leaders in Utility Analytics',
      'IEEE R5 ExCom — North Area Chair and Industry Coordinator Chair',
      'Driving force behind Unforge\'s focus on secure agent-driven identity solutions',
    ],
  },
  {
    name: 'Abhishek Goswami',
    role: 'Co-Founder & Co-Investor',
    badges: ['Senior Member IEEE', 'MBA · University of Chicago Booth'],
    bio: 'Author of the Agentic JWT protocol and US Patent 19/315,486. 20 years across enterprise architecture, AI, and cybersecurity spanning Power and Energy, Banking, and Healthcare industries.',
    highlights: [
      'Author of Agentic JWT — arXiv:2509.13597',
      'Patent US 19/315,486 — Agentic JWT protocol',
      'Eta Kappa Nu IEEE Honor Society (HKN)',
    ],
  },
]

const FOUNDING_MEMBERS = [
  { name: 'Rahul K',    role: 'Founding Member' },
  { name: 'Neil Das',   role: 'Founding Member' },
  { name: 'Jason Liao', role: 'Founding Member' },
]

export default function Founders() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 border-b border-uf-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Our Team</span>
            <h1
              className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-5 mb-5"
              style={{ lineHeight: 1.3, overflow: 'visible' }}
            >
              The team behind Unforge
            </h1>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-2xl">
              This team started with a research problem, not a business plan. We identified the security
              gap in agentic AI systems, validated it experimentally, filed the patent, and then built
              the company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CO-FOUNDERS ───────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2
              className="font-syne font-bold text-2xl text-uf-navy"
              style={{ lineHeight: 1.3 }}
            >
              Co-Founders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {COFOUNDERS.map((person, i) => (
              <motion.div
                key={person.name}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="card-white rounded-xl p-8 transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-uf-alt border border-uf-border flex items-center justify-center mb-6">
                  <span className="font-syne font-bold text-xl text-uf-teal">
                    {person.name.charAt(0)}
                  </span>
                </div>

                <h3
                  className="font-syne font-bold text-xl text-uf-navy mb-1"
                  style={{ lineHeight: 1.3 }}
                >
                  {person.name}
                </h3>
                <p className="font-sans text-sm text-uf-teal font-medium mb-4">{person.role}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {person.badges.map(b => (
                    <span
                      key={b}
                      className="font-sans text-xs text-uf-body bg-uf-alt border border-uf-border px-3 py-1 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-sm text-uf-body leading-relaxed mb-5">{person.bio}</p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-2">
                  {person.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5 font-sans text-sm text-uf-body">
                      <span className="text-uf-teal shrink-0 mt-0.5 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <LinkedInButton />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING MEMBERS ──────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2
              className="font-syne font-bold text-2xl text-uf-navy"
              style={{ lineHeight: 1.3 }}
            >
              Founding Members
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {FOUNDING_MEMBERS.map((person, i) => (
              <motion.div
                key={person.name}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                className="card-white rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-uf-alt border border-uf-border flex items-center justify-center mb-5">
                  <span className="font-syne font-bold text-base text-uf-teal">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="font-syne font-bold text-lg text-uf-navy mb-1"
                  style={{ lineHeight: 1.3 }}
                >
                  {person.name}
                </h3>
                <p className="font-sans text-sm text-uf-teal font-medium mb-4">{person.role}</p>
                <LinkedInButton />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
