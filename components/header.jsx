import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header 
      className="w-full border-b border-gray-800 bg-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <motion.div 
              className="text-white font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Brillance
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {["Products", "Pricing", "Docs"].map((item) => (
                <motion.button 
                  key={item}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.button 
            className="text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Log in
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}