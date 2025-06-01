import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GlitchText from './GlitchText'

function Hero() {
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
      className="bg-gradient-to-br from-black via-black to-white text-white h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/90 to-white/80 pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full blur-2xl opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-10 h-10 bg-white rounded-full blur-xl opacity-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-white rounded-full blur-xl opacity-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-punk text-white mb-6 leading-tight drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <span className="block">Hello, I'm</span>
          <GlitchText 
            text="Ramones Capulong"
            className="block mt-2 drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]"
          />
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl font-medium drop-shadow-[0_1px_8px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your friendly neighbourhood{' '}
          <span className="text-black font-bold drop-shadow-[0_1px_8px_rgba(0,0,0,0.15)]">Design-Man</span>
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a 
            href="#portfolio" 
            className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:shadow-lg hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:shadow-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero