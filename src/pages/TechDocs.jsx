import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const PUBLICATIONS = [
  {
    title: 'Agentic JWT: A Secure Delegation Protocol for Autonomous AI Agents',
    label: 'arXiv:2509.13597',
    href: 'https://arxiv.org/abs/2509.13597',
  },
  {
    title: 'IETF Draft: Secure Intent Protocol: JWT Compatible Agentic Identity and Workflow Management',
    label: 'IETF Internet-Draft',
    href: 'https://datatracker.ietf.org/doc/draft-goswami-agentic-jwt/',
  },
  {
    title: 'Securing LLM Applications: Beyond the New OWASP LLM Top 10',
    label: 'DZone · September 11, 2025',
    href: 'https://dzone.com/articles/securing-llm-applications-owasp',
  },
]

const PATENTS = [
  'U.S. Patent Application No. 19/204,492',
  'U.S. Patent Application No. 19/315,486',
  'U.S. Patent Application No. 19/645,221',
  'U.S. Patent Application No. 19/645,431',
]

export default function TechDocs() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div>

      <section className="bg-white py-24 px-6 border-b border-uf-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Documentation</span>
            <h1
              className="font-syne font-bold text-4xl md:text-5xl text-uf-navy mt-5 mb-5"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em', overflow: 'visible' }}
            >
              Publications and patents
            </h1>
            <p className="font-sans text-uf-body text-lg leading-relaxed max-w-2xl">
              Papers, the Agentic JWT Internet-Draft, and pending patents. Product documentation is on Auth51.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-uf-alt py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="section-label">Videos</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Watch &amp; Learn
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.05)} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p className="font-syne font-semibold text-sm text-uf-navy mb-3 uppercase tracking-wide">
              Securing the AI Workforce
            </p>
            <div className="w-full max-w-[900px] mx-auto aspect-video">
              <video
                ref={videoRef}
                src="/Securing_the_AI_Workforce.mp4"
                controls
                className="w-full h-full rounded-[12px] block"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="section-label">Publications &amp; Standards</span>
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy mt-4 mb-10"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Research &amp; Standards
            </h2>

            <div className="space-y-4">
              {PUBLICATIONS.map((pub, i) => (
                <motion.a
                  key={pub.href}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(i * 0.08)}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                  className="card-white rounded-xl p-6 flex items-start justify-between gap-6 transition-all duration-300 block"
                >
                  <div className="flex-1">
                    <p
                      className="font-syne font-semibold text-base text-uf-navy mb-2"
                      style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                    >
                      {pub.title}
                    </p>
                    <span className="font-sans text-xs font-medium text-uf-teal bg-white border border-uf-teal px-3 py-1 rounded-full">
                      {pub.label}
                    </span>
                  </div>
                  <span className="text-uf-teal font-sans text-lg shrink-0 mt-1">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-uf-alt py-24 px-6 border-t border-uf-border" id="patents">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <h2
              className="font-syne font-bold text-2xl md:text-3xl text-uf-navy"
              style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
            >
              Pending Patents
            </h2>
          </motion.div>

          <div className="space-y-6">
            {PATENTS.map((title, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
                className="card-white rounded-xl p-8 flex gap-6 transition-all duration-300"
              >
                <div
                  className="font-syne font-bold text-3xl text-uf-teal shrink-0 select-none"
                  style={{ lineHeight: 1, paddingBottom: '0.2em' }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-syne font-semibold text-lg text-uf-navy"
                  style={{ lineHeight: 1.4, paddingBottom: '0.1em' }}
                >
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 border-t border-uf-border">
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
              href="https://auth51.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Auth51 docs →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
