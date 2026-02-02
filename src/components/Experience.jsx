import { motion } from "framer-motion"
import "../styles/experience.css"

const experiences = [
  {
    title: "M.Tech — Computer Science",
    org: "Indian Institute of Technology, Jammu",
    period: "2025 – 2027 (Current)",
    location: "Jammu, India",
    description:
      "Pursuing M.Tech in Computer Science with focus on advanced systems, machine learning, and core computer science foundations.",
    tags: ["Machine Learning", "Systems", "Algorithms"]
  },
  {
    title: "Software Engineer — Ruby on Rails",
    org: "Precious Infosystem",
    period: "Nov 2023 – Jun 2025",
    location: "Remote",
    description:
      "Built backend-heavy web applications using Ruby on Rails. Designed RESTful APIs, integrated third-party services, implemented real-time features using Action Cable, and followed TDD/BDD practices.",
    tags: ["Ruby on Rails", "APIs", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Junior Software Engineer",
    org: "Bestpeers Infosystem",
    period: "May 2022 – Oct 2023",
    location: "India",
    description:
      "Developed and maintained enterprise applications. Built scalable APIs, automated test suites using RSpec & Minitest, and contributed to stable production deployments.",
    tags: ["Ruby", "RSpec", "REST APIs"]
  },
  {
    title: "Assistant System Engineer",
    org: "Tata Consultancy Services (TCS)",
    period: "Jun 2021 – Jun 2022",
    location: "India",
    description:
      "Worked on ETL pipelines using QlikView. Designed optimized SQL queries, built data workflows, and supported enterprise dashboards.",
    tags: ["SQL", "ETL", "QlikView"]
  },
  {
    title: "B.Tech — Information Technology",
    org: "Chameli Devi Group of Institutions (RGPV)",
    period: "2017 – 2021",
    location: "Indore, India",
    description:
      "Graduated with strong academic performance (CGPA 8.80). Built solid foundations in programming, data structures, and software engineering.",
    tags: ["DSA", "Programming", "CS Fundamentals"]
  }
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <p className="experience-label">— EXPERIENCE</p>
        <h2 className="experience-title">
          Education & Professional Journey
        </h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <span className="org">
                  {item.org} · {item.location}
                </span>
                <span className="period">{item.period}</span>

                <p>{item.description}</p>

                <div className="tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
