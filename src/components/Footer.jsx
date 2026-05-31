import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react'
import { Container } from './primitives'

const cols = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Customers', 'Contact'] },
  { title: 'Resources', links: ['Guides', 'API reference', 'Community', 'Status', 'Security'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'DPA', 'SOC 2', 'GDPR'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Nebula<span className="text-fuchsia-400">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              The platform for building, deploying, and scaling autonomous AI agents.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Github, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/55 transition-colors hover:border-white/20 hover:text-white"
                  aria-label="social link"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Nebula AI, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2 text-xs text-white/40">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  )
}
