import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GlitchText from './GlitchText'
import styles from './GlitchText.module.css'

function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.3,
    amount: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7 }
      })
    } else {
      controls.start({ 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.3 }
      })
    }
  }, [inView, controls])

  return (
    <section
      ref={ref}
      className="min-h-[100dvh] w-full text-black flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative z-10 max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
          animate={controls}
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem] font-punk text-black mb-4 sm:mb-6 leading-[1.1] drop-shadow-[0_2px_16px_rgba(0,0,0,0.15)]"
            animate={controls}
          >
            <span className="block">Hello, I'm</span>
            <GlitchText 
              text="Ramones Capulong"
              className="block mt-2 drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]"
            />
          </motion.h1>

          <motion.p
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-black font-light leading-relaxed max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.15)]"
            animate={controls}
          >
            <span className={styles.designGlitch} data-text="Design-Man">
              Your friendly neighbourhood Design-Man
            </span>
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
            animate={controls}
          >
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black/50 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto border-2 border-black text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black/50 hover:shadow-lg text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-white"
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero