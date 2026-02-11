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

     <section id="home" className="hero">
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
      FULL STACK ENGINEER
    </motion.p>

    {/* Name */}
   
  <motion.h1
  className="hero-name serif-heading"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
  Ankit&nbsp;Ahirrao
</motion.h1>





    {/* Subtitle */}
    <motion.p
      className="hero-subtitle"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      Building scalable backend systems and modern web applications
      with clean architecture, performance-first thinking,
      and production-grade engineering practices.
    </motion.p>

    {/* Actions */}
    <motion.div
      className="hero-actions"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <a href="#projects" className="btn primary">
        View Projects
      </a>

      <a href="#contact" className="btn secondary">
        Let’s Connect
      </a>
    </motion.div>

  </div>
</section>

    </>
  )
}
