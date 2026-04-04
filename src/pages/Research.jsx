import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const STRIDE_THREATS = [
  { id: 'T1',  name: 'Agent Identity Spoofing',          category: 'Spoofing',                  result: 'Blocked' },
  { id: 'T2',  name: 'Token Replay Attacks',             category: 'Spoofing',                  result: 'Blocked' },
  { id: 'T3',  name: 'Shim Library Impersonation',       category: 'Spoofing',                  result: 'Blocked' },
  { id: 'T4',  name: 'Runtime Code Modification',        category: 'Tampering',                 result: 'Blocked' },
  { id: 'T5',  name: 'Prompt Injection Attacks',         category: 'Tampering',                 result: 'Blocked' },
  { id: 'T6',  name: 'Workflow Definition Tampering',    category: 'Tampering',                 result: 'Blocked' },
  { id: 'T7',  name: 'Cross-Agent Privilege Escalation', category: 'Elevation of Privilege',    result: 'Blocked' },
  { id: 'T8',  name: 'Workflow Step Bypass',             category: 'Elevation of Privilege',    result: 'Blocked' },
  { id: 'T9',  name: 'Scope Inflation',                  category: 'Elevation of Privilege',    result: 'Blocked' },
  { id: 'T10', name: 'Intent Origin Forgery',            category: 'Repudiation',               result: 'Blocked' },
  { id: 'T11', name: 'Delegation Chain Manipulation',    category: 'Repudiation',               result: 'Blocked' },
  { id: 'T12', name: 'Agent Configuration Exposure',     category: 'Information Disclosure',    result: 'Blocked' },
]

const ABSTRACT = `The rapid proliferation of autonomous AI agents operating within complex multi-agent systems has exposed critical security vulnerabilities in existing authorization frameworks. Current OAuth 2.0 implementations fail to address agent-specific threats including identity spoofing, prompt injection, and delegation chain manipulation. This paper presents Agentic JWT, a novel security protocol that extends OAuth 2.0 to provide cryptographic identity for individual AI agents, intent binding for every API call, and verifiable delegation chain integrity. The protocol introduces three new token types — Agent Registration Token, Intent Token, and Delegation Token — evaluated against a STRIDE threat model comprising 12 threat categories. Experimental results demonstrate 100% threat mitigation across all STRIDE categories with a total security overhead of 18.15ms, representing a 25.5% improvement in overall workflow execution time versus baseline due to eliminated re-authentication cycles. The protocol maintains full backward compatibility with existing OAuth 2.0 infrastructure.`

const TOKEN_JSON = `{
  "intent": {
    "workflow_id":        "wf_prod_deploy_0xf4a2",
    "workflow_step":      "deploy_validation",
    "executed_by":        "agent:code-reviewer-v2",
    "delegation_chain":   [
      "user:alice",
      "agent:orchestrator-v1",
      "agent:code-reviewer-v2"
    ],
    "step_sequence_hash": "sha256:9f8e7d6c5b4a3..."
  },
  "agent_proof": {
    "agent_checksum":   "sha256:3a2b1c0d9e8f...",
    "registration_id":  "reg_7x9y2z"
  }
}`

