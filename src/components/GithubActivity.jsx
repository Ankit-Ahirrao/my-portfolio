import { motion } from "framer-motion";
import "../styles/githubActivity.css";

export default function GithubActivity() {
  return (
    <section className="github section" id="github">
      <div className="container">
        
        {/* Header */}
        <div className="github-header">
          <span className="section-label">Continuous Integration</span>
          <h2 className="github-title">
            Code & <span className="italic-highlight">Consistency.</span>
          </h2>
          <p className="github-desc">
            A real-time record of my open-source contributions. 
            I believe in shipping code daily and maintaining a 
            transparent engineering cadence.
          </p>
        </div>

        {/* Dashboard Card */}
        <motion.div 
          className="github-dashboard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mock Window Header */}
          <div className="dashboard-header">
            <div className="user-info">
              {/* Green status dot to match chart */}
              <span className="status-dot"></span>
              <span className="username">@Ankit-Ahirrao</span>
            </div>
            <div className="window-controls">
              <span></span><span></span><span></span>
            </div>
          </div>

          {/* The Chart - Standard GitHub Green */}
          <div className="chart-wrapper">
             <img
              src="https://ghchart.rshah.org/Ankit-Ahirrao"
              alt="GitHub contribution activity"
              className="github-chart"
              loading="lazy"
            />
          </div>

          {/* Footer Stats */}
          <div className="dashboard-footer">
            <div className="footer-stat">
              <span className="fs-label">Contribution Strength</span>
              <span className="fs-value">High</span>
            </div>
            <div className="footer-stat">
              <span className="fs-label">Primary Language</span>
              <span className="fs-value">Ruby / JS</span>
            </div>
            <a 
              href="https://github.com/Ankit-Ahirrao" 
              target="_blank" 
              rel="noreferrer"
              className="view-profile-btn"
            >
              View Profile ↗
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}