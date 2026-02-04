import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP CTA */}
      <section className="footer-cta">
  <div className="footer-cta-inner">

    <div className="footer-cta-text">
      <h2>
        Let’s build <br />
        <span>something that lasts.</span>
      </h2>

      <p>
        Thoughtful engineering, clean architecture, and systems
        designed to grow with your product.
      </p>
    </div>

    <div className="footer-visual">
      <div className="soft-orb" />
    </div>

  </div>
</section>


      {/* MAIN FOOTER */}
      <section id= "footer" className="footer-main">
        <div className="footer-main-inner">

          {/* BRAND */}
          <div className="footer-brand">
            <h3>ANKIT</h3>
            <p>
              Building scalable systems and thoughtful digital experiences.
              Turning ideas into reliable products with clean architecture
              and strong fundamentals.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-columns">

            <div>
              <h4>General</h4>
              <a href="#home">Home</a>
              <a href="#blogs">Blogs</a>
              <a href="#projects">Projects</a>
            </div>

            <div>
              <h4>About</h4>
              <a href="#about">About Me</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
            </div>

            <div>
              <h4>Connect</h4>
              <a href="mailto:ahirraoankit5@gmail.com">Email</a>
              <a
                href="https://in.linkedin.com/in/ankit-ahirrao"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ankit-Ahirrao"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div>
              <h4>Legal</h4>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Ankit Ahirrao. All rights reserved.
        </div>
      </section>

    </footer>
  )
}
