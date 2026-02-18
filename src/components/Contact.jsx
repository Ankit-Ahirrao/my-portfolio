import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-content">
          
          {/* LEFT SIDE: Big Typography & Direct Info */}
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            
            <h2 className="contact-title">
              Let’s build something <br />
              <span className="italic-serif">meaningful.</span>
            </h2>

            <p className="contact-desc">
              Have a project in mind or just want to talk shop? 
              I’m currently open to new opportunities and collaborations.
            </p>

            {/* The "Hero" Email Link */}
            <div className="email-wrapper">
              <a href="mailto:ahirraoankit5@gmail.com" className="big-email">
                ahirraoankit5@gmail.com
              </a>
            </div>

            {/* Clean Social Links */}
            <div className="social-row">
              <a 
                href="https://www.linkedin.com/in/ankit-ahirrao/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
              >
                LinkedIn ↗
              </a>
              <a 
                href="https://github.com/Ankit-Ahirrao" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
              >
                GitHub ↗
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
              >
                X (Twitter) ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Clean, Architectural Form */}
          <motion.div 
            className="form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="contact-form"
              action="mailto:ahirraoankit5@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}