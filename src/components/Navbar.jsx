import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Container, Button } from './primitives'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-[200]">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          <nav
            className={`mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
              scrolled
                ? 'border border-white/10 bg-ink-2/70 shadow-lg shadow-black/40 backdrop-blur-xl'
                : 'border border-transparent'
            }`}
          >
            <a href="#" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_20px_-2px_rgba(217,70,239,0.6)]">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Nebula<span className="text-fuchsia-400">AI</span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#"
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Sign in
              </a>
              <Button href="#cta" className="!px-5 !py-2.5">
                Get started
              </Button>
            </div>

            <button
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <Container>
              <div className="mt-2 rounded-2xl border border-white/10 bg-ink-2/95 p-3 backdrop-blur-xl">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
                  <a href="#" className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/75">
                    Sign in
                  </a>
                  <Button href="#cta" onClick={() => setOpen(false)}>
                    Get started
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
