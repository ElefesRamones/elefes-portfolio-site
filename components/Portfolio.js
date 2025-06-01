import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'
import ProjectPopup from './ProjectPopup'

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  // Close popup on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [])

  useEffect(() => {
    if (selected) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected, handleKeyDown])

  const handleClose = () => {
    setSelected(null)
    setCurrentMediaIndex(0)
  }

  // Keyboard open handler
  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelected(project)
    }
  }

  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-5xl font-punk text-center mb-8">My Work</h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="cursor-pointer aspect-square relative overflow-hidden rounded-lg group outline-none"
              tabIndex={0}
              aria-label={`Open project: ${project.title}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => handleCardKeyDown(e, project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                {project.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectPopup
            project={selected}
            onClose={handleClose}
            currentMediaIndex={currentMediaIndex}
            setCurrentMediaIndex={setCurrentMediaIndex}
          />
        )}
      </AnimatePresence>
    </section>
  )
}