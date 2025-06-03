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
      x: dir > 0 ? 20 : -20,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.65, 0, 0.35, 1],
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -20 : 20,
      transition: {
        duration: 0.35,
        ease: [0.65, 0, 0.35, 1],
      }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-modal flex flex-col"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
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
              className="absolute inset-0 flex items-center justify-center"
            >
              {renderMedia(project.media[currentMediaIndex])}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {project.media.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(-1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-lg text-white/90 hover:text-white transition-all duration-normal ease-soft shadow-lg"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(1)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-lg text-white/90 hover:text-white transition-all duration-normal ease-soft shadow-lg"
                aria-label="Next image"
              >
                <FaChevronRight className="w-8 h-8" />
              </motion.button>
            </>
          )}
        </div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          className="w-full bg-black/80 backdrop-blur-md p-8 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-pen text-white mb-4 drop-shadow-glow">{project.title}</h2>
            <p className="text-white/90 text-lg max-w-2xl mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/10 text-white/80 text-sm border border-white/20 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed top-6 right-6 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white/90 hover:text-white transition-all duration-normal ease-soft shadow-lg"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}