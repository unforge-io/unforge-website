import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* ─── helpers ─────────────────────────────────────────────────────────── */
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

/* ─── Word-by-word animated headline ─────────────────────────────────── */
function AnimatedHeadline() {
  const line1 = ['Auth', 'built', 'for', 'agents']
  const line2 = ['that', 'actually']
  const tealWord = 'works.'

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
      {/* Line 1 */}
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
      {/* Line 2 */}
      <span className="block" style={{ overflow: 'visible' }}>
        {line2.map((word, i) => (
          <motion.span
            key={word + i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.45, ease: 'easeOut' }}
            style={{ display: 'inline-block', overflow: 'visible', padding: '0.1em 0', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.45, ease: 'easeOut' }}
          style={{ display: 'inline-block', overflow: 'visible', padding: '0.1em 0', color: '#5EEAD4' }}
        >
          {tealWord}
        </motion.span>
      </span>
    </h1>
  )
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6 bg-[url('/hero.png')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#d8f4ec]/75 via-[#d8f4ec]/35 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-14 items-start">

          {/* Left column */}
          <div className="flex flex-col lg:pt-4">
            {/* Badge */}
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
                Agentic JWT · Open Standard
              </span>
            </motion.div>

            {/* Animated headline */}
            <AnimatedHeadline />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-sans text-[#F1F5F9] text-xl leading-relaxed mb-9 max-w-[480px]"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.45)' }}
            >
              Traditional auth was built for humans. Unforge gives every agent in your system
              a verifiable, auditable identity — so you always know who acted, on what, and why.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.45 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#problem"
                  className="btn-primary"
                >
                  Learn more
                </a>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {[
                {
                  key: 'patents',
                  content: 'Two U.S. patents filed in 2025 (Application Nos. 19/204,492 and 19/315,486)',
                },
                {
                  key: 'stride',
                  content: (
                    <>
                      100%{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/STRIDE_model"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                      >
                        STRIDE
                      </a>{' '}
                      Coverage
                    </>
                  ),
                },
              ].map(badge => (
                <span
                  key={badge.key}
                  className="font-sans text-xs font-medium text-uf-teal bg-white border border-uf-teal px-3.5 py-1.5 rounded-full"
                >
                  {badge.content}
                </span>
              ))}
            </motion.div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.45 }}
              className="flex flex-wrap gap-3 py-3"
            >
              {['Two U.S. patents filed in 2026 (Application Nos. 19/645,211 and 19/645,431)'].map(badge => (
                <span
                  key={badge}
                  className="font-sans text-xs font-medium text-uf-teal bg-white border border-uf-teal px-3.5 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="bg-uf-alt border-y border-uf-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span className="font-sans text-sm text-uf-muted shrink-0">Built on standards from</span>
          <div className="flex flex-wrap gap-3 items-center">
            {['OAuth 2.0', 'NIST SP 800-207', 'OWASP Top 10', 'IETF RFC 6749'].map(s => (
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

      {/* ── PROBLEM ───────────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-28 px-6" id="problem">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionLabel>The Problem</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
            >
              Traditional auth was not built for agents
            </h2>
            <p className="font-sans text-uf-body max-w-xl mx-auto">
              OAuth 2.0 was designed for humans and applications. AI agents break every assumption it makes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Agents have no identity',
                body: 'OAuth tokens identify applications, not individual agents. When an orchestrator spawns subagents they all share one client_id. When something goes wrong, you cannot know which agent did it.',
              },
              {
                num: '02',
                title: 'Intent and execution are separated',
                body: 'LLM-driven agents make decisions non-deterministically. A scope cannot constrain what an agent does at runtime. Prompt injection can silently redirect any agent to arbitrary actions.',
              },
              {
                num: '03',
                title: 'Delegation chains are invisible',
                body: 'When Agent A delegates to Agent B which delegates to Agent C, there is no cryptographic record of who authorized what. Every handoff is a blind trust assumption.',
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

      {/* ── PRODUCT ──────────────────────────────────────────────────── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <SectionLabel>Our Product</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Security infrastructure for the agentic era
            </h2>
          </motion.div>

          {/* Auth51 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeUp(0.1)}>
              <h2
                className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mb-4"
                style={{ lineHeight: 1.4, paddingBottom: '0.2em' }}
              >
                Auth51
              </h2>
              <p className="font-sans text-uf-body text-lg leading-relaxed mb-6">
                Implements the Agentic JWT protocol commercially. Gives every AI agent a cryptographic
                identity via <code className="font-mono text-sm bg-uf-alt px-1.5 py-0.5 rounded text-uf-teal">agent_checksum</code>.
                Issues Intent Tokens binding each API call to an approved workflow step.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Blocks agent impersonation, prompt injection, token replay, scope inflation, and privilege escalation',
                  'Under 20ms overhead',
                  'Compatible with Okta, Auth0, Azure AD',
                  '100% backward compatible with OAuth 2.0',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm text-uf-body">
                    <span className="text-uf-teal mt-0.5 shrink-0 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link to="/products" className="btn-primary">
                  Learn more →
                </Link>
              </motion.div>
            </motion.div>

            {/* Code block */}
            <motion.div {...fadeUp(0.2)}>
              <div
                className="rounded-xl"
                style={{ background: '#0A0F1E', border: '1px solid #1a2540', overflow: 'visible' }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 font-mono text-xs text-white/40">intent-token.json</span>
                </div>
                <pre className="font-mono text-xs leading-6 p-6 overflow-x-auto text-white/80">
                  <span className="text-white/40">{'{'}</span>{'\n'}
                  {'  '}<span className="text-uf-teal">"intent"</span><span className="text-white/40">: {'{'}</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"workflow_id"</span><span className="text-white/40">:        </span><span className="text-yellow-300">"wf_deploy_0xf4a2"</span><span className="text-white/40">,</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"workflow_step"</span><span className="text-white/40">:      </span><span className="text-yellow-300">"validate_build"</span><span className="text-white/40">,</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"executed_by"</span><span className="text-white/40">:        </span><span className="text-yellow-300">"agent:code-reviewer-v2"</span><span className="text-white/40">,</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"delegation_chain"</span><span className="text-white/40">:   [</span>{'\n'}
                  {'      '}<span className="text-yellow-300">"user:alice"</span><span className="text-white/40">,</span>{'\n'}
                  {'      '}<span className="text-yellow-300">"agent:orchestrator-v1"</span><span className="text-white/40">,</span>{'\n'}
                  {'      '}<span className="text-yellow-300">"agent:code-reviewer-v2"</span>{'\n'}
                  {'    '}<span className="text-white/40">],</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"step_sequence_hash"</span><span className="text-white/40">: </span><span className="text-yellow-300">"sha256:9f8e7d6c..."</span>{'\n'}
                  {'  '}<span className="text-white/40">'{'}'},</span>{'\n'}
                  {'  '}<span className="text-uf-teal">"agent_proof"</span><span className="text-white/40">: {'{'}</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"agent_checksum"</span><span className="text-white/40">:   </span><span className="text-yellow-300">"sha256:3a2b1c0d..."</span><span className="text-white/40">,</span>{'\n'}
                  {'    '}<span className="text-uf-teal">"registration_id"</span><span className="text-white/40">:  </span><span className="text-yellow-300">"reg_7x9y2z"</span>{'\n'}
                  {'  '}<span className="text-white/40">{'}'}</span>{'\n'}
                  <span className="text-white/40">{'}'}</span>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionLabel>Who It's For</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Built for both teams developing agentic systems and building APIs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                role: 'Security Engineers',
                body: 'You need cryptographic proof of which agent accessed what — not log guesswork. Auth51 gives you a complete, unforgeable audit trail for every agentic API call.',
              },
              {
                role: 'Platform Teams',
                body: 'You need identity isolation between agents running in the same process space. Auth51\'s agent_checksum ensures no two agents share an identity, even within a single orchestrator.',
              },
              {
                role: 'AI Product Teams',
                body: 'You need API calls bound to user intent so prompt injection cannot escalate agent permissions. Intent Tokens enforce exactly that at the protocol level.',
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

      {/* ── EARLY ACCESS ──────────────────────────────────────────────── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <SectionLabel>Private Beta</SectionLabel>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-5 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Join the waitlist.
            </h2>
            <p className="font-sans text-uf-body text-lg mb-10">
              Auth51 is in private beta. Request early access for your team.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="mailto:info@unforge.io?subject=Early%20access%20request"
              className="btn-primary"
            >
              Request early access
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.25)} className="font-sans text-xs text-uf-muted mt-5">
            No spam. We'll reach out when your spot is ready.
          </motion.p>
        </div>
      </section>

    </div>
  )
}
