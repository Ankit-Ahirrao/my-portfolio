import "../styles/hero.css"

function Hero() {
  return (
    <section className="hero">
      <h1>
        Hi, I’m <span>Ankit Ahirrao</span>
      </h1>
      <p>
        I build secure, scalable and intelligent systems using
        Machine Learning, NLP and Web Technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="primary">View Projects</a>
        <a href="/resume.pdf" className="secondary">Resume</a>
      </div>
    </section>
  )
}

export default Hero
