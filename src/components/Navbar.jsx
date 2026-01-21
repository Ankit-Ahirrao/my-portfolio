import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Ankit</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
