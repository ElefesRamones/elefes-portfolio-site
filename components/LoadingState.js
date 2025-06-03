import { motion } from 'framer-motion'

export default function LoadingState() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
