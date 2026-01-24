import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 900
            }
          },
          color: {
            value: "#0f172a"
          },
          opacity: {
            value: 0.25
          },
          size: {
            value: { min: 1, max: 2 }
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "out"
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0f172a",
            opacity: 0.15,
            width: 1
          }
        },
        background: {
          color: "#ffffff"
        },
        detectRetina: true
      }}
    />
  )
}
