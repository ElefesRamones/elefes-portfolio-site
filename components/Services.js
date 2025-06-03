import { FaPencilRuler, FaVideo, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedCard from './AnimatedCard'
import { staggerContainer, fadeInUp } from '../utils/animations'

export default function Services() {
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
    hidden: { 
      ...fadeInUp.initial,
      y: 40 
    },
    visible: {
      ...fadeInUp.animate,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  const serviceCards = [
    {
      icon: FaPencilRuler,
      title: "Graphic Design",
      description: "Brand identity, marketing materials, and visual assets that tell your story.",
      gradient: "from-accent to-accent-2"
    },
    {
      icon: FaVideo,
      title: "Content Editing",
      description: "Professional content refinement and visual enhancement for maximum impact.",
      gradient: "from-accent-2 to-accent"
    },
    {
      icon: FaInstagram,
      title: "Digital Content",
      description: "Engaging social media content, story templates, and digital marketing assets.",
      gradient: "from-accent to-accent-2"
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-24 space-y-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-xl animate-pulse-soft" />
            <motion.div
            variants={itemVariants}
            className="inline-block px-6 py-2 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-2/10 
                     backdrop-blur-sm mb-8 animate-float relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 
                          translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 ease-soft" />
            <span className="relative font-medium tracking-wide bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
              Services
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-punk relative">
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent opacity-50 blur-2xl" />
            <span className="relative bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent animate-glow">
              What I Offer
            </span>
          </h2>

          <div className="flex justify-center items-center gap-3">
            <motion.div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/30 to-accent/50 animate-scale-soft" />
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-accent/10 rounded-full animate-rotate-slow" />
              <div className="absolute inset-0.5 bg-gradient-to-br from-accent to-accent-2 rounded-full animate-pulse-soft opacity-50" />
            </div>
            <motion.div className="h-px w-12 bg-gradient-to-r from-accent/50 via-accent/30 to-transparent animate-scale-soft" style={{ animationDelay: '-1s' }} />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-3">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
              }}
              className="group/card"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-accent/[0.07] via-accent/5 to-accent-2/[0.07] 
                           border border-accent/10 backdrop-blur-sm 
                           transition-all duration-normal ease-soft relative overflow-hidden
                           hover:shadow-glow hover:border-accent/20
                           motion-safe:animate-fade-in-up">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 opacity-0 
                             group-hover/card:opacity-20 transition-opacity duration-normal ease-soft" />
                <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-0 
                             group-hover/card:opacity-30 transition-opacity duration-normal ease-soft" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent bg-[length:200%_100%]
                             opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 animate-shimmer" />

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-0 
                               group-hover/card:opacity-100 transition-opacity duration-normal blur-xl" />
                  <motion.div
                    initial={false}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3, ease: [0.68, -0.6, 0.32, 1.6] }
                    }}
                    className="relative"
                  >
                    <service.icon className={`text-6xl sm:text-7xl mx-auto bg-gradient-to-r ${service.gradient} 
                                         bg-clip-text text-transparent group-hover/card:animate-pulse-soft`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-pen mb-4 bg-gradient-to-r from-accent to-accent-2 
                              bg-clip-text text-transparent group-hover/card:animate-glow">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed sm:text-lg transition-colors duration-normal
                             group-hover/card:text-gray-800">
                    {service.description}
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent my-6 
                               transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-soft" />

                  {/* Learn More Button */}
                  <motion.div
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center text-accent font-medium group/link relative"
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-accent/5 rounded-full -z-10 opacity-0 
                                 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-normal ease-soft relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <div className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-accent to-accent-2
                                 group-hover/link:w-full transition-all duration-300 ease-soft" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] animate-scale-soft">
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-1/4 -right-32 w-[45rem] h-[45rem] animate-scale-soft" style={{ animationDelay: '-4s' }}>
          <div className="w-full h-full bg-gradient-to-tl from-accent-2/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] animate-scale-soft opacity-30" 
             style={{ animationDelay: '-2s' }}>
          <div className="w-full h-full bg-gradient-radial from-accent-light/5 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
