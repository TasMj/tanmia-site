import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import TargetAudience from './components/TargetAudience'
import Pricing from './components/Pricing'
import Demo from './components/Demo'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <TargetAudience />
        <Pricing />
        <Demo />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
