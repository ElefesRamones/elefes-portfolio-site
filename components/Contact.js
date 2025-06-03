import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {  const { staggerContainer, fadeInUp } = require('../utils/animations')

  const containerVariants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.animate,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  const itemVariants = {
    ...fadeInUp,
    visible: {
      ...fadeInUp.animate,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20 space-y-6">
          <motion.div variants={itemVariants} className="inline-block px-6 py-2 rounded-full 
            bg-gradient-to-r from-accent/10 via-accent/5 to-accent-2/10 
            backdrop-blur-sm border border-accent/10 mb-6 animate-float">
            <span className="bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent 
                         font-medium tracking-wide">Let's Connect</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-punk relative">
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent 
                         opacity-50 blur-2xl" />
            <span className="relative bg-gradient-to-r from-accent via-accent-2 to-accent 
                         bg-clip-text text-transparent animate-glow">Get in Touch</span>
          </h2>

          <motion.p variants={itemVariants} className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's create something bold together. Reach out for collaborations, commissions, or just to say hi!
          </motion.p>

          <div className="flex justify-center space-x-3">
            <motion.div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/30 to-accent/50 animate-scale-soft" />
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-accent/10 rounded-full animate-rotate-slow" />
              <div className="absolute inset-0.5 bg-gradient-to-br from-accent to-accent-2 rounded-full animate-pulse-soft opacity-50" />
            </div>
            <motion.div className="h-px w-12 bg-gradient-to-r from-accent/50 via-accent/30 to-transparent animate-scale-soft" 
                       style={{ animationDelay: '-1s' }} />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group"
          >
            <a href="mailto:Elefesramones51@gmail.com" className="block">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/[0.07] via-accent/5 to-accent-2/[0.07] 
                           border border-accent/10 backdrop-blur-sm relative overflow-hidden
                           transition-all duration-normal ease-soft
                           hover:shadow-glow hover:border-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 
                             opacity-0 group-hover:opacity-20 transition-opacity duration-normal ease-soft" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-accent/5 group-hover:animate-bounce-subtle">
                    <FaEnvelope className="text-3xl sm:text-4xl text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-pen mb-3 bg-gradient-to-r from-accent to-accent-2 
                              bg-clip-text text-transparent group-hover:animate-glow">Email Me</h3>
                  <p className="text-gray-700 group-hover:text-gray-800">Elefesramones51@gmail.com</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group"
          >
            <a href="tel:+639355486606" className="block">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/[0.07] via-accent/5 to-accent-2/[0.07] 
                           border border-accent/10 backdrop-blur-sm relative overflow-hidden
                           transition-all duration-normal ease-soft
                           hover:shadow-glow hover:border-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 
                             opacity-0 group-hover:opacity-20 transition-opacity duration-normal ease-soft" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-accent/5 group-hover:animate-bounce-subtle">
                    <FaPhone className="text-3xl sm:text-4xl text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-pen mb-3 bg-gradient-to-r from-accent to-accent-2 
                              bg-clip-text text-transparent group-hover:animate-glow">Call Me</h3>
                  <p className="text-gray-700 group-hover:text-gray-800">+63 935 548 6606</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-8"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-accent/5 hover:bg-accent/10 
                     transition-colors duration-normal ease-soft group"
          >
            <FaLinkedin className="text-2xl text-accent group-hover:animate-wave" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-accent/5 hover:bg-accent/10 
                     transition-colors duration-normal ease-soft group"
          >
            <FaGithub className="text-2xl text-accent group-hover:animate-wave" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] animate-scale-soft">
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-1/4 -right-32 w-[45rem] h-[45rem] animate-scale-soft" 
             style={{ animationDelay: '-4s' }}>
          <div className="w-full h-full bg-gradient-to-tl from-accent-2/10 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}