import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    type: "Education",
    title: "M.Tech — Computer Science",
    org: "Indian Institute of Technology, Jammu",
    period: "2025 – Present", // Changed to Present for clarity
    location: "Jammu, India",
    description:
      "Specializing in High-Performance Computing and ML Systems. Conducting research on distributed systems architecture.",
    tags: ["Machine Learning", "Systems", "Algorithms"]
  },
  {
    type: "Work",
    title: "Software Engineer",
    org: "Precious Infosystem",
    period: "2023 – 2025",
    location: "Remote",
    description:
      "Architected backend-heavy Rails applications. Designed scalable RESTful APIs and implemented real-time WebSocket features for high-traffic dashboards.",
    tags: ["Ruby on Rails", "PostgreSQL", "Redis"]
  },
  {
    type: "Work",
    title: "Junior Software Engineer",
    org: "Bestpeers Infosystem",
    period: "2022 – 2023",
    location: "India",
    description:
      "Maintained enterprise SaaS products. Optimized database queries reducing load times by 40% and automated testing pipelines.",
    tags: ["Ruby", "RSpec", "CI/CD"]
  },
  {
    type: "Work",
    title: "Assistant System Engineer",
    org: "Tata Consultancy Services",
    period: "2021 – 2022",
    location: "India",
    description:
      "Engineered ETL pipelines processing large-scale datasets. Developed enterprise dashboards using QlikView and SQL.",
    tags: ["SQL", "ETL", "Data Warehousing"]
  },
  {
    type: "Education",
    title: "B.Tech — Information Technology",
    org: "RGPV University",
    period: "2017 – 2021",
    location: "Indore, India",
    description:
      "Graduated with 8.80 CGPA. Focused on Data Structures, Algorithms, and Object-Oriented System Design.",
    tags: ["DSA", "OS", "DBMS"]
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">The Journey</span>
          <h2 className="section-title">
            Experience & <span className="highlight">Education</span>
          </h2>
        </motion.div>

        {/* List Layout */}
        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="experience-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Left Column: Date & Type */}
              <div className="exp-meta">
                <span className="exp-period">{item.period}</span>
                <span className={`exp-type ${item.type.toLowerCase()}`}>
                  {item.type}
                </span>
              </div>

              {/* Right Column: Content */}
              <div className="exp-content">
                <div className="exp-header">
                  <h3 className="exp-title">{item.title}</h3>
                  <span className="exp-org">{item.org}</span>
                </div>
                
                <p className="exp-desc">{item.description}</p>
                
                <div className="exp-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}