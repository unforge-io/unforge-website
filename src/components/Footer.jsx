import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-uf-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <span className="font-syne font-bold text-xl">
                <span className="text-white">un</span>
                <span className="text-uf-teal">forge</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-uf-muted leading-relaxed max-w-xs">
              Security infrastructure for the agentic era.
            </p>
          </div>

          {/* Col 2: Products + Company */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-syne text-xs font-semibold uppercase tracking-widest text-white mb-4">
                Products
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/products" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Auth51</Link></li>
                <li><Link to="/products" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Patchet</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-syne text-xs font-semibold uppercase tracking-widest text-white mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/company"  className="font-sans text-sm text-uf-muted hover:text-white transition-colors">About</Link></li>
                <li><Link to="/docs" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Technical Docs</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Developers */}
          <div>
            <h4 className="font-syne text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Developers
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/docs" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Technical Docs</Link></li>
              <li>
                <a
                  href="https://github.com/hypernome/patchet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-uf-muted hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li><Link to="/dashboard" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">API Keys</Link></li>
              <li><Link to="/dashboard" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Auth51 Console</Link></li>
              <li><Link to="/dashboard" className="font-sans text-sm text-uf-muted hover:text-white transition-colors">Patchet Dashboard</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-uf-muted">Copyright Unforge 2026</p>
          <div className="flex gap-6">
            <Link to="#" className="font-sans text-xs text-uf-muted hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="font-sans text-xs text-uf-muted hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
