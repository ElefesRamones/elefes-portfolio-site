import { FaEnvelope, FaPhone } from 'react-icons/fa'
import styles from './Contact.module.css'

export default function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:Elefesramones51@gmail.com';
  };

  return (
    <section id="contact" className="py-20 px-6 text-white relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-punk mb-6 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Let's create something bold together. Reach out for collaborations, commissions, or just to say hi!
        </p>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleEmailClick}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/50"
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
          </button>
          <a
            href="tel:+639355486606"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold text-lg border-2 border-white shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <FaPhone className="text-xl" />
            +63 935 548 6606
          </a>
        </div>
      </div>
    </section>
  )
}