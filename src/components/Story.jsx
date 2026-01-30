import "../styles/story.css"
import img1 from "../assets/story-1.jpg"
import img2 from "../assets/story-2.jpg"

export default function Story() {
  return (
    <section className="story">
      <div className="story-container">
        {/* LEFT CONTENT */}
        <div className="story-content">
          <span className="story-label">A QUICK GLANCE</span>

          <h2 className="story-title">
            Building the bridge between <br />
            ideas and <span>execution</span>
          </h2>

          <p className="story-text">
            I’m Ankit Ahirrao, a full-stack engineer focused on building scalable,
            reliable systems with clean architecture and strong fundamentals.
            I enjoy turning complex technical problems into simple, usable
            solutions.
          </p>

          <p className="story-text">
            With experience across frontend, backend, and microservices,
            I’ve worked on real-world products where performance, maintainability,
            and clarity matter more than buzzwords.
          </p>

          <p className="story-text">
            Beyond code, I value design, system thinking, and long-term impact —
            building things that last.
          </p>

          <a href="#projects" className="story-cta">
            Dive deeper →
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="story-images">
          <img src={img1} alt="Ankit working" />
          <img src={img2} alt="Ankit travel" />
        </div>
      </div>
    </section>
  )
}
