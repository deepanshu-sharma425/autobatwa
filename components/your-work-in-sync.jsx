import { motion } from "framer-motion"

const YourWorkInSync = ({ width = 400, height = 250, className = "", theme = "dark" }) => {
  return (
    <motion.div
      className={className}
      style={{
        width,
        height,
        background: theme === "dark" ? "#1f2937" : "#f9fafb",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
      }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Sync animation */}
      <motion.div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: theme === "dark" ? "#374151" : "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            animate={{
              scale: [1, 1.1, 1],
              backgroundColor: theme === "dark" 
                ? ["#374151", "#10b981", "#374151"]
                : ["#e5e7eb", "#10b981", "#e5e7eb"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: theme === "dark" ? "#9ca3af" : "#6b7280",
            }} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{
          color: theme === "dark" ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
          fontWeight: "500",
          textAlign: "center",
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Team Collaboration
      </motion.div>
    </motion.div>
  )
}

export default YourWorkInSync