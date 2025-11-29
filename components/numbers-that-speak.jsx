import { motion } from "framer-motion"

const NumbersThatSpeak = ({ width = 400, height = 300, className = "", theme = "dark" }) => {
  return (
    <motion.div
      className={className}
      style={{
        width,
        height,
        background: theme === "dark" ? "#1f2937" : "#f3f4f6",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        style={{
          width: "80%",
          height: "60%",
          background: theme === "dark" ? "#374151" : "#e5e7eb",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div style={{ 
          color: theme === "dark" ? "#9ca3af" : "#6b7280", 
          fontSize: "14px", 
          fontWeight: "500" 
        }}>
          Analytics Dashboard
        </div>
      </motion.div>
      
      <motion.div
        style={{
          display: "flex",
          gap: "8px",
          width: "80%",
          justifyContent: "space-between",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{
              flex: 1,
              height: "20px",
              background: `hsl(${i * 60}, 70%, 50%)`,
              borderRadius: "2px",
            }}
            initial={{ height: 0 }}
            animate={{ height: "20px" }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default NumbersThatSpeak