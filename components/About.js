import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-punk text-white mb-8">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-black rounded-2xl border-4 border-white overflow-hidden shadow-lg">
              {/* Replace this div with your actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                <span className="text-white text-6xl font-punk">RC</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-10 animate-pulse delay-500"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-white">
                I'm <span className="text-white font-bold underline">Elefes Ramones Capulong</span>, 
                an aspiring graphic designer and editor passionate about turning creative ideas 
                into stunning visuals that make people stop and stare.
              </p>
              
              <p className="text-gray-300">
                My work blends punk aesthetics with modern design principles, creating 
                pieces that are both rebellious and refined. Whether it's a gritty poster, 
                a dynamic video edit, or eye-catching social media content, I bring 
                energy and attitude to every project.
              </p>

              <p className="text-gray-300">
                I believe great design should challenge conventions while serving its 
                purpose. That's why I focus on creating work that's not just visually 
                striking, but also tells a story and connects with audiences on an 
                emotional level.
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-punk text-white mb-4">What I Do</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Graphic Design',
                  'Video Editing',
                  'Social Media',
                  'Typography',
                  'Brand Identity',
                  'Digital Art'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:border-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#portfolio"
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                See My Work
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}