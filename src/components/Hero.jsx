import { motion } from "framer-motion"
import "../styles/hero.css"
import Navbar from "./Navbar"
import HeroMeta from "./HeroMeta"

const firstName = "Ankit"
const lastName = "Ahirrao"

export default function Hero() {
  return (
    <>
    <Navbar />
    <HeroMeta />
    <section className="hero">
      {/* keep your background layer as-is */}

      <div className="hero-content">
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m
        </motion.p>

        <motion.h1
          className="hero-name"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {[firstName, " ", lastName].join("").split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: "easeOut", duration: 0.6 }
                }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          I design and build scalable, reliable systems with machine learning and modern web technologies.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects" className="btn primary">View Work</a>
          <a href="#contact" className="btn secondary">Contact</a>
        </motion.div>
      </div>
    </section>
    </>
    
  )

}
