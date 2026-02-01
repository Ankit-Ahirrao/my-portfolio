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
        {/* subtle animated glow */}
        <motion.div
          className="hero-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        <div className="hero-content">
          {/* Intro */}
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hi, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero-name serif-heading"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06 }
              }
            }}
          >
            {[firstName, " ", lastName].join("").split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            I design and build scalable, reliable systems with
            clean architecture and modern web technologies.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="#projects" className="btn primary">View Work</a>
            <a href="#contact" className="btn secondary">Contact</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
