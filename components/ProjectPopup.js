import { useEffect, useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { getImageUrl, getVideoUrl } from '../utils/cloudinary'

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
      opacity: 0,
    }),
    center: {
      opacity: 1,
    },
    exit: (dir) => ({
      opacity: 0,
    }),
  }

  const renderMedia = (mediaUrl) => {
    const isVideo = project.mediaTypes ? 
      project.mediaTypes[currentMediaIndex] === 'video' : 
      mediaUrl.match(/\.(mp4|webm|ogg)$/i);

    if (isVideo) {
      return (
        <video
          src={getVideoUrl(mediaUrl)}
          controls
          autoPlay
          playsInline
          className="w-full h-[80vh] object-contain bg-black"
        />
      );
    }

    return (
      <img
        src={getImageUrl(mediaUrl)}
        alt={`${project.title} - Media ${currentMediaIndex + 1}`}
        className="w-full h-[80vh] object-contain bg-black"
      />
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex flex-col"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="w-full h-full relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Media Section */}
        <div className="flex-1 w-full relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentMediaIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {renderMedia(project.media[currentMediaIndex])}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {project.media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(-1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/75 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(1)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/75 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>

        {/* Project Info */}
        <div className="w-full bg-black p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-pen text-white mb-4">{project.title}</h2>
            <p className="text-white/75 text-lg max-w-2xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map(tag => (
                <span
                  key={tag}
                  className="text-white/60 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 p-2 text-white/75 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}