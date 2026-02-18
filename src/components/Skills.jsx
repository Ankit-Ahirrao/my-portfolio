import "../styles/skills.css"

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Angular", icon: "🅰️" },
  { name: "WordPress", icon: "📝" },

  { name: "Ruby on Rails", icon: "💎" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Microservices", icon: "🧩" },

  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },

  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Linux", icon: "🐧" }
]

export default function Skills() {
  return (
    <section id="skills section" className="skills">
      <div className="container">

        <p className="skills-eyebrow">MY SKILLSET</p>
        
        <h2 className="skills-title serif-heading">
          My <span>Technical</span> Stack
        </h2>

        <div className="skills-cloud">
          {skills.map(skill => (
            <div key={skill.name} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
