import { motion } from "framer-motion";
import "../styles/hero.css";
import Navbar from "./Navbar";
import HeroMeta from "./HeroMeta";

export default function Hero() {
  const name = "Ankit Ahirrao";

  // Animation variants for the container (staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for each individual letter
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      <HeroMeta />

      <section id="home" className="hero section">
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

          {/* Name with Letter Animation */}
          <motion.h1
            className="hero-name serif-heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Building scalable backend systems and modern web applications with
            clean architecture, performance-first thinking, and production-grade
            engineering practices.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
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
  );
}