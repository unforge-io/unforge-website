import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

function SectionLabel({ children }) {
  return (
    <span className="section-label">
      {children}
    </span>
  )
}

function AnimatedHeadline() {
  const line1 = ['The', 'company', 'behind']
  const accent = 'Auth51'

  return (
    <h1
      className="font-syne font-bold text-5xl md:text-6xl text-[#FFFFFF] mb-6"
      style={{
        lineHeight: 1.4,
        paddingTop: '0.1em',
        paddingBottom: '0.2em',
        overflow: 'visible',
        textShadow: '0 3px 14px rgba(0, 0, 0, 0.5)',
      }}
    >
      <span className="block" style={{ overflow: 'visible' }}>
        {line1.map((word, i) => (
          <motion.span
            key={word + i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.45, ease: 'easeOut' }}
            style={{ display: 'inline-block', overflow: 'visible', padding: '0.1em 0', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        ))}
      </span>
      <span className="block" style={{ overflow: 'visible' }}>
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
          style={{ display: 'inline-block', overflow: 'visible', padding: '0.1em 0', color: '#5EEAD4' }}
        >
          {accent}
        </motion.span>
      </span>
    </h1>
  )
}

const ENFORCEMENT = [
  { step: 'Observe', body: 'The Runtime fingerprints the executing agent from its prompt, tools, and configuration.' },
  { step: 'Authorize', body: 'The Authority checks that identity and the grant before a token is minted.' },
  { step: 'Bind', body: 'A per-action intent token carries the signed claims for this call.' },
  { step: 'Enforce', body: 'The Verifier checks those claims at the resource.' },
]

export default function Home() {
  return (
    <div className="flex flex-col">

      <section className="relative overflow-hidden py-24 px-6 bg-[url('/hero.png')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#d8f4ec]/75 via-[#d8f4ec]/35 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-14 items-start">

          <div className="flex flex-col lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 bg-uf-teal text-white font-sans text-xs font-semibold px-4 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-white/70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Runtime identity · Per-agent & per-action authorization
              </span>
            </motion.div>

            <AnimatedHeadline />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-sans text-[#F1F5F9] text-xl leading-relaxed mb-9 max-w-[480px]"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.45)' }}
            >
              Unforge builds enforceable runtime identity and per-action authorization for AI agents.
              Identity is derived from the running agent's fingerprint, and each action is checked at the resource.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="#problem" className="btn-primary">
                  Learn more
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://auth51.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline bg-white hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white"
                >
                  See Auth51
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <span className="font-sans text-xs font-medium text-uf-teal bg-white border border-uf-teal px-3.5 py-1.5 rounded-full">
                <a href="/docs#patents" className="underline hover:no-underline">
                  Four patents pending
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-uf-alt border-y border-uf-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span className="font-sans text-sm text-uf-muted shrink-0">Built on</span>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              'OAuth 2.0',
              'Token exchange · RFC 8693',
              'DPoP · RFC 9449',
              'NIST SP 800-207',
              'Agentic JWT Internet-Draft',
            ].map(s => (
              <span
                key={s}
                className="font-sans text-xs font-medium text-uf-teal bg-white border border-uf-teal px-3.5 py-1.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-uf-alt py-28 px-6" id="problem">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionLabel>The Problem</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
            >
              OAuth was built for clients, not agents
            </h2>
            <p className="font-sans text-uf-body max-w-xl mx-auto">
              A valid token never says which agent is acting, or which action this call is part of. That fact makes agents vulnerable to impersonation and misuse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'No per-agent identity',
                body: 'OAuth identifies the application, not the agent. An orchestrator and its sub-agents can share one client_id, so a token can\'t tell which agent acted.',
              },
              {
                num: '02',
                title: 'The intent vs. execution gap',
                body: 'A scope describes what a client may do. An agent chooses its actions at runtime. The token doesn\'t record which action this call is, so a hijacked plan can still look authorized.',
              },
              {
                num: '03',
                title: 'Delegation OAuth does not enforce',
                body: 'When one agent hands work to another, OAuth doesn\'t bind that chain to the token. Each handoff is a trust assumption the resource server cannot check.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="card-white rounded-xl p-8 transition-all duration-300"
              >
                <div
                  className="font-syne font-bold text-4xl text-uf-teal mb-5 select-none"
                  style={{ lineHeight: 1, paddingBottom: '0.2em' }}
                >
                  {card.num}
                </div>
                <h3
                  className="font-syne font-semibold text-lg text-uf-navy mb-3"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-uf-body leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <SectionLabel>Our Product</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Runtime identity, enforced at the resource
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)}>
              <h2
                className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mb-4"
                style={{ lineHeight: 1.4, paddingBottom: '0.2em' }}
              >
                Auth51
              </h2>
              <p className="font-sans text-uf-body text-lg leading-relaxed mb-6">
                Auth51 doesn't trust an agent to declare its own identity. The Runtime derives a
                checksum from the agent's prompt, tools, and configuration. The Authority mints a
                per-action intent token. The Verifier enforces it at the resource.
              </p>
              <p className="font-sans text-uf-body leading-relaxed mb-8">
                It is built on OAuth 2.0 and is backwards compatible with existing OAuth resource servers.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link to="/products" className="btn-primary">
                  Learn more →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="grid sm:grid-cols-2 gap-4">
              {ENFORCEMENT.map(item => (
                <div key={item.step} className="card-white rounded-xl p-6">
                  <h3
                    className="font-syne font-semibold text-base text-uf-navy mb-2"
                    style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                  >
                    {item.step}
                  </h3>
                  <p className="font-sans text-sm text-uf-body leading-relaxed">{item.body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-uf-alt py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionLabel>Who It's For</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Teams running agents within real systems
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                role: 'Security teams',
                body: 'You need proof of which agent took which action. Auth51 gives you a complete, unforgeable audit trail for every agentic API call.',
              },
              {
                role: 'Platform teams',
                body: 'You need agents in the same process to have distinct runtime identities, including ones that were never registered.',
              },
              {
                role: 'Agent product teams',
                body: 'You need each action bound to intent, so a prompt injection cannot spend a broad scope as if it were approved.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="card-white rounded-xl p-8 transition-all duration-300"
              >
                <h3
                  className="font-syne font-semibold text-lg text-uf-navy mb-3"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {item.role}
                </h3>
                <p className="font-sans text-sm text-uf-body leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <SectionLabel>Contact</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Talk with Unforge today.
            </h2>
            <p className="font-sans text-uf-body text-lg mb-10">
              Auth51 is available in the console. For a conversation about your environment, contact us.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://auth51.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:bg-[#6366f1] hover:outline"
              >
                See Auth51
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="mailto:info@unforge.io?subject=Contact%20Unforge"
                className="btn-outline"
              >
                Contact us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
