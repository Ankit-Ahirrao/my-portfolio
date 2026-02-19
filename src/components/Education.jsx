import { profile } from "../data/Profile"
import "../styles/education.css"

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>

        {profile.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institute}</p>
            <span>{edu.duration}</span>

            <ul>
              {edu.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
