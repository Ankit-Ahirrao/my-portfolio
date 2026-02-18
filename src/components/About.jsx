import "../styles/about.css";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="section-label">About Me</span>

          <h2 className="about-title">
            Designing & building <br />
            <span className="italic-serif">reliable systems.</span>
          </h2>

          <div className="about-body">
            <p>
              I’m a Full Stack Engineer with 4+ years of experience engineering
              backend-heavy web applications. My work focuses on **clean architecture**, 
              scalable APIs, and systems that maintain performance at scale.
            </p>
            <p>
              I have worked extensively with Ruby on Rails, RESTful services, and modern 
              JavaScript frameworks. I enjoy solving real-world problems where 
              reliability, clarity, and long-term maintainability are the priority.
            </p>
          </div>

          {/* Core Stack Tags */}
          <div className="about-stack">
            <span className="stack-label">Core Technologies</span>
            <div className="stack-tags">
              <span>Ruby on Rails</span>
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>AWS</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="about-links">
            <a href="https://in.linkedin.com/in/ankit-ahirrao" target="_blank" rel="noreferrer" className="link-item">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Ankit-Ahirrao" target="_blank" rel="noreferrer" className="link-item">
              GitHub ↗
            </a>
            <a href="mailto:ahirraoankit5@gmail.com" className="link-item">
              Email ↗
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper">
          <img src={profileImg} alt="Ankit Ahirrao" className="profile-img" />
          <div className="img-backdrop"></div>
        </div>

      </div>
    </section>
  );
}