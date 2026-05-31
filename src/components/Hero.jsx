import { motion } from 'framer-motion'
import { ArrowRight, Play, Activity, Cpu, Zap, TrendingUp } from 'lucide-react'
import { Container, Button, Badge } from './primitives'
import RotatingText from './RotatingText'
import { ElegantShapes } from './ui/shape-landing-hero'

const ease = [0.22, 1, 0.36, 1]

function Stat({ icon: Icon, label, value, tone }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
      <div className="flex items-center gap-2 text-[11px] text-white/50">
        <Icon className={`h-3.5 w-3.5 ${tone}`} />
        {label}
      </div>
      <div className="mt-1.5 font-display text-lg font-bold text-white">{value}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-32 sm:pt-44 sm:pb-40">
      {/* Aurora mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.45),transparent_62%)] blur-3xl animate-glow-pulse" />
        <div className="absolute -top-10 right-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.4),transparent_60%)] blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-[6%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_60%)] blur-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      {/* Falling glass capsules — own layer above aurora glow, below content */}
      <ElegantShapes className="z-0" />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Badge>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
              </span>
              Now with autonomous multi-agent workflows
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="font-display mt-7 flex flex-col items-center text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            <span>Turn your data into</span>
            <RotatingText
              words={['autonomous AI', 'agentic AI', 'self-improving AI', 'production AI', 'unstoppable AI']}
              className="md:pb-3 md:pt-1"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Nebula AI is the platform for building, deploying, and scaling intelligent
            agents that think, plan, and act on your business — no ML team required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="#cta" className="w-full sm:w-auto">
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#platform" variant="ghost" className="w-full sm:w-auto">
              <Play className="h-4 w-4 fill-current" />
              Watch demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 text-xs text-white/40"
          >
            No credit card required · Free 14-day trial · SOC 2 Type II compliant
          </motion.p>
        </div>

        {/* Glass dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-px rounded-4xl bg-gradient-to-b from-white/15 to-transparent" />
          <div className="glass relative rounded-4xl p-2 shadow-[0_40px_120px_-30px_rgba(124,58,237,0.6)]">
            <div className="rounded-[1.6rem] border border-white/8 bg-ink-2/80 p-4 sm:p-6">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/8 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <div className="ml-3 hidden items-center gap-2 rounded-md border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] text-white/40 sm:flex">
                  <Cpu className="h-3 w-3" /> app.nebula.ai/agents
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {/* main panel */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/45">Active agents</p>
                      <p className="font-display text-2xl font-bold text-white">Operations Hub</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 12 running
                    </span>
                  </div>

                  {/* bar chart */}
                  <div className="mt-5 flex h-40 items-end gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                    {[42, 68, 35, 80, 56, 92, 70, 100, 64, 88, 76, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 + i * 0.05, ease }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500/70 to-fuchsia-400"
                      />
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <Stat icon={Activity} label="Throughput" value="48.2k" tone="text-blue-400" />
                    <Stat icon={Zap} label="Avg latency" value="312ms" tone="text-fuchsia-400" />
                    <Stat icon={TrendingUp} label="Success" value="99.4%" tone="text-green-400" />
                  </div>
                </div>

                {/* side agent feed */}
                <div className="space-y-3">
                  <p className="text-xs text-white/45">Recent runs</p>
                  {[
                    { name: 'Lead Enricher', tag: 'done', tone: 'bg-green-400/10 text-green-300' },
                    { name: 'Invoice Parser', tag: 'running', tone: 'bg-blue-400/10 text-blue-300' },
                    { name: 'Support Triage', tag: 'running', tone: 'bg-blue-400/10 text-blue-300' },
                    { name: 'Report Writer', tag: 'queued', tone: 'bg-white/8 text-white/55' },
                  ].map((a) => (
                    <div
                      key={a.name}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30">
                          <Cpu className="h-3.5 w-3.5 text-white/80" />
                        </span>
                        <span className="text-sm font-medium text-white/85">{a.name}</span>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${a.tone}`}>
                        {a.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating accent cards */}
          <motion.div
            className="absolute -left-6 top-24 hidden rounded-2xl glass p-3 shadow-xl lg:block animate-float"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
                <Zap className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-[11px] text-white/50">Tokens / sec</p>
                <p className="font-display text-sm font-bold text-white">14,820</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute -right-6 top-44 hidden rounded-2xl glass p-3 shadow-xl lg:block animate-float"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500">
                <TrendingUp className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-[11px] text-white/50">Cost saved</p>
                <p className="font-display text-sm font-bold text-white">$2.1M / yr</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* bottom feather — fades hero's glow into ink so it blends seamlessly
          into the lamp section below (no hard clipped edge / divider) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
    </section>
  )
}
