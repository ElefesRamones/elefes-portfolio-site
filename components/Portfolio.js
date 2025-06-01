// components/Portfolio.js
import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import ProjectPopup from './ProjectPopup'

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const handleClose = () => {
    setSelected(null)
    setCurrentMediaIndex(0)
  }

  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-5xl font-punk text-center mb-8">My Work</h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer aspect-square relative overflow-hidden rounded-lg group"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectPopup
          project={selected}
          onClose={handleClose}
          currentMediaIndex={currentMediaIndex}
          setCurrentMediaIndex={setCurrentMediaIndex}
        />
      )}
    </section>
  )
}
