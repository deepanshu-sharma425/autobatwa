import { motion } from "framer-motion"

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>Dashboard Preview Component</div>
    </motion.div>
  )
}

export default DashboardPreview