import { motion } from 'framer-motion'
import Link from 'next/link'
import projects from '../data/projects'
import { getImageUrl } from '../utils/cloudinary'

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.33, 1, 0.68, 1],
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  }

  return (
    <section id="portfolio" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-16 sm:mb-24 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-xl animate-pulse-soft" />
        
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div
            variants={itemVariants}            className="inline-block px-6 py-2 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-2/10 
                     backdrop-blur-sm mb-8 animate-float relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 
                          translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 ease-soft" />
            <span className="relative font-medium tracking-wide bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-punk relative">
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent opacity-50 blur-2xl" />
            <span className="relative bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent animate-glow">
              My Work
            </span>
          </h2>

          <div className="flex justify-center items-center gap-3">
            <motion.div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/30 to-accent/50 animate-scale-soft" />
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-accent/10 rounded-lg animate-rotate-slow" />
              <div className="absolute inset-0.5 bg-gradient-to-br from-accent to-accent-2 rounded-lg animate-pulse-soft opacity-50" />
            </div>
            <motion.div className="h-px w-12 bg-gradient-to-r from-accent/50 via-accent/30 to-transparent animate-scale-soft" 
                       style={{ animationDelay: '-1s' }} />
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="container"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group/card"
            >
              <Link
                href={`/project/${project.id}`}
                className="block"
              >
                <motion.div
                  className="cursor-pointer aspect-[4/3] relative overflow-hidden rounded-2xl 
                           bg-gradient-to-br from-accent/[0.07] via-accent/5 to-accent-2/[0.07]
                           outline-none ring-accent/20 ring-offset-2 ring-offset-white focus-visible:ring-2 
                           transition-all duration-normal ease-soft group-hover/card:shadow-glow"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-dark/90 
                               opacity-0 group-hover/card:opacity-100 transition-opacity duration-normal ease-soft z-10" />
                  <div className="absolute inset-0 bg-gradient-radial from-accent/30 to-transparent 
                               opacity-0 group-hover/card:opacity-60 transition-opacity duration-normal ease-soft z-10" />
                  
                  {/* Image */}
                  <motion.div className="relative h-full transform-gpu transition-transform duration-700 ease-soft 
                                     group-hover/card:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                    <img
                      src={getImageUrl(project.thumbnail)}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20">
                    <div className="transform transition-all duration-500 ease-soft
                                translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                      <h3 className="font-punk text-white text-2xl sm:text-3xl mb-4 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/90 mb-4 line-clamp-2 sm:text-lg">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, index) => (
                          <span
                            key={index}                            className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-lg text-white/90
                                     border border-white/10 animate-fade-in-blur"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
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