export default function Research() {
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
            <span className="section-label">Research</span>
            <h1
              className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-uf-navy mt-5 mb-4"
              style={{ lineHeight: 1.3, overflow: 'visible' }}
            >
              Agentic JWT: A Secure Delegation Protocol for Autonomous AI Agents
            </h1>
            <p className="font-sans text-uf-body text-lg mb-8">
              Abhishek Goswami · Senior Member IEEE
            </p>

            {/* Publication badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://arxiv.org/abs/2509.13597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-uf-teal text-uf-teal font-sans text-sm font-medium px-4 py-2 rounded-lg hover:bg-uf-teal hover:text-white transition-colors"
              >
                arXiv:2509.13597 ↗
              </a>
              <span className="inline-flex items-center gap-2 bg-uf-alt border border-uf-border text-uf-body font-sans text-sm font-medium px-4 py-2 rounded-lg">
                Patent US 19/315,486
              </span>
              <span className="inline-flex items-center gap-2 bg-uf-alt border border-uf-border text-uf-body font-sans text-sm font-medium px-4 py-2 rounded-lg">
                IEEE Access Submission
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABSTRACT ──────────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <h2
              className="font-syne font-bold text-xl text-uf-navy mb-6"
              style={{ lineHeight: 1.3 }}
            >
              Abstract
            </h2>
            <blockquote
              className="bg-white border-l-4 border-uf-teal rounded-r-xl p-8"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <p className="font-sans text-uf-body leading-relaxed">
                {ABSTRACT}
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── FIVE CONTRIBUTIONS ────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy"
              style={{ lineHeight: 1.3 }}
            >
              Key Contributions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Agentic JWT Protocol',
                body: 'A complete OAuth 2.0 extension introducing Agent Registration Tokens, Intent Tokens, and Delegation Tokens — providing cryptographic identity, intent binding, and delegation chain verification for autonomous AI agents.',
              },
              {
                num: '02',
                title: 'STRIDE Threat Analysis',
                body: 'A systematic threat model for multi-agent AI systems evaluated across 12 threat categories spanning Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.',
              },
              {
                num: '03',
                title: 'Intent-Execution Binding',
                body: 'The Intent Token mechanism cryptographically binds every API call to an approved workflow step, the specific agent executing it, and the authorized delegation chain — making prompt injection ineffective at the protocol level.',
              },
              {
                num: '04',
                title: 'Empirical Performance Validation',
                body: 'Live experimental validation on a real Patchet SBOM pipeline demonstrating 18.15ms total security overhead and 25.5% improvement in overall workflow execution time versus baseline OAuth 2.0.',
              },
              {
                num: '05',
                title: 'Open Standards Alignment',
                body: 'Full backward compatibility with OAuth 2.0, alignment with NIST SP 800-207 Zero Trust Architecture, OWASP Top 10 for LLMs, and a clear path toward IETF standardization.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                className="card-white rounded-xl p-8 flex gap-6 transition-all duration-300"
              >
                <div
                  className="font-syne font-bold text-3xl text-uf-teal shrink-0 select-none"
                  style={{ lineHeight: 1 }}
                >
                  {item.num}
                </div>
                <div>
                  <h3
                    className="font-syne font-semibold text-lg text-uf-navy mb-2"
                    style={{ lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-uf-body leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE INSIGHT ──────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mb-6"
              style={{ lineHeight: 1.3 }}
            >
              The Core Insight: Intent-Execution Separation
            </h2>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-6">
              OAuth 2.0 grants a token with a scope — <code className="font-mono text-sm bg-white border border-uf-border px-1.5 py-0.5 rounded text-uf-teal">read:files</code>.
              That token is then used by an agent to take actions. But the token says nothing about
              <em> which workflow step</em> authorized the action, <em>which specific agent</em> is executing it,
              or <em>whether the original user intended</em> this exact operation.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg mb-6">
              When a prompt injection attack redirects an agent, the token is still valid. The scope
              still matches. The request looks authorized. OAuth 2.0 has no mechanism to detect that
              the intent behind the action has been hijacked.
            </p>
            <p className="font-sans text-uf-body leading-relaxed text-lg">
              Agentic JWT closes this gap. Every API call carries an Intent Token that cryptographically
              binds the call to: the workflow that authorized it, the specific step that should produce it,
              the agent executing it, and the full delegation chain from user to agent. If any link in
              that chain is broken or forged, the request fails at the protocol level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TOKEN SUITE ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-8">
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy"
              style={{ lineHeight: 1.3 }}
            >
              The Intent Token
            </h2>
            <p className="font-sans text-uf-body mt-3">
              The core token type in the Agentic JWT suite. Issued per API call, not per session.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: '#0A0F1E', border: '1px solid #1a2540' }}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 font-mono text-xs text-white/40">intent-token.json</span>
              </div>
              <pre className="font-mono text-sm leading-7 p-6 overflow-x-auto text-white/80">
<span className="text-white/40">{'{'}</span>{'\n'}
{'  '}<span className="text-uf-teal">"intent"</span><span className="text-white/40">: {'{'}</span>{'\n'}
{'    '}<span className="text-uf-teal">"workflow_id"</span><span className="text-white/40">:        </span><span className="text-yellow-300">"wf_prod_deploy_0xf4a2"</span><span className="text-white/40">,</span>{'\n'}
{'    '}<span className="text-uf-teal">"workflow_step"</span><span className="text-white/40">:      </span><span className="text-yellow-300">"deploy_validation"</span><span className="text-white/40">,</span>{'\n'}
{'    '}<span className="text-uf-teal">"executed_by"</span><span className="text-white/40">:        </span><span className="text-yellow-300">"agent:code-reviewer-v2"</span><span className="text-white/40">,</span>{'\n'}
{'    '}<span className="text-uf-teal">"delegation_chain"</span><span className="text-white/40">:   [</span>{'\n'}
{'      '}<span className="text-yellow-300">"user:alice"</span><span className="text-white/40">,</span>{'\n'}
{'      '}<span className="text-yellow-300">"agent:orchestrator-v1"</span><span className="text-white/40">,</span>{'\n'}
{'      '}<span className="text-yellow-300">"agent:code-reviewer-v2"</span>{'\n'}
{'    '}<span className="text-white/40">],</span>{'\n'}
{'    '}<span className="text-uf-teal">"step_sequence_hash"</span><span className="text-white/40">: </span><span className="text-yellow-300">"sha256:9f8e7d6c5b4a3..."</span>{'\n'}
{'  '}<span className="text-white/40">'{'}'},</span>{'\n'}
{'  '}<span className="text-uf-teal">"agent_proof"</span><span className="text-white/40">: {'{'}</span>{'\n'}
{'    '}<span className="text-uf-teal">"agent_checksum"</span><span className="text-white/40">:   </span><span className="text-yellow-300">"sha256:3a2b1c0d9e8f..."</span><span className="text-white/40">,</span>{'\n'}
{'    '}<span className="text-uf-teal">"registration_id"</span><span className="text-white/40">:  </span><span className="text-yellow-300">"reg_7x9y2z"</span>{'\n'}
{'  '}<span className="text-white/40">{'}'}</span>{'\n'}
<span className="text-white/40">{'}'}</span>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STRIDE TABLE ──────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mb-2"
              style={{ lineHeight: 1.3 }}
            >
              STRIDE Threat Analysis
            </h2>
            <p className="font-sans text-uf-body">
              12 of 12 threat categories blocked. 100% mitigation.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="card-white rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-uf-teal">
                  <th className="text-left py-3.5 px-6 font-syne font-semibold text-white text-xs uppercase tracking-wider">ID</th>
                  <th className="text-left py-3.5 px-6 font-syne font-semibold text-white text-xs uppercase tracking-wider">Threat</th>
                  <th className="text-left py-3.5 px-6 font-syne font-semibold text-white text-xs uppercase tracking-wider hidden sm:table-cell">Category</th>
                  <th className="text-left py-3.5 px-6 font-syne font-semibold text-white text-xs uppercase tracking-wider">Result</th>
                </tr>
              </thead>
              <tbody>
                {STRIDE_THREATS.map((t, i) => (
                  <tr
                    key={t.id}
                    className={`border-b border-uf-border ${i % 2 === 0 ? 'bg-white' : 'bg-uf-alt/50'}`}
                  >
                    <td className="py-3.5 px-6 font-mono text-xs text-uf-muted">{t.id}</td>
                    <td className="py-3.5 px-6 font-sans text-uf-navy">{t.name}</td>
                    <td className="py-3.5 px-6 font-sans text-uf-body hidden sm:table-cell">{t.category}</td>
                    <td className="py-3.5 px-6">
                      <span className="font-sans text-xs font-semibold text-uf-teal">
                        {t.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── PERFORMANCE ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy"
              style={{ lineHeight: 1.3 }}
            >
              Performance Results
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: '18.15ms', label: 'Total security overhead per API call' },
              { stat: '4695ms',  label: 'Agentic JWT workflow execution time' },
              { stat: '100%',    label: 'Threat mitigation across all STRIDE categories' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(i * 0.1)}
                className="card-white rounded-xl p-8 text-center"
              >
                <div
                  className="font-syne font-bold text-4xl text-uf-teal mb-3"
                  style={{ lineHeight: 1.2 }}
                >
                  {item.stat}
                </div>
                <p className="font-sans text-sm text-uf-body leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS ─────────────────────────────────────────────────────── */}
      <section className="bg-uf-alt py-20 px-6 border-t border-uf-border">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="flex flex-wrap gap-4">
            <a
              href="https://arxiv.org/abs/2509.13597"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Read on arXiv ↗
            </a>
            <a
              href="https://github.com/hypernome/patchet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Reference Implementation ↗
            </a>
            <Link to="/products" className="btn-primary">
              See NovaAuth →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
