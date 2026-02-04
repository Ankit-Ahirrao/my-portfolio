import { useEffect, useState } from "react"
import "../styles/navbar.css"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" }
]

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px", // 🔑 controls when section becomes active
        threshold: 0
      }
    )

    sections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      {/* Brand */}
      <span className="nav-brand">AA</span>

      {/* Links */}
      <ul className="nav-links">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
