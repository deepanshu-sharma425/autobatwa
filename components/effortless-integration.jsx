import { motion } from "framer-motion"

const EffortlessIntegration = ({ width = 400, height = 250, className = "" }) => {
  return (
    <motion.div
      className={className}
      style={{
        width,
        height,
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div style={{
        color: "#9ca3af",
        fontSize: "14px",
        fontWeight: "500",
      }}>
        Integration Component
      </div>
    </motion.div>
  )
}

export default EffortlessIntegration