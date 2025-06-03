import { motion } from 'framer-motion';

export default function GradientBackground({ 
  children,
  className = '',
  animate = true,
  intensity = 'normal' // 'light', 'normal', 'strong'
}) {
  const intensityMap = {
    light: {
      blur: 'blur-2xl',
      opacity: 'opacity-30'
    },
    normal: {
      blur: 'blur-3xl',
      opacity: 'opacity-50'
    },
    strong: {
      blur: 'blur-3xl',
      opacity: 'opacity-70'
    }
  };

  const { blur, opacity } = intensityMap[intensity] || intensityMap.normal;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className={`absolute top-1/4 -left-32 w-[40rem] h-[40rem] animate-scale-soft`}
          initial={animate ? { opacity: 0, scale: 0.8 } : false}
          whileInView={animate ? { opacity: 1, scale: 1 } : false}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >          <div className={`w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-xl ${blur}`} />
        </motion.div>

        <motion.div 
          className={`absolute bottom-1/4 -right-32 w-[45rem] h-[45rem] animate-scale-soft`}
          initial={animate ? { opacity: 0, scale: 0.8 } : false}
          whileInView={animate ? { opacity: 1, scale: 1 } : false}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          style={{ animationDelay: '-4s' }}
        >
          <div className={`w-full h-full bg-gradient-to-tl from-accent-2/10 to-transparent rounded-xl ${blur}`} />
        </motion.div>

        <motion.div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] 
                     animate-scale-soft ${opacity}`}
          initial={animate ? { opacity: 0, scale: 0.8 } : false}
          whileInView={animate ? { opacity: 1, scale: 1 } : false}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
          style={{ animationDelay: '-2s' }}
        >
          <div className={`w-full h-full bg-gradient-radial from-accent-light/5 to-transparent rounded-full ${blur}`} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-1">
        {children}
      </div>
    </div>
  );
}
