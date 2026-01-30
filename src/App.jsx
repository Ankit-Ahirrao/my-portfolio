import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import BackgroundParticles from "./components/BackgroundParticles"
import Story from "./components/Story"

export default function App() {
  return (
    <>
      <BackgroundParticles />
      <Hero />
      <About />
      <Skills />
      <Story />
    </>
  )
}
