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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Plan your schedules",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Data to insights in minutes",
      description: "Transform raw data into actionable insights\nwith powerful analytics tools.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Collaborate seamlessly",
      description: "Work together in real-time with your team\nand share insights instantly.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <motion.div 
      className="w-full border-b border-gray-800 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-gray-800 flex justify-center items-center gap-6">
        <motion.div 
          className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(0,0,0,0.3)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-gray-300 outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Platform Features"
          />
          <motion.div 
            className="self-stretch text-center flex justify-center flex-col text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight"
            variants={fadeInUp}
          >
            Streamline your business operations
          </motion.div>
          <motion.div 
            className="self-stretch text-center text-gray-400 text-base font-normal leading-7 font-sans"
            variants={fadeInUp}
          >
            Manage schedules, analyze data, and collaborate with your team
            <br />
            all in one powerful platform.
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <motion.div 
          className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left Column - Feature Cards */}
          <motion.div 
            className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1"
            variants={fadeInUp}
          >
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <motion.div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gray-900 shadow-[0px_0px_0px_0.75px_rgba(255,255,255,0.1)_inset]"
                      : "border border-gray-700"
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  variants={fadeInUp}
                >
                  <div
                    className={`w-full h-0.5 bg-gray-700 overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <motion.div
                      key={animationKey}
                      className="h-0.5 bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-white text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-gray-400 text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-[00]"
            variants={fadeInUp}
          >
            <motion.div 
              className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-gray-900 shadow-[0px_0px_0px_0.9056603908538818px_rgba(255,255,255,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  className={`w-full h-full ${
                    activeCard === 0
                      ? "bg-gradient-to-br from-blue-900 to-blue-800"
                      : activeCard === 1
                        ? "bg-gradient-to-br from-purple-900 to-purple-800"
                        : "bg-gradient-to-br from-green-900 to-green-800"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}