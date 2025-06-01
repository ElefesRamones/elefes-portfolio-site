// components/Services.js
import { FaPencilRuler, FaVideo, FaInstagram } from 'react-icons/fa'

export default function Services() {
  return (
    <section className="bg-punk-black text-white py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-punk mb-12 text-punk-neon">My Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* DESIGN SERVICE */}
        <div className="group bg-punk-deep p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-punk-glow">
          <FaPencilRuler className="text-5xl text-punk-peach mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 transition-all group-hover:font-punk">
            Graphic Design
          </h3>
          <p className="text-punk-peach">Posters, flyers, album covers, and more with your vibe in mind.</p>
        </div>

        {/* VIDEO EDITING SERVICE */}
        <div className="group bg-punk-deep p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-punk-glow">
          <FaVideo className="text-5xl text-punk-peach mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 transition-all group-hover:font-punk">
            Video Editing
          </h3>
          <p className="text-punk-peach">Stylized reels, highlight cuts, or promos that hit hard.</p>
        </div>

        {/* SOCIAL MEDIA SERVICE */}
        <div className="group bg-punk-deep p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-punk-glow">
          <FaInstagram className="text-5xl text-punk-peach mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 transition-all group-hover:font-punk">
            Social Media
          </h3>
          <p className="text-punk-peach">Templates, strategy, and post designs that grab attention.</p>
        </div>
      </div>
    </section>
  )
}
