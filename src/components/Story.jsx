import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "../styles/story.css"

import img1 from "../assets/story-1.jpg"
import img2 from "../assets/story-2.jpg"
import img3 from "../assets/story-3.jpg"

const images = [img1, img2, img3]

export default function Story() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const getPosition = (index) => {
    const diff = (index - active + images.length) % images.length

    if (diff === 0) return "center"
    if (diff === 1) return "right"
    return "left"
  }

  return (
    <section className="story">
      <div className="story-container">

        {/* LEFT CONTENT */}
        <div className="story-content">
          <span className="story-label">A QUICK GLANCE</span>

          <h2 className="story-title">
            Building the bridge <br />
            between ideas and <span>execution</span>
          </h2>

          <p className="story-text">
            I’m Ankit Ahirrao, a full-stack engineer focused on building scalable,
            reliable systems with clean architecture and strong fundamentals.
          </p>

          <p className="story-text">
            With experience across frontend, backend, and microservices,
            I’ve worked on real-world products where performance,
            maintainability, and clarity matter.
          </p>

          <p className="story-text">
            Beyond code, I value design, system thinking, and long-term impact —
            building things that last.
          </p>

          <a href="#projects" className="story-cta">
            Dive deeper →
          </a>
        </div>

        {/* RIGHT IMAGES (CAROUSEL STACK) */}
        <div className="story-images">
          {images.map((img, i) => {
            const position = getPosition(i)

            return (
              <motion.img
                key={img}
                src={img}
                alt="Story visual"
                className={`story-image ${position}`}
                animate={position}
                variants={imageVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

const imageVariants = {
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3
  },
  left: {
    x: -120,
    scale: 0.92,
    opacity: 0.45,
    zIndex: 1
  },
  right: {
    x: 120,
    scale: 0.92,
    opacity: 0.45,
    zIndex: 2
  }
}
