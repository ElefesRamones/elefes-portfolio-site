import { useEffect, useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectPopup({ project, onClose, currentMediaIndex, setCurrentMediaIndex }) {
  const [direction, setDirection] = useState(0)
  const popupRef = useRef(null)

  // Trap focus inside popup
  useEffect(() => {
    const focusable = popupRef.current?.querySelectorAll('button, [tabindex]:not([tabindex="-1"])')
    focusable?.[0]?.focus()
    const handleTab = (e) => {
      if (!focusable) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [])

  // Prevent background scroll and close on overlay click
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  })

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentMediaIndex((prev) => {
      const total = project.media.length
      return (prev + newDirection + total) % total
    })
  }

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: 'absolute',
    }),
  }

  const currentMedia = project.media[currentMediaIndex]

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-6"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-white text-black rounded-lg max-w-7xl w-full flex flex-col md:flex-row relative p-4 gap-6 outline-none shadow-xl"
        onClick={e => e.stopPropagation()}
      >        {/* Left side - description */}
        <div className="md:w-5/12 p-4">          <h2 className="text-3xl font-pen mb-4">{project.title}</h2>
          <p className="text-black/80">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span
                key={tag}
                className="bg-white border border-black/30 text-black px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - media area */}
        <div className="md:w-7/12 relative flex flex-col items-center justify-center gap-4">
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous media"
              className="z-40 bg-white text-black rounded-full p-2 hover:bg-black hover:text-white border border-black transition mr-4 focus:ring-2 focus:ring-black"
            >
              <FaChevronLeft />
            </button>

            {/* Media Viewer */}
            <div className="relative w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-lg border-2 border-black overflow-hidden z-30 bg-white">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {currentMedia.endsWith('.mp4') ? (
                    <video src={currentMedia} controls className="w-full h-full object-contain" />
                  ) : (
                    <img src={currentMedia} alt={project.title} className="w-full h-full object-contain" loading="lazy" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next media"
              className="z-40 bg-white text-black rounded-full p-2 hover:bg-black hover:text-white border border-black transition ml-4 focus:ring-2 focus:ring-black"
            >
              <FaChevronRight />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-2xl hover:text-white hover:bg-black rounded-full transition z-50 focus:ring-2 focus:ring-black"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}