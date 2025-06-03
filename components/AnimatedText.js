import { motion } from 'framer-motion';
import { textReveal } from '../utils/animations';

export default function AnimatedText({ 
  children, 
  className = '', 
  as: Component = 'span',
  delay = 0,
  once = false 
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
      className="overflow-hidden inline-block"
    >
      <Component className={className}>
        <motion.span
          variants={{
            ...textReveal,
            animate: {
              ...textReveal.animate,
              transition: {
                ...textReveal.transition,
                delay
              }
            }
          }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
}
