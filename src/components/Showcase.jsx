import { motion } from 'framer-motion'
import { Check, Terminal } from 'lucide-react'
import { Container, Reveal, Button } from './primitives'

const points = [
  'Stream responses with sub-300ms first-token latency',
  'Built-in evals & A/B testing for every prompt change',
  'Bring your own model or use ours — zero lock-in',
  'Auto-scaling serverless runtime, pay per run',
]

const codeLines = [
  { t: 'from', k: 'import', rest: ' nebula ' },
  { t: 'code', text: 'agent = nebula.Agent(' },
  { t: 'code', text: '  model="claude-opus-4-8",' },
  { t: 'code', text: '  tools=[crm, search, email],' },
  { t: 'code', text: '  memory=True,' },
  { t: 'code', text: ')' },
  { t: 'blank' },
  { t: 'code', text: 'agent.run("Qualify new leads and' },
  { t: 'code', text: '  draft outreach for each.")' },
  { t: 'out', text: '✓ 312 leads scored · 41 emails drafted' },
]

export default function Showcase() {
  return (
    <section id="platform" className="relative pt-12 pb-24 sm:pt-16 sm:pb-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300/80">
              Built for builders
            </span>
            <h2 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              A developer experience your team will actually <span className="text-gradient">love</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              Ship in Python, TypeScript, or no code at all. Everything is versioned,
              testable, and observable — so you move fast without breaking trust.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/75">{p}</span>
                </motion.li>
              ))}
            </ul>

            <Button href="#cta" className="mt-9">Read the docs</Button>
          </Reveal>

          {/* code window */}
          <Reveal delay={0.1}>
            <div className="relative isolate">
              <div className="pointer-events-none absolute -inset-4 z-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.3),transparent_60%)] blur-2xl" />
              <div className="glass relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.02] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 flex items-center gap-1.5 text-[11px] text-white/40">
                    <Terminal className="h-3 w-3" /> agent.py
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
                  <code>
                    {codeLines.map((l, i) => {
                      if (l.t === 'blank') return <div key={i}>&nbsp;</div>
                      if (l.t === 'from')
                        return (
                          <div key={i}>
                            <span className="text-fuchsia-400">{l.k}</span>
                            <span className="text-white/80">{l.rest}</span>
                          </div>
                        )
                      if (l.t === 'out')
                        return (
                          <div key={i} className="mt-1 text-green-400">{l.text}</div>
                        )
                      return (
                        <div key={i} className="text-indigo-200/90">{l.text}</div>
                      )
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
