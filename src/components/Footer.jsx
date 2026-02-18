import "../styles/footer.css"

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="footer section">
      <div className="container">
        
        <div className="footer-top">
          
          {/* COLUMN 1: Brand & Status */}
          <div className="footer-brand-col">
            <div className="brand-logo">AA.</div>
            <p className="brand-mission">
              Engineering clarity into complex systems.
              <br />
              Focused on performance, scalability, and design.
            </p>
            
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span>Open to new opportunities</span>
            </div>
          </div>

          {/* COLUMN 2: Navigation */}
          <div className="footer-nav-col">
            <span className="col-header">Menu</span>
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Work</a>
            <a href="#skills" className="footer-link">Tech Stack</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* COLUMN 3: Socials */}
          <div className="footer-nav-col">
            <span className="col-header">Socials</span>
            <a 
              href="https://in.linkedin.com/in/ankit-ahirrao" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              LinkedIn ↗
            </a>
            <a 
              href="https://github.com/Ankit-Ahirrao" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              GitHub ↗
            </a>
            <a href="mailto:ahirraoankit5@gmail.com" className="footer-link">
              Email ↗
            </a>
          </div>

        </div>

        {/* BOTTOM: Minimal & Clean */}
        <div className="footer-bottom">
          <span className="copyright">
            © {new Date().getFullYear()} Ankit Ahirrao. All rights reserved.
          </span>
          
          <button onClick={scrollToTop} className="back-to-top">
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  )
}