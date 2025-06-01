// components/About.js

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'black' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 className="text-4xl md:text-5xl font-punk text-white mb-6">About Me</h2> {/* ← Change this title */}
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          I'm Elefes Ramones Capulong, an aspiring graphic designer and editor
          passionate about turning creative ideas into stunning visuals. {/* ← Customize this text */}
        </p>
      </motion.div>
    </section>
  )
}
