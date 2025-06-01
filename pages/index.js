import Hero from '../components/Hero'
import About from '../components/About' // ← Make sure this is added
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />       {/* ← Make sure this line is here */}
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}
