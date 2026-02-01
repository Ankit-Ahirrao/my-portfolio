import "../styles/about.css"
import profileImg from "../assets/profile.jpg"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-label">ABOUT</span>

          <h2 className="about-title serif-heading">
            Designing & building
            <br />
            reliable, scalable systems
          </h2>

          <p className="about-text">
            I’m a Full Stack Developer with 4+ years of professional experience
            building web applications using modern technologies.
            I focus on backend engineering, clean APIs, and intuitive
            frontend experiences.
          </p>

          <p className="about-text">
            I’ve worked extensively with Ruby on Rails, REST APIs,
            databases, and modern JavaScript frameworks.
            I enjoy solving real-world problems and building
            products that scale gracefully.
          </p>

          <p className="about-tech">
            <strong>Core stack:</strong>{" "}
            JavaScript · React · Ruby on Rails · Node.js · PostgreSQL · AWS
          </p>

          {/* LINKS */}
          <div className="about-links">
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
            <a
              href="https://www.instagram.com/ankiitahirrao/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="mailto:ahirraoankit5@gmail.com">
              Email
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={profileImg} alt="Ankit Ahirrao" />
        </div>

      </div>
    </section>
  )
}
