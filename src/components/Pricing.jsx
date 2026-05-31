import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container, SectionHeading, Reveal, Button } from './primitives'

const tiers = [
  {
    name: 'Starter',
    blurb: 'For individuals exploring what agents can do.',
    monthly: 0,
    annual: 0,
    cta: 'Start for free',
    variant: 'ghost',
    features: ['1 workspace', '5 active agents', '10k runs / month', 'Community support', 'Core integrations'],
  },
  {
    name: 'Growth',
    blurb: 'For teams putting AI into production.',
    monthly: 49,
    annual: 39,
    cta: 'Start free trial',
    variant: 'primary',
    popular: true,
    features: ['Unlimited agents', '1M runs / month', 'Visual workflow builder', 'Evals & A/B testing', 'SSO/SAML', 'Priority support'],
  },
  {
    name: 'Enterprise',
    blurb: 'For organizations operating at scale.',
    custom: true,
    cta: 'Talk to sales',
    variant: 'glass',
    features: ['Unlimited everything', 'Dedicated runtime', 'On-prem / VPC deploy', 'SOC 2 + custom DPA', '99.99% uptime SLA', 'Solutions engineer'],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          subtitle="Start free. Upgrade when you're ready. No surprises."
        />

        <Reveal className="mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-white/45'}`}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-14 rounded-full border border-white/12 bg-white/5 p-0.5 transition-colors"
            aria-label="Toggle annual billing"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={`block h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 ${annual ? 'ml-7' : ''}`}
            />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-white/45'}`}>
            Annual <span className="text-fuchsia-300">−20%</span>
          </span>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  t.popular
                    ? 'border border-fuchsia-400/30 bg-gradient-to-b from-fuchsia-500/[0.08] to-transparent shadow-[0_20px_60px_-20px_rgba(217,70,239,0.5)]'
                    : 'gradient-border'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1 text-[11px] font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-white/55">{t.blurb}</p>

                <div className="mt-6 flex items-end gap-1">
                  {t.custom ? (
                    <span className="font-display text-4xl font-bold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="font-display text-5xl font-bold text-white">
                        ${annual ? t.annual : t.monthly}
                      </span>
                      <span className="mb-1.5 text-sm text-white/45">/ user / mo</span>
                    </>
                  )}
                </div>

                <Button href="#cta" variant={t.variant} className="mt-6 w-full">
                  {t.cta}
                </Button>

                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
