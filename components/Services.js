// components/Services.js
import { FaPencilRuler, FaVideo, FaInstagram } from 'react-icons/fa'

export default function Services() {
  return (
    <section className="text-white py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-punk mb-12 text-white">My Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* DESIGN SERVICE */}
        <div className="bg-black/20 p-6 rounded-2xl">
          <FaPencilRuler className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-xl font-pen mb-2">
            Graphic Design
          </h3>
          <p className="text-white/80">Posters, flyers, album covers, and more with your vibe in mind.</p>
        </div>

        {/* VIDEO EDITING SERVICE */}
        <div className="bg-black/20 p-6 rounded-2xl">
          <FaVideo className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-xl font-pen mb-2">
            Video Editing
          </h3>
          <p className="text-white/80">Stylized reels, highlight cuts, or promos that hit hard.</p>
        </div>

        {/* SOCIAL MEDIA SERVICE */}
        <div className="bg-black/20 p-6 rounded-2xl">
          <FaInstagram className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-xl font-pen mb-2">
            Social Media
          </h3>
          <p className="text-white/80">Templates, strategy, and post designs that grab attention.</p>
        </div>
      </div>
    </section>
  )
}
