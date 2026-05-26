import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const COFOUNDERS = [
  {
    name: 'Dr. Prasenjit Shil',
    role: 'Co-Founder & Co-Investor',
    badges: ['Senior Member IEEE', 'IEEE HKN Member'],
    bio: 'Data and AI leader in the energy sector specializing in advanced analytics, load forecasting, and large-scale data platforms. Leads high-impact initiatives improving grid reliability and operational efficiency using modern cloud technologies.',
    highlights: [
      '2022 Utility Analytics Institute Top 25 Thought Leaders in Utility Analytics',
      'IEEE R5 ExCom — North Area Chair and Industry Coordinator Chair',
      "Driving force behind Unforge's focus on secure agent-driven identity solutions",
    ],
  },
  {
    name: 'Abhishek Goswami',
    role: 'Co-Founder & Co-Investor',
    badges: ['Senior Member IEEE', 'MBA · University of Chicago Booth'],
    bio: 'Author of the Agentic JWT protocol and two U.S. patents filed in 2025. 20 years across enterprise architecture, AI, and cybersecurity spanning Power and Energy, Banking, and Healthcare industries.',
    highlights: [
      'Author of Agentic JWT — arXiv:2509.13597',
      'Two U.S. patents filed in 2025 (Application Nos. 19/204,492 and 19/315,486)',
      'Eta Kappa Nu IEEE Honor Society (HKN)',
    ],
  },
]

const FOUNDING_MEMBERS = [
  { name: 'Rahul K',    role: 'Founding Member' },
  { name: 'Neil Das',   role: 'Founding Member' },
  { name: 'Jason Liao', role: 'Founding Member' },
  { name: 'Addison Thurston', role: 'Founding Member' },
]

const ADVISORS = [
  {
    name: 'Kajal Pal',
    title: 'Director, DC3',
    organization: 'Department of Defense',
  },
]

