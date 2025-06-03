// Reusable Framer Motion animations
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
}

export const textReveal = {
  initial: { y: "100%" },
  animate: { y: 0 },
  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.6,
    ease: [0.65, 0, 0.35, 1]
  }
}

export const buttonTap = {
  tap: { scale: 0.98 },
  hover: { scale: 1.05 },
  transition: {
    duration: 0.2,
    ease: "easeOut"
  }
}

export const modalTransition = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: {
    duration: 0.35,
    ease: [0.65, 0, 0.35, 1]
  }
}

// Motion variants for staggered lists
export const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1]
    }
  }
}

// Smooth scroll variants
export const smoothScroll = {
  duration: 0.8,
  ease: [0.65, 0, 0.35, 1]
}
