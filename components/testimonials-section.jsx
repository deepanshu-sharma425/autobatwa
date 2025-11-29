"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Badge component for consistency
function Badge({ icon, text }) {
  return (
    <motion.div 
      className="px-[14px] py-[6px] bg-gray-900 shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-gray-700 shadow-xs"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-gray-300 text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </motion.div>
  )
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!",
      name: "Jamie Marshall",
      company: "Co-founder, Exponent",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png",
    },
    {
      quote:
        "Brillance has revolutionized how we handle custom contracts. The automation saves us hours every week and eliminates errors completely.",
      name: "Sarah Chen",
      company: "VP Operations, TechFlow",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2010_54_18%20AM-nbiecp92QNdTudmCrHr97uekrIPzCP.png",
    },
    {
      quote:
        "The billing automation is a game-changer. What used to take our team days now happens automatically with perfect accuracy.",
      name: "Marcus Rodriguez",
      company: "Finance Director, InnovateCorp",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_01_05%20AM-TBOe92trRxKn4G5So1m9D2h7LRH4PG.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNavigationClick = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <motion.div 
      className="w-full border-b border-gray-800 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Testimonial Content */}
      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-black border border-b border-l-0 border-r-0 border-t-0">
        <motion.div 
          className="flex-1 py-16 md:py-17 flex flex-col md:flex-row justify-center items-end gap-6"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTestimonial}
                className="w-48 h-50 md:w-48 md:h-50 rounded-lg object-cover"
                src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                alt={testimonials[activeTestimonial].name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              />
            </AnimatePresence>
            
            <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(255,255,255,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6 shadow-none pb-0 pt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="self-stretch justify-start flex flex-col text-white text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] font-sans h-[200px] md:h-[210px] overflow-hidden line-clamp-5 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  "{testimonials[activeTestimonial].quote}"
                </motion.div>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTestimonial}-info`}
                  className="self-stretch flex flex-col justify-start items-start gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="self-stretch justify-center flex flex-col text-white text-lg font-medium leading-[26px] font-sans">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="self-stretch justify-center flex flex-col text-gray-400 text-lg font-medium leading-[26px] font-sans">
                    {testimonials[activeTestimonial].company}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="pr-6 justify-start items-start gap-[14px] flex">
            <motion.button
              onClick={() => handleNavigationClick((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.3)] overflow-hidden rounded-full border border-gray-700 justify-center items-center gap-2 flex hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
            <motion.button
              onClick={() => handleNavigationClick((activeTestimonial + 1) % testimonials.length)}
              className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.3)] overflow-hidden rounded-full border border-gray-700 justify-center items-center gap-2 flex hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}