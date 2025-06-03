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
          className="w-full h-full object-contain"
        />
      );
    }

    return (
      <img
        src={getImageUrl(mediaUrl)}
        alt={`${project.title} - Media ${currentMediaIndex + 1}`}
        className="w-full h-full object-contain"
      />
    );
  };

  const currentMedia = project.media[currentMediaIndex]

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex flex-col overflow-y-auto"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="w-full min-h-screen flex flex-col relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Media Section */}
        <div className="flex-1 w-full h-full flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-[90vw] mx-auto">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentMediaIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                {renderMedia(project.media[currentMediaIndex])}
              </motion.div>
            </AnimatePresence>

            {project.media.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    paginate(-1)
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    paginate(1)
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Text Overlay */}
        <div className="w-full bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <h2 className="text-4xl font-pen text-white mb-4">{project.title}</h2>
            <p className="text-white/90 text-lg max-w-2xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-white/10 px-3 py-1 rounded-full text-white/80 text-sm"
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
          className="fixed top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
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