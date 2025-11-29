import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function HeroSection() {
  return (
    <motion.section 
      className="relative pt-[216px] pb-16"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <motion.div 
            className="max-w-[937px] flex flex-col items-center gap-3"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.h1 
                className="max-w-[748px] text-center text-white text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif"
                variants={fadeInUp}
              >
                Effortless custom contract billing by Brillance
              </motion.h1>
              <motion.p 
                className="max-w-[506px] text-center text-gray-300 text-lg font-medium leading-7"
                variants={fadeInUp}
              >
                Streamline your billing process with seamless automation for every custom contract, tailored by
                Brillance.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center"
            variants={fadeInUp}
          >
            <motion.button 
              className="h-10 px-12 bg-white text-black hover:bg-gray-100 rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-colors"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Start for free
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}