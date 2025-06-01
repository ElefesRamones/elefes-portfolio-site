import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/globals.css'
import '../styles/scrollbar.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        // Force scroll to top
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

  return <Component {...pageProps} />
}

export default MyApp