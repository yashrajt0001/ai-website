import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, SectionHeading } from './primitives'

const cn = (...classes) => classes.filter(Boolean).join(' ')

const MarqueeImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.div
      whileHover={{ y: -24, scale: 1.06 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative aspect-[970/700] w-full overflow-hidden rounded-lg ring ring-gray-950/5 transition-shadow hover:shadow-[0_25px_60px_-12px_rgba(217,70,239,0.55)]"
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-lg bg-white/10" />
      )}
      <img
        src={src}
        alt={alt}
        width={970}
        height={700}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
        )}
      />
    </motion.div>
  )
}

const images = [
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/animated-testimonials.webp',
  'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
  'https://assets.aceternity.com/github-globe.png',
  'https://assets.aceternity.com/glare-card.png',
  'https://assets.aceternity.com/layout-grid.png',
  'https://assets.aceternity.com/flip-text.png',
  'https://assets.aceternity.com/hero-highlight.png',
  'https://assets.aceternity.com/carousel.webp',
  'https://assets.aceternity.com/placeholders-and-vanish-input.png',
  'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
  'https://assets.aceternity.com/signup-form.png',
  'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
  'https://assets.aceternity.com/spotlight-new.webp',
  'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
  'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
  'https://assets.aceternity.com/tabs.png',
  'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
  'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
  'https://assets.aceternity.com/glowing-effect.webp',
  'https://assets.aceternity.com/hover-border-gradient.png',
  'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
  'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
  'https://assets.aceternity.com/macbook-scroll.png',
  'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
  'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
  'https://assets.aceternity.com/multi-step-loader.png',
  'https://assets.aceternity.com/vortex.png',
  'https://assets.aceternity.com/wobble-card.png',
  'https://assets.aceternity.com/world-map.webp',
]

const ThreeDMarquee = ({ images, className }) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4)
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })
  return (
    <div
      className={cn(
        'mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100',
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{ transform: 'rotateX(55deg) rotateY(0deg) rotateZ(-45deg)' }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 6 : 9,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={colIndex + 'marquee'}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <MarqueeImage src={image} alt={`Image ${imageIndex + 1}`} />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        '--background': '#ffffff',
        '--color': 'rgba(0, 0, 0, 0.2)',
        '--height': '1px',
        '--width': '5px',
        '--fade-stop': '90%',
        '--offset': offset || '200px',
        '--color-dark': 'rgba(255, 255, 255, 0.2)',
        maskComposite: 'exclude',
      }}
      className={cn(
        'absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className,
      )}
    ></div>
  )
}

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        '--background': '#ffffff',
        '--color': 'rgba(0, 0, 0, 0.2)',
        '--height': '5px',
        '--width': '1px',
        '--fade-stop': '90%',
        '--offset': offset || '150px',
        '--color-dark': 'rgba(255, 255, 255, 0.2)',
        maskComposite: 'exclude',
      }}
      className={cn(
        'absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]',
        'bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className,
      )}
    ></div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="One platform, every primitive"
          subtitle="From a single prompt to production-grade autonomous systems — Nebula gives your team the tools, guardrails, and observability to build with confidence."
        />
        <div className="mx-auto mt-16 max-w-7xl rounded-3xl bg-white/[0.03] p-2 ring-1 ring-white/10">
          <ThreeDMarquee images={images} />
        </div>
      </Container>
    </section>
  )
}
