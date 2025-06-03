import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/scrollbar.css'
import Navigation from '../components/Navigation'
import SmokeBackground from '../components/SmokeBackground'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        })
      }
    }

    if (typeof window !== 'undefined') {
      // Prevent scroll restoration
      window.history.scrollRestoration = 'manual'
      
      // Add event listeners
      window.addEventListener('beforeunload', handleScroll)
      window.addEventListener('load', handleScroll)
      
      // Initial scroll reset
      handleScroll()
    }

    // Cleanup event listeners
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeunload', handleScroll)
        window.removeEventListener('load', handleScroll)
      }
    }
  }, [])

  // Handle viewport height for mobile browsers
  useEffect(() => {
    const setVH = () => {
      if (typeof window !== 'undefined') {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }

    // Initial set
    setVH()
    
    // Update on resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', setVH)
      return () => window.removeEventListener('resize', setVH)
    }
  }, [])

  // Reset scroll on route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    }
  }, [Component])

  return (
    <>
      <SmokeBackground />
      {router.pathname !== '/' && <Navigation />}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp