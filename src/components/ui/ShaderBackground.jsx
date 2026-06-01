import { MeshGradient } from '@paper-design/shaders-react'

/* Animated mesh-gradient backdrop, themed to the Nebula palette
   (ink → indigo → violet → fuchsia). Sits absolutely behind content,
   non-interactive, and is meant to be layered under a grid / ink veil
   so it blends into the section instead of reading as a separate block. */
export default function ShaderBackground({
  className = '',
  speed = 0.6,
  opacity = 0.5,
  colors = ['#07070d', '#1e1b4b', '#6366f1', '#8b5cf6', '#d946ef'],
}) {
  return (
    <MeshGradient
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      colors={colors}
      speed={speed}
      backgroundColor="#07070d"
    />
  )
}
