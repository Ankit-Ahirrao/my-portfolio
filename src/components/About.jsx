import "../styles/about.css";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="about-grid">

          {/* LEFT SIDE */}
          <div className="about-content">
            <span className="section-label-std">About Me</span>

            <h2 className="section-title-std">
              Designing & building{" "}
              <span className="title-serif">reliable systems.</span>
            </h2>

            <div className="about-body">
              <p>
                I’m a Full Stack Engineer with 4+ years of experience
                engineering backend-heavy web applications. My work focuses
                on <strong>clean architecture</strong>, scalable APIs,
                and systems that maintain performance at scale.
              </p>

              <p>
                I have worked extensively with Ruby on Rails, RESTful services,
                and modern JavaScript frameworks. I enjoy solving real-world
                problems where reliability, clarity, and long-term
                maintainability are the priority.
              </p>
            </div>

            <div className="about-stack">
              <span className="stack-label">Core Technologies</span>
              <div className="stack-tags">
                <span>Ruby on Rails</span>
                <span>React</span>
                <span>Docker</span>
                <span>PostgreSQL</span>
                <span>AWS</span>
              </div>
            </div>

            <div className="about-links">
              <a href="https://github.com/Ankit-Ahirrao" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://in.linkedin.com/in/ankit-ahirrao" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:ahirraoankit5@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-image">
            <img src={profileImg} alt="Ankit Ahirrao" />
          </div>

        </div>
      </div>
    </section>
  );
}
