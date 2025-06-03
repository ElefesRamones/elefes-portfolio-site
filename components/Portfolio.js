import { motion } from 'framer-motion'
import Link from 'next/link'
import projects from '../data/projects'
import { getImageUrl } from '../utils/cloudinary'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-5xl font-punk text-center mb-16 text-black">My Work</h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="block"
            >
              <motion.div
                className="cursor-pointer aspect-[4/3] relative overflow-hidden group outline-none focus:outline-none transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={getImageUrl(project.thumbnail)}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="font-bold text-white text-lg drop-shadow-lg">{project.title}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}