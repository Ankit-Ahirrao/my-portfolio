import { motion } from "framer-motion";
import "../styles/projects.css";

const featuredProjects = [
  {
    id: "cryptokia",
    title: "Cryptokia",
    category: "Full Stack",
    desc: "Real-time cryptocurrency analytics platform featuring live price tracking, market trends, and historical insights.",
    tags: ["Ruby on Rails", "MongoDB", "APIs"],
    link: "Private",
  },
  {
    id: "cartedo",
    title: "Cartedo",
    category: "Full Stack",
    desc: "Online education platform delivering structured learning experiences with a scalable backend architecture.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "Visit →",
    url: "https://www.cartedo.com/",
  }
];

const standardProjects = [
  {
    id: "etoh",
    title: "Etoh Suite",
    category: "Backend",
    desc: "Enterprise internal tools designed to streamline operational workflows.",
    tags: ["REST APIs", "AWS"],
    link: "Enterprise",
  },
  {
    id: "face-ai",
    title: "Face Recognition",
    category: "AI / ML",
    desc: "Deep learning system for real-time identity detection.",
    tags: ["TensorFlow", "Python"],
    link: "Research",
  },
  {
    id: "ml-analytics",
    title: "ML Analytics",
    category: "AI / ML",
    desc: "Predictive analytics system leveraging supervised learning.",
    tags: ["Scikit-learn", "Python"],
    link: "Internal",
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Digital <span>Experiences</span>
          </h2>
        </motion.div>

        {/* Featured Grid (Top) */}
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="featured-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-top">
                <span className="card-badge">{project.category}</span>
                {project.url ? (
                  <a href={project.url} className="card-link-icon" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                ) : (
                  <span className="status-label">{project.link}</span>
                )}
              </div>
              
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
              
              <div className="card-tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard Grid (Bottom) */}
        <div className="standard-grid">
          {standardProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="standard-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className="card-header-sm">
                <span className="card-badge-sm">{project.category}</span>
                <span className="status-label-sm">{project.link}</span>
              </div>
              
              <h3 className="card-title-sm">{project.title}</h3>
              <p className="card-desc-sm">{project.desc}</p>
              
              <div className="card-tags-sm">
                 {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}