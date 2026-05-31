import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const testimonials = [
  {
    quote:
      'We replaced three internal tools and a team of contractors with Nebula agents. Our ops run themselves now — it paid for itself in six weeks.',
    name: 'Sarah Chen',
    designation: 'VP Operations, Lumen',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The observability is unreal. I can trace every decision an agent makes. We finally trust AI in production.',
    name: 'Marcus Webb',
    designation: 'Staff Engineer, Driftpay',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'From prototype to 2M runs a day without rewriting anything. The scaling just happened.',
    name: 'Priya Nair',
    designation: 'CTO, Halcyon',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "Our support resolution time dropped 60%. Customers think they're talking to our best agent — every time.",
    name: 'Diego Alvarez',
    designation: 'Head of CX, Northstar',
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'Security review was the easiest we\'ve ever done. SOC 2, SSO, audit logs — all there on day one.',
    name: 'Hannah Holt',
    designation: 'CISO, Vaultline',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

function AnimatedTestimonials({ testimonials, autoplay = false }) {
  const [active, setActive] = useState(0)

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length)
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const isActive = (index) => index === active

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  // Preload all testimonial images on mount so they're cached before scroll
  useEffect(() => {
    testimonials.forEach((t) => {
      const img = new Image()
      img.src = t.src
    })
  }, [testimonials])

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  return (
    <div className="mx-auto max-w-sm font-sans antialiased md:max-w-4xl">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center ring-1 ring-white/10"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-white">{testimonials[active].name}</h3>
            <p className="text-sm text-white/50">{testimonials[active].designation}</p>
            <motion.p className="mt-8 text-lg leading-relaxed text-white/75">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 transition-colors hover:bg-white/10"
            >
              <ArrowRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-30 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Loved by teams"
          title="The platform behind the next generation of AI products"
          subtitle="From seed startups to the Fortune 500, teams trust Nebula to run their most important work."
        />
        <div className="mt-28">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </Container>
    </section>
  )
}
