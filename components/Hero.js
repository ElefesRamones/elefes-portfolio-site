import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.3,
    amount: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  // Import animations from our utility file
  const { staggerContainer, fadeInUp } = require('../utils/animations')

  const containerVariants = {
    ...staggerContainer,
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...staggerContainer.transition,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  const itemVariants = {
    ...fadeInUp,
    visible: {
      ...fadeInUp.animate,
      transition: {
        ...fadeInUp.transition,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] animate-scale-soft">
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-1/4 -right-32 w-[45rem] h-[45rem] animate-scale-soft" 
             style={{ animationDelay: '-4s' }}>
          <div className="w-full h-full bg-gradient-to-tl from-accent-2/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] 
                     animate-scale-soft opacity-30" style={{ animationDelay: '-2s' }}>
          <div className="w-full h-full bg-gradient-radial from-accent-light/5 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container relative z-elevate">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
        >
          {/* Decorative Label */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-6 py-2 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-2/10 
                     backdrop-blur-sm mb-8 animate-float relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 
                          translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 ease-soft" />
            <span className="relative font-medium tracking-wide bg-gradient-to-r from-accent-2 to-accent 
                         bg-clip-text text-transparent">
              Welcome to My Portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-punk mb-4 sm:mb-6 leading-[1.1] relative"
          >
            <motion.span
              variants={itemVariants}
              className="block text-4xl xs:text-5xl sm:text-6xl relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent 
                           opacity-50 blur-xl" />
              <span className="relative bg-gradient-to-r from-accent via-accent-2 to-accent 
                           bg-clip-text text-transparent animate-glow">
                Hello, I'm
              </span>
            </motion.span>

            <motion.span
              variants={itemVariants}
              className="block mt-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent 
                           opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <span className="relative bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent 
                           drop-shadow-glow animate-glow">
                Ramones Capulong
              </span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-[90vw] sm:max-w-xl 
                    md:max-w-2xl mx-auto"
          >
            <motion.span className="relative inline-block px-4 py-2">
              <span className="relative z-10 bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent 
                           font-medium">
                Visual Designer & Content Editor
              </span>
              <span className="absolute inset-0 bg-accent/5 rounded-lg -z-10 animate-pulse-soft" />
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.a 
              href="/about"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="isolate w-full sm:w-auto relative inline-block"
            >
              <span className="absolute -inset-8 bg-gradient-to-r from-accent/25 via-accent-2/25 to-accent/25 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative inline-flex px-8 sm:px-10 py-3 sm:py-4 font-bold text-white bg-gradient-to-r from-accent to-accent-2 hover:shadow-glow-lg transition-all duration-500 ease-soft">
                About Me
              </span>
            </motion.a>

            <motion.a 
              href="#contact" 
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto relative group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-2/10" />
              <span className="relative block border-2 border-accent text-accent hover:text-white px-8 sm:px-10 
                           py-3 sm:py-4 font-bold transition-all duration-normal ease-soft group-hover:border-transparent">
                Get In Touch
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 
                             group-hover:opacity-100 transition-all duration-normal ease-soft -z-10" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
          className="relative group"
        >
          <span className="absolute inset-0 bg-accent/10 rounded-full blur-md transform scale-150 
                       group-hover:bg-accent/20 transition-colors duration-300" />
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-accent relative"
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" className="group-hover:stroke-accent-2 transition-colors duration-300" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero