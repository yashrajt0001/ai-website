'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

const rand = (min, max) => Math.random() * (max - min) + min

// Single glass capsule: drops in from above (falling), then drifts forever
// with randomized x / y / rotate motion (unique per shape).
export function ElegantShape({
  className = '',
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
}) {
  // Computed once per mount so each capsule wanders on its own path/tempo.
  const drift = useMemo(
    () => ({
      x: [0, rand(-25, 25), rand(-25, 25), rand(-15, 15), 0],
      y: [0, rand(15, 35), rand(-25, -10), rand(20, 35), 0],
      rotate: [0, rand(-8, 8), rand(-8, 8), rand(-5, 5), 0],
      duration: rand(14, 22),
    }),
    []
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 0.6, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ x: drift.x, y: drift.y, rotate: drift.rotate }}
        transition={{
          duration: drift.duration,
          delay: delay + 2.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.2] shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  )
}

// Drop-in background layer: the falling glass objects only (no text/content).
export function ElegantShapes({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <ElegantShape
        delay={0.3}
        width={450}
        height={110}
        rotate={12}
        gradient="from-indigo-500/[0.4]"
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-blue-500/[0.4]"
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />
      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-pink-400/[0.4]"
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />
    </div>
  )
}
