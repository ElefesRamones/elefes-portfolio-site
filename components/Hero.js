import { motion } from 'framer-motion'
import GlitchText from './GlitchText'
import styles from './GlitchText.module.css'

function Hero() {
  return (
    <section className="min-h-[100dvh] w-full text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem] font-punk text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)]">
            <span className="block">Hello, I'm</span>
            <GlitchText 
              text="Ramones Capulong"
              className="block mt-2 drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]"
            />
          </h1>

          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white font-medium max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(255,255,255,0.15)]">
            <span className={styles.designGlitch} data-text="Design-Man">
              Your friendly neighbourhood Design-Man
            </span>
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold shadow-lg hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:shadow-lg text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
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