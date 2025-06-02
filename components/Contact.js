import { FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-black relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-punk mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10 text-lg text-center">
          Let's create something bold together. Reach out for collaborations, commissions, or just to say hi!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
          <div className="flex items-center gap-2 text-black">
            <FaEnvelope />
            <span>Elefesramones51@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-black">
            <FaPhone />
            <span>+63 935 548 6606</span>
          </div>
        </div>
      </div>
    </section>
  );
}