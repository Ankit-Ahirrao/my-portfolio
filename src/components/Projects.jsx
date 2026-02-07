import "../styles/projects.css"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <p className="projects-label">PROJECTS/WORK</p>

        <h2 className="projects-title">
           <span>Projects</span>
        </h2>

        <div className="projects-list">
          {/* Cryptokia */}
          <div className="project-card">
            <h3>Cryptokia</h3>
            <p className="project-desc">
              Real-time cryptocurrency analytics platform featuring live price
              tracking, market trends, and historical insights.
            </p>

            <div className="project-tags">
              <span>Ruby on Rails</span>
              <span>MongoDB</span>
              <span>APIs</span>
            </div>
          </div>

          {/* Cartedo */}
          <div className="project-card">
            <h3>Cartedo</h3>
            <p className="project-desc">
              Online education platform built to deliver structured learning
              experiences with scalable backend architecture.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          {/* Etoh Suite */}
          <div className="project-card">
            <h3>Etoh Suite</h3>
            <p className="project-desc">
              Enterprise-focused internal tools suite designed to streamline
              workflows and improve operational efficiency.
            </p>

            <div className="project-tags">
              <span>Backend</span>
              <span>REST APIs</span>
              <span>AWS</span>
            </div>
          </div>

          {/* Face Recognition */}
          <div className="project-card">
            <h3>Face Recognition System</h3>
            <p className="project-desc">
              AI-powered face recognition system built using deep learning
              techniques for real-time identity detection.
            </p>

            <div className="project-tags">
              <span>TensorFlow</span>
              <span>Computer Vision</span>
              <span>Python</span>
            </div>
          </div>

          {/* ML Project */}
          <div className="project-card">
            <h3>Machine Learning Analytics</h3>
            <p className="project-desc">
              Predictive analytics system leveraging supervised learning models
              to extract actionable insights from data.
            </p>

            <div className="project-tags">
              <span>Machine Learning</span>
              <span>Scikit-learn</span>
              <span>Python</span>
            </div>
          </div>

          {/* NLP Project */}
          <div className="project-card">
            <h3>NLP Text Processing</h3>
            <p className="project-desc">
              Natural language processing pipeline for text classification,
              sentiment analysis, and data extraction.
            </p>

            <div className="project-tags">
              <span>NLP</span>
              <span>Transformers</span>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
