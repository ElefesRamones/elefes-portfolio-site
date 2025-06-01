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
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-6"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-black text-white rounded-lg max-w-7xl w-full flex flex-col md:flex-row relative p-4 gap-6 outline-none"
        onClick={e => e.stopPropagation()}
      >
        {/* Left side - description */}
        <div className="md:w-5/12 p-4">
          <h2 className="text-3xl font-punk mb-4">{project.title}</h2>
          <p className="text-gray-200">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span
                key={tag}
                className="bg-black border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium"
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
              className="z-40 bg-black text-white rounded-full p-2 hover:bg-white hover:text-black border border-white transition mr-4 focus:ring-2 focus:ring-white"
            >
              <FaChevronLeft />
            </button>

            {/* Media Viewer */}
            <div className="relative w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-lg border-2 border-white overflow-hidden z-30 bg-black">
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

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-2 right-2 text-white text-2xl hover:text-black hover:bg-white rounded-full transition z-50 focus:ring-2 focus:ring-white"
              >
                ✕
              </button>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next media"
              className="z-40 bg-black text-white rounded-full p-2 hover:bg-white hover:text-black border border-white transition ml-4 focus:ring-2 focus:ring-white"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Deck Preview */}
          <div className="flex gap-2 mt-6 z-10 flex-wrap justify-center">
            {project.media.map((item, i) => {
              if (i === currentMediaIndex) return null
              return (
                <button
                  key={i}
                  className="w-[100px] h-[100px] rounded-lg overflow-hidden border-2 border-white opacity-50 hover:opacity-80 transition cursor-pointer focus:ring-2 focus:ring-white"
                  onClick={() => {
                    const dir = i > currentMediaIndex ? 1 : -1
                    setDirection(dir)
                    setCurrentMediaIndex(i)
                  }}
                  aria-label={`Show media ${i + 1}`}
                >
                  {item.endsWith('.mp4') ? (
                    <video src={item} muted loop className="w-full h-full object-contain" />
                  ) : (
                    <img src={item} alt="" className="w-full h-full object-contain" loading="lazy" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}