import Hero from "./components/Hero"
import BackgroundParticles from "./components/BackgroundParticles"
import "./styles/global.css"
import About from "./components/About"


export default function App() {
  return (
    <>
      <BackgroundParticles />
      <Hero />
      <About />
    </>
  )
}
