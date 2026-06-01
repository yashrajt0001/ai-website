import { motion } from 'framer-motion'
import { LampContainer } from './Lamp'
import {
  VercelIcon, GithubIcon, LinearIcon, SpotifyIcon, FigmaIcon, SlackIcon,
  OpenAIIcon, StripeIcon, NotionIcon, DropboxIcon, AtlassianIcon,
} from './logos'

const logos = [
  { C: GithubIcon, name: 'GitHub', h: 'h-9' },
  { C: OpenAIIcon, name: 'OpenAI', h: 'h-9' },
  { C: LinearIcon, name: 'Linear', h: 'h-9' },
  { C: StripeIcon, name: 'Stripe', h: 'h-10' },
  { C: SpotifyIcon, name: 'Spotify', h: 'h-10' },
  { C: NotionIcon, name: 'Notion', h: 'h-9' },
  { C: VercelIcon, name: 'Vercel', h: 'h-7' },
  { C: FigmaIcon, name: 'Figma', h: 'h-9' },
  { C: DropboxIcon, name: 'Dropbox', h: 'h-8 rounded-md' },
  { C: SlackIcon, name: 'Slack', h: 'h-9' },
  { C: AtlassianIcon, name: 'Atlassian', h: 'h-9' },
]

function LogoItem({ C, name, h }) {
  return (
    <div className="group flex shrink-0 transform-gpu items-center justify-center px-10 [backface-visibility:hidden]" title={name}>
      <C
        aria-label={name}
        className={`${h} w-auto opacity-80 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100`}
      />
    </div>
  )
}

export default function LogoCloud() {
  return (
    <section className="relative isolate bg-ink pb-16">
      {/* ── Aceternity lamp banner ──────────────────────────────── */}
      <LampContainer>
        <div className="translate-y-16">
          <motion.h2
            initial={{ opacity: 0.5, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            className="font-display mx-auto max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent [text-shadow:0_1px_30px_rgba(255,255,255,0.25)]">
              Shipping
              <br />
              product&nbsp;to
            </span>
          </motion.h2>
        </div>
      </LampContainer>

      {/* ── Marquee logo rail ───────────────────────────────────── */}
      <div className="relative z-10 -mt-24 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee will-change-transform">
          {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
            <LogoItem key={`${l.name}-${i}`} {...l} />
          ))}
        </div>
      </div>
    </section>
  )
}
