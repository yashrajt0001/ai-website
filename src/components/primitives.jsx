import { motion } from 'framer-motion'

export function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}

/* Primary gradient button + ghost variant */
export function Button({ children, href = '#', variant = 'primary', className = '', ...props }) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

  const styles = {
    primary:
      'text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 hover:shadow-[0_10px_40px_-6px_rgba(217,70,239,0.7)] hover:-translate-y-0.5',
    ghost:
      'text-white/85 border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5',
    glass:
      'text-white glass hover:bg-white/10 hover:-translate-y-0.5',
  }

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300/80">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
