import { ArrowRight } from 'lucide-react'
import { Container, Reveal, Button } from './primitives'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-4xl border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* gradient backdrop */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 glow-conic opacity-25 blur-[90px]" />
              <div className="absolute inset-0 bg-ink/40" />
              <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            </div>

            <h2 className="font-display relative z-10 mx-auto max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Ready to put AI to <span className="text-gradient">work?</span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl text-lg text-white/60">
              Join 4,000+ teams shipping autonomous AI with Nebula. Start free in
              under two minutes — no credit card, no sales call.
            </p>
            <div className="relative z-10 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" className="w-full sm:w-auto">
                Start building free
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#" variant="ghost" className="w-full sm:w-auto">
                Book a demo
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
