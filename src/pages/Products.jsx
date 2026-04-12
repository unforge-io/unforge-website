import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function Products() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 border-b border-uf-border text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Our Products</span>
          <h1
            className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-5 mb-5"
            style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
          >
            Security infrastructure<br className="hidden sm:block" /> for the agentic era
          </h1>
          <p className="font-sans text-uf-body text-lg max-w-xl mx-auto mb-10">
            Two products. One mission: make agentic AI systems identifiable, accountable, and auditable.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#auth51" className="btn-primary">Auth51</a>
            <a href="#patchet" className="btn-outline">Patchet</a>
          </div>
        </motion.div>
      </section>

      {/* ── AUTH51 ────────────────────────────────────────────────────── */}
      <section id="auth51" className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">Product 01</span>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-4 mb-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.2em' }}
            >
              Auth51
            </h2>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-3xl mb-14">
              The commercial implementation of the Agentic JWT protocol. Auth51 gives every AI agent
              in your system a cryptographic identity, issues Intent Tokens binding each API call to an
              approved workflow step, and enforces delegation chain integrity end-to-end.
            </p>
          </motion.div>

          {/* How it works — 4 steps */}
          <motion.div {...fadeUp(0.1)} className="mb-16">
            <h3
              className="font-syne font-semibold text-xl text-uf-navy mb-8"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              How it works
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Agent Registration',
                  body: 'Each agent registers with the Auth51 IDP and receives a unique agent_checksum — a cryptographic fingerprint of its code, version, and configuration.',
                },
                {
                  step: '02',
                  title: 'Workflow Authorization',
                  body: 'When a user triggers a workflow, the orchestrator agent requests an Intent Token scoped to that specific workflow and step sequence.',
                },
                {
                  step: '03',
                  title: 'Intent Token Issuance',
                  body: 'Auth51 issues a per-call Intent Token binding the API call to: the workflow ID, the current step, the executing agent, and the full delegation chain.',
                },
                {
                  step: '04',
                  title: 'Cryptographic Enforcement',
                  body: 'Every downstream API call carries the Intent Token. The resource server verifies the token — any deviation from the authorized intent rejects the call.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  {...fadeUp(i * 0.08)}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                  className="card-white rounded-xl p-6 transition-all duration-300"
                >
                  <div
                    className="font-syne font-bold text-3xl text-uf-teal mb-4 select-none"
                    style={{ lineHeight: 1, paddingBottom: '0.2em' }}
                  >
                    {item.step}
                  </div>
                  <h4
                    className="font-syne font-semibold text-base text-uf-navy mb-2"
                    style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                  >
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-uf-body leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature grid */}
          <motion.div {...fadeUp(0.2)} className="mb-14">
            <h3
              className="font-syne font-semibold text-xl text-uf-navy mb-8"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Key capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unique agent_checksum identity for every agent instance',
                'Intent Tokens scoped to agent + workflow + step — issued per API call',
                'Delegation chain verification from user through every agent handoff',
                'Blocks agent impersonation, prompt injection, token replay, scope inflation, and privilege escalation',
                'Under 20ms total security overhead per API call',
                'Full backward compatibility with OAuth 2.0 — drop-in deployment',
                'Integrates with Okta, Auth0, Azure AD, AWS IAM',
                'Two U.S. patents filed in 2025 (Application Nos. 19/204,492 and 19/315,486)',
              ].map(f => (
                <div key={f} className="flex items-start gap-3 font-sans text-sm text-uf-body">
                  <span className="text-uf-teal mt-0.5 shrink-0 font-bold">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compatibility */}
          <motion.div {...fadeUp(0.25)}>
            <h3
              className="font-syne font-semibold text-xl text-uf-navy mb-6"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Compatible with
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Okta', 'Auth0', 'Azure AD', 'AWS IAM', 'Google IAM', 'Ping Identity', 'Any OAuth 2.0 IDP'].map(p => (
                <span
                  key={p}
                  className="font-sans text-sm font-medium text-uf-teal bg-white border border-uf-teal px-4 py-2 rounded-lg"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PATCHET ───────────────────────────────────────────────────── */}
      <section id="patchet" className="bg-uf-alt py-28 px-6 border-t border-uf-border">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">Product 02</span>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-4 mb-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.2em' }}
            >
              Patchet
            </h2>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-3xl mb-14">
              SBOM vulnerability detection and automated patching. Continuously scans your repositories,
              generates accurate software bills of materials, fetches CVE data from osv.dev, triages
              vulnerabilities by severity, and creates automated pull requests with ready-to-merge patches.
            </p>
          </motion.div>

          {/* How it works — 4 steps */}
          <motion.div {...fadeUp(0.1)} className="mb-16">
            <h3
              className="font-syne font-semibold text-xl text-uf-navy mb-8"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              How it works
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Scan Manifests',
                  body: 'Patchet scans your repository for all dependency manifest files: package.json, pom.xml, requirements.txt, go.mod, Cargo.toml, and more.',
                },
                {
                  step: '02',
                  title: 'Generate SBOM',
                  body: 'A complete, accurate software bill of materials is generated across all detected ecosystems — giving you a full inventory of every dependency.',
                },
                {
                  step: '03',
                  title: 'Fetch CVEs',
                  body: 'Real-time CVE data is fetched from osv.dev. Each vulnerability is scored by CVSS severity and grouped into optimal patch batches.',
                },
                {
                  step: '04',
                  title: 'Automated PRs',
                  body: 'Patchet creates pull requests with patches ready to review and merge. No manual effort required — just review and ship.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  {...fadeUp(i * 0.08)}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                  className="card-white rounded-xl p-6 transition-all duration-300"
                >
                  <div
                    className="font-syne font-bold text-3xl text-uf-teal mb-4 select-none"
                    style={{ lineHeight: 1, paddingBottom: '0.2em' }}
                  >
                    {item.step}
                  </div>
                  <h4
                    className="font-syne font-semibold text-base text-uf-navy mb-2"
                    style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                  >
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-uf-body leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ecosystems */}
          <motion.div {...fadeUp(0.2)} className="mb-14">
            <h3
              className="font-syne font-semibold text-xl text-uf-navy mb-6"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Supported ecosystems
            </h3>
            <div className="flex flex-wrap gap-3">
              {['npm / Node.js', 'PyPI / Python', 'Maven / Java', 'Go modules', 'Cargo / Rust', 'RubyGems', 'NuGet / .NET', 'Composer / PHP'].map(e => (
                <span
                  key={e}
                  className="font-mono text-xs text-uf-teal bg-white border border-uf-border px-3.5 py-1.5 rounded-lg"
                >
                  {e}
                </span>
              ))}
            </div>
          </motion.div>

          {/* GitHub link */}
          <motion.div {...fadeUp(0.25)}>
            <a
              href="https://github.com/hypernome/patchet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              View on GitHub ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 text-center border-t border-uf-border">
        <motion.div {...fadeUp()} className="max-w-xl mx-auto">
          <h2
            className="font-syne font-bold text-3xl text-uf-navy mb-4"
            style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
          >
            Ready to secure your agents?
          </h2>
          <p className="font-sans text-uf-body text-lg mb-8">
            Both products are in private beta. Request early access for your team.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link to="/signup" className="btn-primary">
              Request Access
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
