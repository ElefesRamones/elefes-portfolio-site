import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'GRAPHIC DESIGN' },
    { name: 'VIDEO EDITING' },
    { name: 'SOCIAL MEDIA' },
    { name: 'TYPOGRAPHY' },
    { name: 'BRAND IDENTITY' },
    { name: 'DIGITAL ART' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Enhanced B&W Background effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.2] mix-blend-overlay pointer-events-none"></div>
      <div 
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] 
        bg-[length:100px_100px]"
      ></div>
      <div className="absolute inset-0 bg-gradient-radial from-black via-black to-transparent opacity-90"></div>

      {/* Add diagonal stripes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
        <div className="absolute -right-full top-0 w-[200%] h-full [background:repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(255,255,255,0.03)_50px,rgba(255,255,255,0.03)_100px)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-24">
          <div className="glitch relative inline-block">
            <h2 className="text-7xl md:text-8xl font-punk text-white tracking-wider">
              ABOUT ME
            </h2>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column - Profile */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-8">
            <div className="relative group">
              <div className="aspect-square bg-black border-2 border-white/30 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative">
                  <motion.span 
                    className="text-white text-8xl font-punk tracking-widest -skew-x-12 glitch"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.4)",
                        "0 0 20px rgba(255,255,255,0.6)",
                        "0 0 10px rgba(255,255,255,0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    RC
                  </motion.span>
                  <div className="absolute inset-0 border-4 border-white/10 -skew-x-3"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 -skew-x-3"></div>
            </div>

            <div className="glitch mt-8">
              <h3 className="text-3xl font-punk text-white tracking-wider uppercase">
                Elefes Ramones<br />Capulong
              </h3>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="md:col-span-8 space-y-12">
            <div className="space-y-6">
              <p className="text-white text-xl tracking-wide leading-relaxed border-l-4 border-white/30 pl-6">
                A design rebel with a cause. I create visuals that break boundaries and challenge the status quo.
              </p>
              <p className="text-gray-400 tracking-wide leading-relaxed">
                Raw. Rebellious. Relentless. My work fuses punk energy with modern design sensibilities.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-punk text-white flex items-center gap-4">
                <span>ARSENAL</span>
                <div className="h-px flex-grow bg-gradient-to-r from-white/50 to-transparent"></div>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, skewX: -3 }}
                    className="relative group"
                  >
                    <div className="bg-white/5 border border-white/20 px-4 py-3">
                      <span className="font-punk tracking-wider text-sm text-white">
                        {skill.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-white/5 -skew-x-6 -z-10 group-hover:bg-white/10 transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <a
                href="#portfolio"
                className="group inline-flex items-center bg-white/5 text-white px-8 py-4 border border-white/30 hover:border-white/70 font-punk tracking-wider text-lg relative overflow-hidden"
              >
                <span className="relative z-10">SEE MY WORK</span>
                <svg 
                  className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 -skew-x-12 transition-all duration-300"></div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}