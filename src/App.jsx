import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Showcase />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
