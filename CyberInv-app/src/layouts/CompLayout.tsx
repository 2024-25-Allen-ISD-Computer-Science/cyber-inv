import Navbar from "@/components/Navbar";
import ani from "@/gal/ani.png";
import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import { ThemeProvider } from "@/components/theme-provider";

export default function Layout() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on resize
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("resize", handleResize);
    // Remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
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
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 70,
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
          color: "bg-foreground",
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
          speed: 1,
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

  if (init && !isMobile) {
    return (
      <ThemeProvider>
        <div className="h-screen flex flex-col inter-400 w-full">
          <Navbar />
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="w-full h-full absolute -z-10"
          />
          <div className="w-full h-fit absolute justify-end">
            {/* <img
                src={ani}
                alt="ani"
                className="fixed bottom-0 left-0 m-4 opacity-35" 
              /> */}
          </div>
          <Outlet />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col inter-400 justify-center items-center font-semibold text-center text-wrap">
        Your screen is too small. Please resize!
        {/* <img
          src={ani}
          alt="ani"
          className="fixed m-4 opacity-35" 
        /> */}
      </div>
    </ThemeProvider>
  );
}
