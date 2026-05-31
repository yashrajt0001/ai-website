import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from './primitives'

const stats = [
  { value: 4000, suffix: '+', label: 'Companies building on Nebula' },
  { value: 99.99, suffix: '%', label: 'Platform uptime SLA', decimals: 2 },
  { value: 2.1, prefix: '$', suffix: 'B', label: 'Agent actions run monthly', decimals: 1 },
  { value: 312, suffix: 'ms', label: 'Median response latency' },
]

function Counter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="gradient-border relative overflow-hidden rounded-4xl px-6 py-12 sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(217,70,239,0.18),transparent_60%)]" />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter {...s} />
                </div>
                <p className="mt-2 text-sm text-white/55">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
