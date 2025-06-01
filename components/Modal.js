// components/Modal.js
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ isOpen, onClose, content }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-4 max-w-3xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // prevent modal from closing on inner click
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
