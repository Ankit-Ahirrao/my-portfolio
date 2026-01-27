import { profile } from "../data/Profile"
import "../styles/experience.css"

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        {profile.experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span>{job.duration}</span>
            </div>

            <p className="experience-company">
              {job.company} — {job.location}
            </p>

            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
