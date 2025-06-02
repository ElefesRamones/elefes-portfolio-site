import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="relative overflow-hidden py-20">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto space-y-12 text-center">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-punk text-white tracking-wider">
              ABOUT_ME
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              Aspiring graphic designer and video editor with a passion for creating compelling visual narratives.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              I blend creative vision with technical expertise to craft designs that captivate and communicate. Currently exploring the intersection of traditional design principles and contemporary digital aesthetics.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}