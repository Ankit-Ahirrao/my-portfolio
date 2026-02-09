import "../styles/contact.css"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Header */}
        <p className="contact-label">— CONNECT</p>
        <h2 className="contact-title">
          Let’s <span>build</span> something meaningful
        </h2>
        <p className="contact-subtitle">
          Have a question, idea, or opportunity? I’d love to hear from you.
        </p>

        <div className="contact-grid">

          {/* LEFT: CONTACT OPTIONS */}
          <div className="contact-cards">

            <a
              href="mailto:ahirraoankit5@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>ahirraoankit5@gmail.com</p>
                <span>Send a message</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-ahirrao/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/ankit-ahirrao</p>
                <span>Connect</span>
              </div>
            </a>

            <a
              href="https://github.com/Ankit-Ahirrao"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">⌘</div>
              <div>
                <h4>GitHub</h4>
                <p>@Ankit-Ahirrao</p>
                <span>View code</span>
              </div>
            </a>

          </div>

          {/* RIGHT: FORM */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            action="mailto:ahirraoankit5@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <h3>Send me a message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your name (optional)"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="What would you like to discuss?"
              required
            />

            <button type="submit">
              Send Message →
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
