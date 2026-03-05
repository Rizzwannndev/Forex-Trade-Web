import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { features } from "../assets/data"

const FeaturesSection = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Auto Play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => {
        if (isPaused) return prev
        return (prev + 1) % features.length
      })
    }, 3500)

    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  const handleHover = (index) => {
    setIsPaused(true)
    setActiveIndex(index)
  }

  const handleLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="container mx-auto px-4 py-24">

      {/* Title */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left">
          Advanced Trading
          <br />
          <span className="font-medium clash-display grad1">
            Features & Tools
          </span>
        </h2>

        <p className="text-lg text-zinc-300/80 text-left">
          Experience professional-grade trading tools and features designed
          for both novice and experienced crypto traders.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Left Tabs */}
        <div className="md:col-span-5 space-y-3">

          {features.map((feature, index) => (

            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              onClick={() => setActiveIndex(index)}
              className={`flex gap-4 cursor-pointer hover:bg-indigo-500/10 transition-all p-3 duration-300 border rounded-xl ${
                activeIndex === index
                  ? "border-indigo-400/40 bg-indigo-500/10"
                  : "border-transparent"
              }`}
            >

              {/* Icon */}
              <div>{feature.icon}</div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base clash-display text-indigo-200">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-300/80">
                  {feature.description}
                </p>
              </div>

            </div>

          ))}
        </div>

        {/* Right Image */}
        <div className="md:col-span-7 min-h-[320px] flex items-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-xl overflow-hidden w-full relative"
            >

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-transparent" />

              {/* Image */}
              <img
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                className="w-full h-full object-contain relative z-10"
              />

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}

export default FeaturesSection