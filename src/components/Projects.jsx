import "../styles/projects.css"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="projects-label">PROJECTS / WORK</p>
        <h2 className="projects-title">
          Selected <span>Projects</span>
        </h2>

        <div className="projects-list">

          {/* Cryptokia */}
          <div className="project-card">
            <span className="project-badge web">FULL STACK</span>

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

            <div className="project-actions">
              <span className="project-action muted">Private</span>
            </div>
          </div>

          {/* Cartedo */}
          <div className="project-card">
            <span className="project-badge web">FULL STACK</span>

            <h3>Cartedo</h3>
            <p className="project-desc">
              Online education platform delivering structured learning
              experiences with a scalable backend architecture.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-actions">
              <a
                href="https://www.cartedo.com/"
                target="_blank"
                rel="noreferrer"
                className="project-action"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Etoh Suite */}
          <div className="project-card">
            <span className="project-badge backend">BACKEND</span>

            <h3>Etoh Suite</h3>
            <p className="project-desc">
              Enterprise internal tools suite designed to streamline workflows
              and improve operational efficiency.
            </p>

            <div className="project-tags">
              <span>REST APIs</span>
              <span>AWS</span>
              <span>Backend Systems</span>
            </div>

            <div className="project-actions">
              <span className="project-action muted">Enterprise</span>
            </div>
          </div>

          {/* Face Recognition */}
          <div className="project-card">
            <span className="project-badge ai">AI / ML</span>

            <h3>Face Recognition System</h3>
            <p className="project-desc">
              AI-powered face recognition system using deep learning for
              real-time identity detection and verification.
            </p>

            <div className="project-tags">
              <span>TensorFlow</span>
              <span>Computer Vision</span>
              <span>Python</span>
            </div>

            <div className="project-actions">
              <span className="project-action muted">Research</span>
            </div>
          </div>

          {/* ML Analytics */}
          <div className="project-card">
            <span className="project-badge ai">AI / ML</span>

            <h3>Machine Learning Analytics</h3>
            <p className="project-desc">
              Predictive analytics system leveraging supervised learning models
              to extract actionable insights from data.
            </p>

            <div className="project-tags">
              <span>Scikit-learn</span>
              <span>Python</span>
              <span>ML Models</span>
            </div>

            <div className="project-actions">
              <span className="project-action muted">Internal</span>
            </div>
          </div>

          {/* NLP */}
          <div className="project-card">
            <span className="project-badge ai">AI / ML</span>

            <h3>NLP Text Processing</h3>
            <p className="project-desc">
              Natural language processing pipeline for text classification,
              sentiment analysis, and information extraction.
            </p>

            <div className="project-tags">
              <span>NLP</span>
              <span>Transformers</span>
              <span>Python</span>
            </div>

            <div className="project-actions">
              <span className="project-action muted">Research</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
