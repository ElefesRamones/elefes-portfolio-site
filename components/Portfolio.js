import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'
import ProjectPopup from './ProjectPopup'

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Close popup on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (selected) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selected, handleKeyDown]);

  const handleClose = () => {
    setSelected(null);
    setCurrentMediaIndex(0);
  };

  // Keyboard open handler
  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelected(project);
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-5xl font-punk text-center mb-16 text-black">My Work</h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="cursor-pointer aspect-[4/3] relative overflow-hidden rounded-lg group outline-none border-2 border-transparent focus:border-black focus:ring-4 focus:ring-black/30 transition shadow-lg"
              tabIndex={0}
              role="button"
              aria-label={`Open project: ${project.title}`}
              aria-pressed={selected && selected.id === project.id}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-black font-bold text-lg drop-shadow-lg">{project.title}</span>
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
  );
}