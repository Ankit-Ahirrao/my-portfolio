import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import BackgroundParticles from "./components/BackgroundParticles"
import Story from "./components/Story"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import GithubActivity from "./components/GithubActivity"

export default function App() {
  return (
    <>
      <BackgroundParticles />
      <Hero />
      <About />
      <Skills />
      <GithubActivity />
      <Story />
      <Experience />
      <Footer />
    </>
  )
}
