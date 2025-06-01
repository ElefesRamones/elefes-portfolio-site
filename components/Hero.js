// components/Hero.js
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: -20 })
    }
  }, [inView, controls])

  return (
    <section
      ref={ref}
      className="bg-punk-black text-punk-neon font-punk h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-punk text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Hello, I'm Elefes
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-punk-peach max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Your friendly neighbourhood Design-Man
      </motion.p>
    </section>
  )
}
