import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    type: "Education",
    title: "M.Tech — Computer Science",
    org: "Indian Institute of Technology, Jammu",
    period: "2025 – Present",
    description:
      "Specializing in High-Performance Computing and ML Systems. Conducting research on distributed systems architecture and scalable algorithms.",
    tags: ["HPC", "ML Systems", "Distributed Comp"]
  },
  {
    type: "Work",
    title: "Software Engineer",
    org: "Precious Infosystem",
    period: "2023 – 2025",
    description:
      "Architected backend-heavy Rails applications. Designed scalable RESTful APIs and implemented real-time WebSocket features for high-traffic dashboards.",
    tags: ["Ruby on Rails", "PostgreSQL", "Redis"]
  },
  {
    type: "Work",
    title: "Junior Software Engineer",
    org: "Bestpeers Infosystem",
    period: "2022 – 2023",
    description:
      "Maintained enterprise SaaS products. Optimized database queries reducing load times by 40% and automated testing pipelines to ensure stability.",
    tags: ["Ruby", "RSpec", "CI/CD"]
  },
  {
    type: "Work",
    title: "Assistant System Engineer",
    org: "Tata Consultancy Services",
    period: "2021 – 2022",
    description:
      "Engineered ETL pipelines processing large-scale datasets. Developed enterprise dashboards using QlikView and complex SQL optimizations.",
    tags: ["SQL", "ETL", "Data Warehousing"]
  },
  {
    type: "Education",
    title: "B.Tech — Information Technology",
    org: "RGPV University",
    period: "2017 – 2021",
    description:
      "Graduated with 8.80 CGPA. Focused on Data Structures, Algorithms, and Object-Oriented System Design fundamentals.",
    tags: ["DSA", "OS", "DBMS"]
  }
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        
        {/* Header - Matching the "Parth" Aesthetic */}
        <div className="section-header">
          <span className="section-label">The Journey</span>
          <h2 className="section-title">
            Experience & <span className="italic-serif">Education.</span>
          </h2>
        </div>

        {/* The Grid List */}
        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="experience-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              
              {/* Left: Timeline & Type */}
              <div className="exp-sidebar">
                <span className="exp-period">{item.period}</span>
                <span className={`exp-type ${item.type.toLowerCase()}`}>
                  {item.type}
                </span>
              </div>

              {/* Right: Content */}
              <div className="exp-main">
                <div className="exp-title-row">
                  <h3 className="exp-role">{item.title}</h3>
                  <span className="exp-company">{item.org}</span>
                </div>
                
                <p className="exp-description">{item.description}</p>
                
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