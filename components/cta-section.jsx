"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function CTASection() {
  return (
    <motion.div 
      className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-gray-800 flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <motion.div 
          className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <motion.div 
              className="self-stretch text-center flex justify-center flex-col text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight"
              variants={fadeInUp}
            >
              Ready to transform your business?
            </motion.div>
            <motion.div 
              className="self-stretch text-center text-gray-400 text-base leading-7 font-sans font-medium"
              variants={fadeInUp}
            >
              Join thousands of businesses streamlining their operations,
              <br />
              managing schedules, and growing with data-driven insights.
            </motion.div>
          </div>
          <motion.div 
            className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12"
            variants={fadeInUp}
          >
            <div className="flex justify-start items-center gap-4">
              <motion.div 
                className="h-10 px-12 py-[6px] relative bg-white text-black shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="flex flex-col justify-center text-black text-[13px] font-medium leading-5 font-sans">
                  Start for free
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}