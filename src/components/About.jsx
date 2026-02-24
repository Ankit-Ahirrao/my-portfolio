import { motion } from "framer-motion";
import "../styles/about.css";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="section-label">Philosophy</span>

          <h2 className="about-title">
            Built for{" "}
            <span className="italic-serif">clarity</span>, <br />
            engineered for scale.
          </h2>

          <div className="about-body">
            <p>
              I believe that great software is born at the intersection of
              <strong> rigorous engineering</strong> and
              <strong> intuitive design</strong>.
            </p>

            <p>
              My approach is simple: write code that is easy to read,
              systems that are easy to maintain, and products that
              genuinely solve the user's problem without unnecessary complexity.
            </p>
          </div>

          <div className="about-links">
            <a
              href="https://github.com/Ankit-Ahirrao"
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              GitHub ↗
            </a>

            <a
              href="https://in.linkedin.com/in/ankit-ahirrao"
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:ahirraoankit5@gmail.com"
              className="link-item"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper">
          <motion.img
            src={profileImg}
            alt="Ankit Ahirrao"
            className="profile-img"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
          />
        </div>

      </div>
    </section>
  );
}