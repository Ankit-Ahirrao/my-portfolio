import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand / Initials */}
      <span className="nav-brand">AA</span>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
