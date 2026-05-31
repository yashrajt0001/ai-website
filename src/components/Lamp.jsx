import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* Faithful port of the Aceternity UI "Lamp" (ui.aceternity.com).
   Adapted for this stack: JSX (no TS), framer-motion, no cn(),
   slate-950 → ink, cyan → brand violet, and explicit conic-gradient()
   because Tailwind v4 doesn't emit the stops for `bg-gradient-conic`.

   Animation: replays every time the lamp enters the viewport (both scroll
   directions). We remount the beam via `key={cycle}` on each entry so it
   always starts fresh — no stale "ghost" paint from whileInView re-triggers. */
export function LampContainer({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.35 })
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    if (inView) setCycle((c) => c + 1)
  }, [inView])

  const grow = { duration: 0.8, ease: 'easeInOut', delay: 0.3 }

  return (
    <div
      ref={ref}
      className={`relative flex min-h-[34rem] w-full flex-col items-center justify-center bg-ink z-0 ${className}`}
    >
      <div key={cycle} className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={inView ? { opacity: 1, width: '30rem' } : {}}
          transition={grow}
          style={{ backgroundImage: 'conic-gradient(from 70deg at center top, #a855f7, transparent, transparent)' }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible text-white"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-ink [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-ink [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        {/* right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={inView ? { opacity: 1, width: '30rem' } : {}}
          transition={grow}
          style={{ backgroundImage: 'conic-gradient(from 290deg at center top, transparent, transparent, #a855f7)' }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-ink [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-ink [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* haze hiding the cone bottoms */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-ink blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        {/* wide soft glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-fuchsia-500 opacity-50 blur-3xl" />
        {/* animated inner glow */}
        <motion.div
          initial={{ width: '8rem' }}
          animate={inView ? { width: '16rem' } : {}}
          transition={grow}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-violet-500 blur-2xl"
        />
        {/* the bright bar */}
        <motion.div
          initial={{ width: '15rem' }}
          animate={inView ? { width: '30rem' } : {}}
          transition={grow}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-fuchsia-200 shadow-[0_0_16px_3px_rgba(232,121,249,0.6)]"
        />
        {/* cover hiding the top hard edges */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-ink" />
        {/* top feather — fades section top into ink so it blends seamlessly
            with the section above (no hard edge / divider). Below the bar (z-50). */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[45] h-40 bg-gradient-to-b from-ink via-ink/90 to-transparent" />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
