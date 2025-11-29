import { motion } from "framer-motion"

const FeatureCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>Feature Cards Component</div>
    </motion.div>
  )
}

export default FeatureCards