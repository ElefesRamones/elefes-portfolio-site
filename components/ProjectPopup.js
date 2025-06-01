import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectPopup({ project, onClose, currentMediaIndex, setCurrentMediaIndex }) {
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])

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
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-6">
      <div className="bg-punk-black text-white rounded-lg max-w-7xl w-full flex flex-col md:flex-row relative p-4 gap-6">

        {/* Left side - description */}
        <div className="md:w-5/12 p-4">
          <h2 className="text-3xl font-punk mb-4">{project.title}</h2>
          <p className="text-punk-peach">{project.description}</p>
        </div>

        {/* Right side - media area */}
        <div className="md:w-7/12 relative flex flex-col items-center justify-center gap-4">
          <div className="relative flex items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={() => paginate(-1)}
              className="z-40 bg-punk-peach text-white rounded-full p-2 hover:opacity-70 hover:ring-2 hover:ring-white transition mr-4"
            >
              <FaChevronLeft />
            </button>

            {/* Media Viewer */}
            <div className="relative w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-lg border-2 border-punk-peach overflow-hidden z-30 bg-black">
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
                    <img src={currentMedia} alt="" className="w-full h-full object-contain" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-white text-2xl hover:text-punk-peach hover:ring-2 hover:ring-white rounded-full transition z-50"
              >
                ✕
              </button>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => paginate(1)}
              className="z-40 bg-punk-peach text-white rounded-full p-2 hover:opacity-70 hover:ring-2 hover:ring-white transition ml-4"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Deck Preview */}
          <div className="flex gap-2 mt-6 z-10 flex-wrap justify-center">
            {project.media.map((item, i) => {
              if (i === currentMediaIndex) return null
              return (
                <div
                  key={i}
                  className="w-[100px] h-[100px] rounded-lg overflow-hidden border-2 border-punk-peach opacity-50 hover:opacity-80 transition cursor-pointer"
                  onClick={() => {
                    const dir = i > currentMediaIndex ? 1 : -1
                    setDirection(dir)
                    setCurrentMediaIndex(i)
                  }}
                >
                  {item.endsWith('.mp4') ? (
                    <video src={item} muted loop className="w-full h-full object-contain" />
                  ) : (
                    <img src={item} alt="" className="w-full h-full object-contain" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