export default function Company() {
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
            <span className="section-label">Company</span>
            <h1
              className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-5 mb-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
            >
              About Unforge
            </h1>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-2xl">
              We are building the identity and security layer that the agentic era demands.
              A company born from research, not market opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PURPOSE ───────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="section-label">Our Purpose</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-2"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              The foundation we build on
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp(0.05)}>
              <span className="section-label">Our Vision</span>
              <h3
                className="font-syne font-bold text-xl text-uf-navy mt-4 mb-5"
                style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
              >
                Vision
              </h3>
              <p className="font-sans text-uf-body leading-relaxed text-lg">
                To be the global standard for identity and trust in the AI era, creating a future where
                autonomous agents can act with full agency while remaining perfectly aligned with human goals.
                We envision a secure ecosystem where unforgeable agent identities and continuous verification
                are the baseline for all intelligent systems.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">Our Mission</span>
              <h3
                className="font-syne font-bold text-xl text-uf-navy mt-4 mb-5"
                style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
              >
                Mission
              </h3>
              <p className="font-sans text-uf-body leading-relaxed text-lg">
                To protect the integrity of the autonomous world by cryptographically binding every AI agent
                action to verified user intent. We provide the foundational security layer that bridges the
                gap between stochastic AI reasoning and Zero-Trust execution, ensuring that every API call is
                secure, auditable, and explicitly authorized.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH FIRST ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">Research First</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-6"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              We started with a research problem
            </h2>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              Unforge was not founded because AI agents were trending. It was founded because a
              specific, measurable security gap existed: the absence of cryptographic identity for
              individual AI agents operating within multi-agent systems.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              The co-founders identified this gap, designed the Agentic JWT protocol to close it,
              validated the protocol experimentally on real workloads, submitted the research to
              arXiv, filed the patents, and then built the company.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg">
              That sequence matters. The science came first. The product follows the science.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div {...fadeUp(0.15)} className="mt-14">
            <div className="space-y-6">
              {[
                { year: '2024', event: 'Identified the identity gap in agentic AI systems' },
                { year: '2024', event: 'Designed the Agentic JWT protocol and three-token architecture' },
                { year: '2024', event: 'Validated experimentally — 18.15ms overhead, 12/12 STRIDE threats blocked' },
                { year: '2025', event: 'Submitted to arXiv (arXiv:2509.13597)' },
                { year: '2025', event: 'Filed two U.S. Patents (Application Nos. 19/204,492 and 19/315,486)' },
                { year: '2026', event: 'Founded Unforge and began building Auth51' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="font-mono text-sm text-uf-teal font-semibold shrink-0 w-12">{item.year}</span>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-uf-teal mt-1.5 shrink-0" />
                    <p className="font-sans text-uf-body">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE NAME ──────────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">The Name</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-6"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              What does <span className="text-uf-teal">Unforge</span> mean?
            </h2>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              UNFORGE stands for: Unified Non-Forgeable Orchestration for Rooted Governance and Enforcement.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              To forge is to create something strong through heat and pressure — and to forge is also
              to cryptographically sign, to authenticate, to make unforgeable. Both meanings apply.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              The <span className="font-semibold text-uf-navy">un</span> prefix signals the inverse:
              we are in the business of making forgery impossible. Unforge is the system that ensures
              no agent can impersonate another, no token can be replayed, no delegation chain can be
              silently manipulated.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg">
              Where traditional systems trust by default and audit after the fact, Unforge verifies
              cryptographically before every action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OPEN STANDARDS ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">Open Standards</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-6"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Committed to open standards
            </h2>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              The Agentic JWT is a published standard, specification available on arXiv and presented
              at IEEE conference. The founders made Agentic JWT protocol available via IETF Draft
              (<a
                href="https://datatracker.ietf.org/doc/draft-goswami-agentic-jwt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uf-teal hover:underline"
              >https://datatracker.ietf.org/doc/draft-goswami-agentic-jwt/</a>).
              The reference implementation has also been submitted to NIST.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-8">
              Our long-term goal is industry standardization — making Agentic JWT the foundation that
              the entire industry builds on. We believe the agentic era needs open cryptographic
              standards the same way the web needed TLS.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://arxiv.org/abs/2509.13597"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                arXiv:2509.13597 ↗
              </a>
              <a
                href="https://github.com/unforge-io/auth51-console"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDING TEAM ─────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-4">
            <span className="section-label">Founding Team</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-2"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              The people building the standard
            </h2>
          </motion.div>

          {/* Co-Founders */}
          <motion.div {...fadeUp(0.05)} className="mb-8 mt-10">
            <h3
              className="font-syne font-bold text-xl text-uf-navy"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Co-Founders
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {COFOUNDERS.map((person, i) => (
              <motion.div
                key={person.name}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="card-white rounded-xl p-8 transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-uf-alt border border-uf-border flex items-center justify-center mb-6">
                  <span
                    className="font-syne font-bold text-xl text-uf-teal"
                    style={{ paddingBottom: '0.2em' }}
                  >
                    {person.name.charAt(0)}
                  </span>
                </div>

                <h3
                  className="font-syne font-bold text-xl text-uf-navy mb-1"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
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
                <ul className="space-y-2.5">
                  {person.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5 font-sans text-sm text-uf-body">
                      <span className="text-uf-teal shrink-0 mt-0.5 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Founding Members */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <h3
              className="font-syne font-bold text-xl text-uf-navy"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Founding Members
            </h3>
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
                  <span
                    className="font-syne font-bold text-base text-uf-teal"
                    style={{ paddingBottom: '0.2em' }}
                  >
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="font-syne font-bold text-lg text-uf-navy mb-1"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {person.name}
                </h3>
                <p className="font-sans text-sm text-uf-teal font-medium">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="section-label">Advisors</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Advisory Board
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ADVISORS.map((advisor, i) => (
              <motion.div
                key={advisor.name}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                className="card-white rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-uf-alt border border-uf-border flex items-center justify-center mb-5">
                  <span
                    className="font-syne font-bold text-base text-uf-teal"
                    style={{ paddingBottom: '0.2em' }}
                  >
                    {advisor.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="font-syne font-bold text-lg text-uf-navy mb-1"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {advisor.name}
                </h3>
                <p className="font-sans text-sm text-uf-teal font-medium mb-1">{advisor.title}</p>
                <p className="font-sans text-xs text-uf-muted">{advisor.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
