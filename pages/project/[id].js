import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import projects from '../../data/projects'
import { getImageUrl } from '../../utils/cloudinary'
import LoadingState from '../../components/LoadingState'
import { pageTransition, fadeIn, fadeInUp } from '../../utils/animations'

export default function ProjectPage({ initialProject }) {
  // Set body background to black
  useEffect(() => {
    document.body.style.backgroundColor = '#000000'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  const router = useRouter()
  const [project, setProject] = useState(initialProject)
  const [imageStates, setImageStates] = useState(() => {
    // Initialize image states based on initial project
    if (!initialProject) return {}
    return initialProject.media.reduce((acc, _, index) => {
      acc[index] = true
      return acc
    }, {})
  })
  const [viewport, setViewport] = useState(() => {
    // Initialize with reasonable defaults for SSR
    return typeof window === 'undefined' 
      ? { width: 1200, height: 800 } 
      : { width: window.innerWidth, height: window.innerHeight }
  })
  const [imageAspectRatios, setImageAspectRatios] = useState({})

  // Track viewport size
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    // Update on resize
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  // Handle image load and store aspect ratio
  const handleImageLoad = useCallback((index, e) => {
    const img = e.target
    setImageAspectRatios(prev => ({
      ...prev,
      [index]: img.naturalWidth / img.naturalHeight
    }))
    setImageStates(prev => ({
      ...prev,
      [index]: false
    }))
  }, [])

  // Calculate image dimensions based on viewport and aspect ratio
  const getImageDimensions = useCallback((index) => {
    const aspectRatio = imageAspectRatios[index]
    if (!aspectRatio) {
      // Return default dimensions when aspect ratio is not yet known
      return {
        width: Math.min(2000, viewport.width),
        height: undefined
      }
    }

    const maxWidth = Math.min(2000, viewport.width)
    const viewportHeight = viewport.height - 100 // Account for padding/margins
    
    let width = maxWidth
    let height = width / aspectRatio

    // If the height is too tall for the viewport, scale down
    if (height > viewportHeight) {
      height = viewportHeight
      width = height * aspectRatio
    }

    return {
      width: Math.round(width),
      height: Math.round(height)
    }
  }, [viewport, imageAspectRatios])

  // Handle direct navigation changes and refresh
  useEffect(() => {
    if (router.query.id && !project) {
      const foundProject = projects.find(p => p.id === Number(router.query.id))
      if (foundProject) {
        setProject(foundProject)
        // Initialize image states for the new project
        setImageStates(
          foundProject.media.reduce((acc, _, index) => {
            acc[index] = true
            return acc
          }, {})
        )
      }
    }
  }, [router.query.id, project])

  if (!project) return <LoadingState />

  const allImagesLoaded = Object.values(imageStates).every(state => !state)

  const containerVariants = {
    ...fadeIn,
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.65, 0, 0.35, 1],
      }
    }
  }

  const contentVariants = {
    ...fadeInUp,
    visible: {
      ...fadeInUp.animate,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
        delay: 0.2
      }
    }
  }

  const mediaVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      }
    })
  }

  return (
    <div className="fixed inset-0 bg-black">
      {/* Floating Home Button */}
      <Link
        href="/"
        className="fixed bottom-8 right-8 z-50 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 group"
        aria-label="Go to homepage"
      >
        <svg 
          className="w-6 h-6 text-white/75 group-hover:text-white transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
      </Link>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black">
        <Link 
          href="/#portfolio"
          className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="text-white/50 text-sm">
          {project.category}
        </div>
      </header>

      {/* Loading State */}
      <AnimatePresence mode="wait">
        {!allImagesLoaded && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex items-center justify-center"
          >
            <LoadingState />
          </motion.div>
        )}
      </AnimatePresence>      {/* Main Content */}
      <div className="h-full overflow-y-auto pt-16 relative project-page bg-black">
        <div className="max-w-[2000px] mx-auto bg-black">
          {/* Project Header */}
          <div className="text-white px-6 py-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-pen mb-4">{project.title}</h1>
            <p className="text-white/75 text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              {project.tags?.map(tag => (
                <span key={tag} className="text-white/60 text-sm border border-white/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.media.map((mediaUrl, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-h-screen py-8">
              <div 
                className="w-full px-4 flex justify-center items-center bg-black"
                style={{
                  minHeight: '50vh',
                  height: imageAspectRatios[index] ? 'auto' : undefined
                }}
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: !imageStates[index] ? 1 : 0,
                    scale: !imageStates[index] ? 1 : 0.98
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full"
                  style={{
                    maxWidth: getImageDimensions(index).width || '100%',
                    height: getImageDimensions(index).height || 'auto'
                  }}
                >
                  <img
                    key={mediaUrl}
                    src={getImageUrl(mediaUrl, {
                      ...getImageDimensions(index),
                      crop: 'fit'
                    })}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                    onLoad={(e) => handleImageLoad(index, e)}
                  />
                </motion.div>
              </div>
              
              {/* Text Section after image */}
              {project.sections?.filter(section => section.afterImage === index).map((section, sectionIndex) => (
                <div key={sectionIndex} className="text-white px-6 py-16 max-w-3xl mx-auto w-full">
                  <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  <p className="text-white/75 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Add server-side props to handle page refresh
export async function getServerSideProps({ params }) {
  const project = projects.find(p => p.id === Number(params.id))
  
  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      initialProject: project
    }
  }
}
