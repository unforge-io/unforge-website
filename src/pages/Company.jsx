import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

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
              style={{ lineHeight: 1.3, overflow: 'visible' }}
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

      {/* ── MISSION ───────────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp()}>
              <span className="section-label">Our Mission</span>
              <h2
                className="font-syne font-bold text-2xl text-uf-navy mt-4 mb-5"
                style={{ lineHeight: 1.3 }}
              >
                Mission
              </h2>
              <p className="font-sans text-uf-body leading-relaxed text-lg">
                We are building the identity and security layer for the agentic era. Every AI agent
                that acts in the world deserves a cryptographic identity, and every action it takes
                deserves a verifiable audit trail.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">Our Vision</span>
              <h2
                className="font-syne font-bold text-2xl text-uf-navy mt-4 mb-5"
                style={{ lineHeight: 1.3 }}
              >
                Vision
              </h2>
              <p className="font-sans text-uf-body leading-relaxed text-lg">
                A world where every AI agent that acts is identifiable, accountable, and auditable —
                by cryptographic proof, not policy promises. Where authorization is not assumed but
                continuously verified at the protocol level.
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
              style={{ lineHeight: 1.3 }}
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
              IEEE Access, filed the patent, and then built the company.
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
                { year: '2025', event: 'Submitted to IEEE Access — arXiv:2509.13597' },
                { year: '2025', event: 'Filed US Patent 19/315,486' },
                { year: '2025', event: 'Founded Unforge and began building NovaAuth and Patchet' },
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
              style={{ lineHeight: 1.3 }}
            >
              What does <span className="text-uf-teal">forge</span> mean?
            </h2>
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
              style={{ lineHeight: 1.3 }}
            >
              Committed to open standards
            </h2>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-5">
              Agentic JWT is not a proprietary protocol locked inside NovaAuth. It is a published,
              peer-reviewed specification available on arXiv and submitted to IEEE Access. The
              reference implementation is on GitHub.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-8">
              Our long-term goal is IETF standardization — making Agentic JWT the foundation that
              the entire industry builds on, not just Unforge products. We believe the agentic era
              needs open cryptographic standards the same way the web needed TLS.
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
                href="https://github.com/hypernome/patchet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
              <Link to="/research" className="btn-primary">
                Read the research →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
