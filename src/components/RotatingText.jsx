import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

/* Adapted from 21st.dev "animated-hero" rotating title.
   Ported to JS + our gradient palette (original was TSX + shadcn). */
export default function RotatingText({ words, interval = 2200, className = '' }) {
  const [index, setIndex] = useState(0)
  const list = useMemo(() => words, [words])

  useEffect(() => {
    const id = setTimeout(
      () => setIndex(index === list.length - 1 ? 0 : index + 1),
      interval,
    )
    return () => clearTimeout(id)
  }, [index, list, interval])

  return (
    <span className={`relative flex w-full justify-center overflow-hidden ${className}`}>
      {/* spacer keeps the line height while children are absolute */}
      &nbsp;
      {list.map((word, i) => (
        <motion.span
          key={i}
          className="text-gradient absolute whitespace-nowrap font-bold"
          initial={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'spring', stiffness: 50 }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? '-160%' : '160%', opacity: 0 }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
