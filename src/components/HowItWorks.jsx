import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, SectionHeading, Reveal } from './primitives'
import { Database, Wand2, Rocket } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    icon: Database,
    n: '01',
    title: 'Connect your data',
    desc: 'Plug in your docs, databases, and apps. Nebula indexes everything securely and keeps it in sync — no pipelines to maintain.',
  },
  {
    icon: Wand2,
    n: '02',
    title: 'Describe the outcome',
    desc: 'Tell Nebula what you want in plain language. It designs the agent, picks the right tools, and writes the workflow for you.',
  },
  {
    icon: Rocket,
    n: '03',
    title: 'Deploy & scale',
    desc: 'Ship to a serverless runtime that scales from zero to millions of runs. Monitor, iterate, and improve from one dashboard.',
  },
]

const ANGLE_START = -90
const ORBIT_R = 38 // % of half-container
const CYCLE_MS = 3800

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Pre-compute node coordinates on the orbit (in viewBox %).
  const nodes = useMemo(
    () =>
      steps.map((s, i) => {
        const a = ((ANGLE_START + i * (360 / steps.length)) * Math.PI) / 180
        return { ...s, i, x: 50 + ORBIT_R * Math.cos(a), y: 50 + ORBIT_R * Math.sin(a) }
      }),
    [],
  )

  // Auto-advance through the steps, pause on interaction.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((p) => (p + 1) % steps.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [paused])

  const current = nodes[active]
  const ActiveIcon = current.icon

  const hold = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  }

  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From idea to production in three steps"
          subtitle="No ML expertise. No infrastructure to babysit. Just outcomes."
        />

        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {/* ── Orbital system ─────────────────────────────── */}
          <Reveal>
            <div
              {...hold}
              className="relative mx-auto aspect-square w-full max-w-[460px] select-none"
            >
              {/* faint dotted orbit rings */}
              <div className="absolute inset-[6%] rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-[24%] rounded-full border border-white/[0.06]" />
              {/* rotating outer ring + travelling spark */}
              <div className="absolute inset-[6%] animate-spin-slow rounded-full">
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_4px_rgba(217,70,239,0.7)]" />
              </div>

              {/* energy beam: core → active node */}
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                fill="none"
              >
                <defs>
                  <linearGradient id="how-beam" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
                <motion.line
                  key={active}
                  x1="50"
                  y1="50"
                  x2={current.x}
                  y2={current.y}
                  stroke="url(#how-beam)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 0.6, ease }}
                />
              </svg>

              {/* central Nebula core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="glow-conic animate-glow-pulse absolute inset-0 -z-10 rounded-full opacity-60 blur-xl" />
                <div className="relative grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-ink-2/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_30px_-8px_rgba(124,58,237,0.7)] backdrop-blur">
                  <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(217,70,239,0.28),transparent_70%)]" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
                      transition={{ duration: 0.4, ease }}
                      className="relative"
                    >
                      <ActiveIcon className="h-8 w-8 text-fuchsia-200" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* orbiting step nodes */}
              {nodes.map((node) => {
                const isActive = node.i === active
                const Icon = node.icon
                return (
                  <button
                    key={node.n}
                    type="button"
                    onClick={() => setActive(node.i)}
                    aria-label={`Step ${node.n}: ${node.title}`}
                    aria-pressed={isActive}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ duration: 0.4, ease }}
                      className={`relative grid h-16 w-16 place-items-center rounded-2xl glass transition-colors duration-300 ${
                        isActive
                          ? 'shadow-[0_8px_30px_-8px_rgba(217,70,239,0.8)] ring-1 ring-fuchsia-400/50'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/30" />
                      )}
                      <Icon
                        className={`relative h-6 w-6 ${isActive ? 'text-white' : 'text-fuchsia-200/80'}`}
                      />
                      <span
                        className={`absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-white transition-colors ${
                          isActive
                            ? 'bg-gradient-to-br from-indigo-500 to-fuchsia-500'
                            : 'bg-white/10'
                        }`}
                      >
                        {node.n}
                      </span>
                    </motion.span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* ── Synced step list ──────────────────────────── */}
          <Reveal delay={0.1}>
            <ul {...hold} className="flex flex-col gap-2">
              {steps.map((s, i) => {
                const isActive = i === active
                return (
                  <li key={s.n}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`group relative flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-white/10 bg-white/[0.04]'
                          : 'border-transparent hover:bg-white/[0.02]'
                      }`}
                    >
                      {/* active accent bar */}
                      <motion.span
                        aria-hidden
                        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-400 to-fuchsia-500"
                      />
                      <span
                        className={`mt-0.5 font-display text-sm font-bold tabular-nums transition-colors ${
                          isActive ? 'text-fuchsia-300' : 'text-white/40'
                        }`}
                      >
                        {s.n}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display text-lg font-semibold transition-colors ${
                            isActive ? 'text-white' : 'text-white/55 group-hover:text-white/80'
                          }`}
                        >
                          {s.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease }}
                              className="overflow-hidden text-sm leading-relaxed text-white/55"
                            >
                              <span className="block pt-2">{s.desc}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
