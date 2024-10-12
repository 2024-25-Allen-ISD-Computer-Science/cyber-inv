"use client";
import Compbar from "@/components/Navbar/Compbar";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Lock scrolling on desktop
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    }

    // Unlock scrolling when component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 100,
          },
          repulse: {
            distance: 200,
            duration: 1.4,
          },
        },
      },
      particles: {
        color: {
          value: "#cb6bfb",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="w-full h-full overflow-hidden">
        <Compbar />
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="w-full h-full absolute -z-10"
        />
        {children}
      </div>
    );
  }

  return (
    <>
      <Compbar />
      <div className="w-full h-full">
        {children}
      </div>
    </>
  );
}
