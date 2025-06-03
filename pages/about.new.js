import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import GradientBackground from '../components/GradientBackground';
import Navigation from '../components/Navigation';
import { staggerContainer, fadeInUp, fadeIn } from '../utils/animations';

export default function AboutPage() {
  const containerVariants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.animate,
      transition: {
        staggerChildren: 0.2,
        ease: [0.65, 0, 0.35, 1],
        duration: 0.7
      }
    }
  };

  const itemVariants = {
    ...fadeInUp,
    visible: {
      ...fadeInUp.animate,
      transition: {
        duration: 0.7,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  const cardVariants = {
    ...fadeIn,
    hidden: { 
      ...fadeIn.initial,
      scale: 0.95 
    },
    visible: {
      ...fadeIn.animate,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  return (
    <>
      <Head>
        <title>About Me | Portfolio</title>
        <meta name="description" content="Learn more about my journey, skills, and passion for design and digital experiences." />
      </Head>

      <Navigation />
      
      <GradientBackground intensity="normal" className="min-h-screen py-20 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-elevate container"
        >
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-8 relative">
              <motion.div
                variants={cardVariants}
                className="inline-block px-6 py-2 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-2/10 
                        backdrop-blur-sm mb-8 animate-float relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 
                             translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 ease-soft" />
                <span className="relative font-medium tracking-wide bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-punk relative">
                <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent opacity-50 blur-2xl" />
                <span className="relative bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent animate-glow">
                  CRAFTING DIGITAL EXPERIENCES
                </span>
              </h1>

              <div className="flex justify-center items-center gap-3">
                <motion.div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/30 to-accent/50 animate-scale-soft" />
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-accent/10 rounded-full animate-rotate-slow" />
                  <div className="absolute inset-0.5 bg-gradient-to-br from-accent to-accent-2 rounded-full animate-pulse-soft opacity-50" />
                </div>
                <motion.div className="h-px w-12 bg-gradient-to-r from-accent/50 via-accent/30 to-transparent animate-scale-soft" 
                           style={{ animationDelay: '-1s' }} />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8 relative">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Aspiring graphics designer with a keen eye for visual storytelling and a passion for creating engaging content 
                  that resonates with audiences.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I specialize in crafting visually compelling designs and polished content that bridges creativity with purpose. 
                  My approach combines modern design trends with effective communication strategies to deliver impactful results.
                </p>
              </div>

              <motion.div 
                variants={cardVariants}
                className="flex flex-wrap gap-4 justify-center pt-8"
              >
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 blur-xl 
                               group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="px-6 py-3 bg-gradient-to-br from-accent/[0.07] via-accent/5 to-transparent 
                               backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 
                                 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent 
                                  font-medium animate-shimmer">Visual Design</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-2 to-accent opacity-0 blur-xl 
                               group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="px-6 py-3 bg-gradient-to-br from-accent-2/[0.07] via-accent/5 to-transparent 
                               backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-2/10 via-transparent to-accent-2/10 
                                 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent 
                                  font-medium animate-shimmer">Content Creation</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 blur-xl 
                               group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="px-6 py-3 bg-gradient-to-br from-accent/[0.07] via-accent/5 to-transparent 
                               backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 
                                 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent 
                                  font-medium animate-shimmer">Brand Strategy</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div variants={itemVariants} className="pt-12 flex flex-col sm:flex-row gap-6 justify-center">
              {/* View Work Button */}
              <Link href="/#portfolio" className="relative group overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent rounded-full" />
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-2 rounded-full 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white 
                               shadow-lg group-hover:shadow-glow transition-all duration-normal ease-soft">
                    View My Work
                    <span className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-500" />
                  </span>
                </motion.div>
              </Link>

              {/* Back to Home Button */}
              <Link href="/" className="relative group overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/10 via-accent/5 
                         to-accent-2/10 backdrop-blur-sm rounded-full relative cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent transition-transform duration-300 transform 
                           group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="text-accent font-medium">Back to Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 
                               translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 
                               ease-soft -z-10" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </GradientBackground>
    </>
  );
}
