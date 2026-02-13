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
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "cartedo",
    title: "Cartedo",
    category: "Full Stack",
    desc: "Online education platform delivering structured learning experiences with a scalable backend architecture.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "Visit →",
    url: "https://www.cartedo.com/",
    gradient: "linear-gradient(135deg, #2af598 0%, #009efd 100%)",
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

        {/* 1. Featured Grid (Top Row) */}
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
              {/* Visual Gradient Header */}
              <div className="card-visual" style={{ background: project.gradient }} />
              
              <div className="card-content">
                <div className="card-top">
                  <span className="card-category">{project.category}</span>
                  {project.url && <a href={project.url} className="card-external-link">↗</a>}
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="card-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Standard Grid (Bottom Grid) */}
        <div className="standard-grid">
          {standardProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="standard-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className="card-content-compact">
                 <span className="card-category-sm">{project.category}</span>
                 <h3>{project.title}</h3>
                 <p>{project.desc}</p>
                 <div className="card-tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}