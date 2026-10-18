import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const COMPONENTS = [
  {
    title: 'Authority',
    body: 'The trust root. It holds the agent and workflow registries, re-verifies the checksum, and mints the intent token.',
  },
  {
    title: 'Client runtime',
    body: 'The in-process enforcement point. It observes the agent, derives identity, and attaches the intent token on the governed path.',
  },
  {
    title: 'MCP proxy',
    body: 'A proxy in front of an MCP server. It inspects tool calls, blocks actions outside the grant, and writes an audit trail.',
  },
  {
    title: 'Discovery',
    body: 'The staging channel for unregistered agents. Observed prompt and tools stay here for review, outside the Authority.',
  },
  {
    title: 'Verifier',
    body: 'Resource-server middleware. It checks the token signature and the DPoP binding, and stays compatible with OAuth resource servers.',
  },
]

const PATH = [
  { step: '01', title: 'Observe', body: 'The runtime fingerprints the executing agent from its prompt, tools, and configuration.' },
  { step: '02', title: 'Authorize', body: 'The Authority verifies that identity and the applicable grant.' },
  { step: '03', title: 'Bind', body: 'A per-action intent token carries the signed claims for this call.' },
  { step: '04', title: 'Enforce', body: 'The verifier checks those claims at the resource boundary.' },
]

const STANDARDS = [
  { name: 'OAuth 2.0', detail: 'RFC 6749. The grant model Auth51 composes, so existing resource servers can still verify a JWT.' },
  { name: 'Token exchange', detail: 'RFC 8693. How a signed-in session is exchanged for an authority token without putting client secrets in the browser.' },
  { name: 'Proof-of-possession', detail: 'DPoP, RFC 9449. Binds the intent token to a key held in the agent process, so a copied token is useless.' },
  { name: 'Agentic JWT', detail: 'IETF Internet-Draft. The identity checksum, the intent-token profile, and delegation rules.' },
]

export default function Products() {
  return (
    <div>

      <section className="bg-uf-alt py-28 px-6 border-b border-uf-border text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Our Product: Auth51</span>
          <h1
            className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-5 mb-5"
            style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
          >
            Runtime identity and<br className="hidden sm:block" /> per-action authorization
          </h1>
          <p className="font-sans text-uf-body text-lg max-w-xl mx-auto mb-12">
            Auth51 derives identity from the running agent's observed prompt, tools, and configuration,
            then binds each approved action to an intent token enforced at the resource.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl bg-white border border-uf-border shadow-sm">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:flex-1">
                <a
                  href="https://auth51.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:min-w-[11rem] justify-center"
                >
                  About Auth51
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:flex-1">
                <a
                  href="https://auth51.com/console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full sm:min-w-[11rem] justify-center"
                >
                  Auth51 Console
                </a>
              </motion.div>
            </div>
            <p className="font-sans text-sm text-uf-muted max-w-sm">
              Product depth, the walkthrough, and the console live on Auth51.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section id="auth51" className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-14">
            <span className="section-label">How Auth51 is built</span>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-4 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Five components, one trust root
            </h2>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-3xl">
              The checksum is the identity. It is computed from what the runtime observes, and the
              Authority checks it again when a token is minted. These are the pieces that carry that identity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {COMPONENTS.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.06)}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                className="card-white rounded-xl p-6 transition-all duration-300"
              >
                <h3
                  className="font-syne font-semibold text-lg text-uf-navy mb-2"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-uf-body leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp()} className="mb-8">
            <span className="section-label">Enforcement path</span>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Observe, authorize, bind, enforce
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATH.map((item, i) => (
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
                <h3
                  className="font-syne font-semibold text-base text-uf-navy mb-2"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-uf-body leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-uf-alt py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="section-label">What it composes</span>
            <h2
              className="font-syne font-bold text-3xl md:text-4xl text-uf-navy mt-4 mb-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Built on OAuth, not beside it
            </h2>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-3xl">
              Auth51 works with existing OAuth resource servers, alongside identity providers such as
              Okta, Auth0, and Microsoft Entra ID.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {STANDARDS.map((item, i) => (
              <motion.div
                key={item.name}
                {...fadeUp(i * 0.06)}
                className="card-white rounded-xl p-6"
              >
                <h3
                  className="font-syne font-semibold text-lg text-uf-navy mb-2"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-uf-body leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 text-center border-t border-uf-border">
        <motion.div {...fadeUp()} className="max-w-xl mx-auto">
          <h2
            className="font-syne font-bold text-3xl text-uf-navy mb-4"
            style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
          >
            See Auth51 in the console
          </h2>
          <p className="font-sans text-uf-body text-lg mb-8">
            The product site covers the walkthrough and the docs. Contact Unforge if you want to talk through a deployment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://auth51.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                About Auth51
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://auth51.com/console"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Auth51 Console
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
          </div>
        </motion.div>
      </section>

    </div>
  )
}
