"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import PricingSection from "../components/pricing-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"

// Animation variants
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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

// Reusable Badge Component
function Badge({ icon, text }) {
  return (
    <motion.div 
      className="px-[14px] py-[6px] bg-gray-900 shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-gray-700 shadow-xs"
      {...scaleOnHover}
    >
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-gray-300 text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </motion.div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div className="w-full min-h-screen relative bg-black overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          
          {/* Vertical lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-gray-800 shadow-[1px_0px_0px_rgba(255,255,255,0.1)] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-gray-800 shadow-[1px_0px_0px_rgba(255,255,255,0.1)] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-gray-800 flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            
            {/* Navigation */}
            <motion.div 
              className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-gray-800 shadow-[0px_1px_0px_rgba(255,255,255,0.1)]"></div>

              <motion.div 
                className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-gray-900 backdrop-blur-sm shadow-[0px_0px_0px_2px_rgba(255,255,255,0.1)] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                      Brillance
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    {["Products", "Pricing", "Docs"].map((item, index) => (
                      <motion.div 
                        key={item}
                        className="flex justify-start items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="flex flex-col justify-center text-gray-400 hover:text-white text-xs md:text-[13px] font-medium leading-[14px] font-sans cursor-pointer transition-colors">
                          {item}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                  <motion.div 
                    className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-gray-800 hover:bg-gray-700 shadow-[0px_1px_2px_rgba(0,0,0,0.3)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-colors"
                    {...scaleOnHover}
                  >
                    <div className="flex flex-col justify-center text-white text-xs md:text-[13px] font-medium leading-5 font-sans">
                      Log in
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Section */}
            <motion.div 
              className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                variants={fadeInUp}
              >
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <motion.div 
                    className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-white text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0"
                    variants={fadeInUp}
                  >
                    Effortless custom contract
                    <br />
                    billing by Brillance
                  </motion.div>
                  <motion.div 
                    className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-gray-300 sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
                    variants={fadeInUp}
                  >
                    Streamline your billing process with seamless automation
                    <br className="hidden sm:block" />
                    for every custom contract, tailored by Brillance.
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
                variants={fadeInUp}
              >
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <motion.div 
                    className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-white text-black shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-black text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Start for free
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Dashboard Preview */}
              <motion.div 
                className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0"
                variants={fadeInUp}
              >
                <motion.div 
                  className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-gray-900 shadow-[0px_0px_0px_0.9056603908538818px_rgba(255,255,255,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        <AnimatePresence mode="wait">
                          {[0, 1, 2].map((index) => (
                            <motion.div
                              key={index}
                              className={`absolute inset-0 ${activeCard === index ? "opacity-100" : "opacity-0"}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: activeCard === index ? 1 : 0, scale: activeCard === index ? 1 : 0.8 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                              <img
                                src={index === 0 ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsadsadsa.jpg-xTHS4hGwCWp2H5bTj8np6DXZUyrxX7.jpeg" : 
                                     index === 1 ? "/analytics-dashboard-with-charts-graphs-and-data-vi.jpg" : 
                                     "/data-visualization-dashboard-with-interactive-char.jpg"}
                                alt={`Dashboard ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Feature Cards */}
              <div className="self-stretch border-t border-gray-800 border-b border-gray-800 flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <FeatureCard
                    title="Plan your schedules"
                    description="Streamline customer subscriptions and billing with automated scheduling tools."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="Analytics & insights"
                    description="Transform your business data into actionable insights with real-time analytics."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Collaborate seamlessly"
                    description="Keep your team aligned with shared dashboards and collaborative workflows."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </motion.div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof Section */}
              <motion.div 
                className="w-full border-b border-gray-800 flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-gray-800 flex justify-center items-center gap-6">
                  <motion.div 
                    className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(0,0,0,0.3)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none"
                    variants={fadeInUp}
                  >
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="4" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="8" stroke="currentColor" strokeWidth="1" fill="none" />
                          <rect x="2" y="4" width="1" height="1" fill="currentColor" />
                          <rect x="3.5" y="4" width="1" height="1" fill="currentColor" />
                          <rect x="2" y="5.5" width="1" height="1" fill="currentColor" />
                          <rect x="3.5" y="5.5" width="1" height="1" fill="currentColor" />
                          <rect x="8" y="2" width="1" height="1" fill="currentColor" />
                          <rect x="9.5" y="2" width="1" height="1" fill="currentColor" />
                          <rect x="8" y="3.5" width="1" height="1" fill="currentColor" />
                          <rect x="9.5" y="3.5" width="1" height="1" fill="currentColor" />
                          <rect x="8" y="5" width="1" height="1" fill="currentColor" />
                          <rect x="9.5" y="5" width="1" height="1" fill="currentColor" />
                        </svg>
                      }
                      text="Social Proof"
                    />
                    <motion.div 
                      className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight"
                      variants={fadeInUp}
                    >
                      Confidence backed by results
                    </motion.div>
                    <motion.div 
                      className="self-stretch text-center text-gray-400 text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans"
                      variants={fadeInUp}
                    >
                      Our customers achieve more each day
                      <br className="hidden sm:block" />
                      because their tools are simple, powerful, and clear.
                    </motion.div>
                  </motion.div>
                </div>

                {/* Logo Grid */}
                <div className="self-stretch border-gray-800 flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-gray-800"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {Array.from({ length: 8 }).map((_, index) => {
                      const isMobileFirstColumn = index % 2 === 0
                      const isDesktopFirstColumn = index % 4 === 0
                      const isDesktopLastColumn = index % 4 === 3
                      const isDesktopTopRow = index < 4
                      const isDesktopBottomRow = index >= 4

                      return (
                        <motion.div
                          key={index}
                          className={`
                            h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3
                            border-b border-gray-700
                            ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 6 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}
                            border-gray-700
                          `}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.1)_inset] overflow-hidden rounded-full">
                            <img src="/horizon-icon.svg" alt="Horizon" className="w-full h-full object-contain" />
                          </div>
                          <div className="text-center flex justify-center flex-col text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
                            Acute
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bento Grid Section */}
              <motion.div 
                className="w-full border-b border-gray-800 flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-gray-800 flex justify-center items-center gap-6">
                  <motion.div 
                    className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(0,0,0,0.3)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none"
                    variants={fadeInUp}
                  >
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="Bento grid"
                    />
                    <motion.div 
                      className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight"
                      variants={fadeInUp}
                    >
                      Built for absolute clarity and focused work
                    </motion.div>
                    <motion.div 
                      className="self-stretch text-center text-gray-400 text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans"
                      variants={fadeInUp}
                    >
                      Stay focused with tools that organize, connect
                      <br />
                      and turn information into confident decisions.
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-gray-800"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {/* Bento Grid Items */}
                    <motion.div 
                      className="border-b border-r-0 md:border-r border-gray-800 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Smart. Simple. Brilliant.
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed font-sans">
                          Your data is beautifully organized so you see everything clearly without the clutter.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="dark"
                          className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="border-b border-gray-800 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white font-semibold leading-tight font-sans text-lg sm:text-xl">
                          Your work, in sync
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed font-sans">
                          Every update flows instantly across your team and keeps collaboration effortless and fast.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="dark"
                          className="scale-60 sm:scale-75 md:scale-90"
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="border-r-0 md:border-r border-gray-800 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Effortless integration
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed font-sans">
                          All your favorite tools connect in one place and work together seamlessly by design.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Numbers that speak
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed font-sans">
                          Track growth with precision and turn raw data into confident decisions you can trust.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NumbersThatSpeak
                            width="100%"
                            height="100%"
                            theme="dark"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-gray-800 outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Other Sections */}
              <DocumentationSection />
              <TestimonialsSection />
              <PricingSection />
              <FAQSection />
              <CTASection />
              <FooterSection />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component with animations
function FeatureCard({ title, description, isActive, progress, onClick }) {
  return (
    <motion.div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-gray-900 shadow-[0px_0px_0px_0.75px_rgba(255,255,255,0.1)_inset]"
          : "border-l-0 border-r-0 md:border border-gray-700"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      variants={fadeInUp}
    >
      {isActive && (
        <motion.div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gray-700"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
        >
          <motion.div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}

      <motion.div 
        className="self-stretch flex justify-center flex-col text-white text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {title}
      </motion.div>
      <motion.div 
        className="self-stretch text-gray-400 text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {description}
      </motion.div>
    </motion.div>
  )
}