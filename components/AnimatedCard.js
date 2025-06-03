import { motion } from 'framer-motion';
import { cardHover } from '../utils/animations';

export default function AnimatedCard({ 
  children, 
  className = '', 
  onClick, 
  animate = true,
  delay = 0 
}) {  const baseClasses = `
    relative overflow-hidden bg-white/5 backdrop-blur-sm
    border border-white/10 shadow-lg transition-all duration-normal ease-soft
    hover:border-accent/20 hover:shadow-glow
  `;

  if (!animate) {
    return (
      <div 
        className={`${baseClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (    <motion.div
      variants={{
        rest: { opacity: 0, y: 20 },
        hover: cardHover.hover,
        visible: { opacity: 1, y: 0 }
      }}
      initial="rest"
      animate="visible"
      whileHover="hover"
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      transition={{
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
        delay
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-2/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        {children}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
