import { Container, SectionHeading, Reveal } from './primitives'
import { Database, Wand2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Database,
    n: '01',
    title: 'Connect your data',
    desc: 'Plug in your docs, databases, and apps. Nebula indexes everything securely and keeps it in sync — no pipelines to maintain.',
  },
  {
    icon: Wand2,
    n: '02',
    title: 'Describe the outcome',
    desc: 'Tell Nebula what you want in plain language. It designs the agent, picks the right tools, and writes the workflow for you.',
  },
  {
    icon: Rocket,
    n: '03',
    title: 'Deploy & scale',
    desc: 'Ship to a serverless runtime that scales from zero to millions of runs. Monitor, iterate, and improve from one dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From idea to production in three steps"
          subtitle="No ML expertise. No infrastructure to babysit. Just outcomes."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative grid h-18 w-18 place-items-center rounded-2xl glass p-5 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.6)]">
                  <s.icon className="h-7 w-7 text-fuchsia-200" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-[11px] font-bold text-white">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
