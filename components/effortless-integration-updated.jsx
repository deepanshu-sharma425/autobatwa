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
        position: "relative",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Integration nodes */}
      <motion.div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
        }}
      >
        {/* Center hub */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }} />
        </motion.div>

        {/* Surrounding nodes */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60) * (Math.PI / 180)
          const radius = 80
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#374151",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#9ca3af",
              }} />
            </motion.div>
          )
        })}

        {/* Connection lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60) * (Math.PI / 180)
          const length = 50

          return (
            <motion.div
              key={`line-${i}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${length}px`,
                height: "2px",
                background: "#4b5563",
                transformOrigin: "left center",
                transform: `translate(0, -50%) rotate(${i * 60}deg)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.1,
              }}
            />
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default EffortlessIntegration