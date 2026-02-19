import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/story.css";

import img1 from "../assets/story-1.jpg";
import img2 from "../assets/story-2.jpg";
import img3 from "../assets/story-3.jpg";

const images = [img1, img2, img3];

export default function Story() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000); // Slightly slower for better readability

    return () => clearInterval(interval);
  }, []);

  // Helper to determine position relative to active index
  const getPosition = (index) => {
    if (index === active) return "center";
    const prevIndex = (active - 1 + images.length) % images.length;
    if (index === prevIndex) return "left";
    return "right";
  };

  return (
    <section className="story">
      <div className="story-container">

        {/* LEFT CONTENT - Editorial Typography */}
        <div className="story-content">
          <span className="section-label">Philosophy</span>

          <h2 className="story-title">
            Built for <span className="italic-highlight">clarity</span>, <br />
            engineered for scale.
          </h2>

          <div className="story-body">
            <p>
              I believe that great software is born at the intersection of 
              <strong> rigorous engineering</strong> and <strong>intuitive design</strong>.
            </p>
            <p>
              My approach is simple: write code that is easy to read, 
              systems that are easy to maintain, and products that 
              genuinely solve the user's problem without unnecessary complexity.
            </p>
          </div>

          <div className="story-stats">
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES - Stacked Deck Effect */}
        <div className="story-visual">
          <div className="card-stack">
            <AnimatePresence mode="popLayout">
              {images.map((img, i) => {
                const position = getPosition(i);
                // Only render the active, immediate left, and immediate right 
                // to prevent Z-index fighting, though with 3 images it's fine.
                return (
                  <motion.div
                    key={i}
                    className="card-wrapper"
                    initial={false}
                    animate={position}
                    variants={cardVariants}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <img src={img} alt="Process visual" />
                    {/* Optional: Add a glass sheen overlay */}
                    <div className="card-sheen" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

// The "Stacked Deck" Animation
const cardVariants = {
  center: {
    zIndex: 3,
    scale: 1,
    x: 0,
    rotate: 0,
    opacity: 1,
    filter: "grayscale(0%) blur(0px)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  left: {
    zIndex: 2,
    scale: 0.85,
    x: -40, // Tighter overlap
    rotate: -6, // Tilted left
    opacity: 0.6,
    filter: "grayscale(100%) blur(2px)", // Blur creates depth
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
  },
  right: {
    zIndex: 1,
    scale: 0.85,
    x: 40, // Tighter overlap
    rotate: 6, // Tilted right
    opacity: 0.6,
    filter: "grayscale(100%) blur(2px)",
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
  }
};