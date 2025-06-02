import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:Elefesramones51@gmail.com';
  };

  return (    <section id="contact" className="py-20 px-6 text-white relative overflow-hidden">

      <div className="max-w-xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-punk mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let's create something bold together. Reach out for collaborations, commissions, or just to say hi!
        </motion.p>

        <div className="flex flex-col items-center gap-6">
          <motion.button
            onClick={handleEmailClick}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-black hover:text-white border-2 border-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Send email to Elefesramones51@gmail.com"
            type="button"
          >
            <FaEnvelope className="text-xl" />
            <span
              className={styles.glitch}
              data-text="Elefesramones51@gmail.com"
            >
              Elefesramones51@gmail.com
            </span>
          </motion.button>
          <motion.a
            href="tel:+639355486606"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-black shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaPhone className="text-xl" />
            +63 935 548 6606
          </motion.a>
        </div>
      </div>
    </section>
  )
}