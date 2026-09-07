import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProjectSlide from "./ProjectSlide";
import { projectsData } from "./projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const showcaseRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const displayProjects = projectsData;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [displayProjects.length]);

  useGSAP(() => {
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!track) return;

    gsap.to(track, {
      x: () => -(currentIndex * window.innerWidth),
      duration: 1.5,
      ease: "power3.inOut",
    });

    if (progress) {
      gsap.to(progress, {
        scaleX: (currentIndex + 1) / displayProjects.length,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  }, [currentIndex, displayProjects.length]);


  return (
    <section
      ref={showcaseRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-6
          top-8
          z-50
          md:left-16
          md:top-12
        "
      >
        <span
          className="
            mb-3
            block
            font-mono
            text-xs
            font-bold
            tracking-[0.35em]
            text-yellow-500
          "
        >
          / WORK
        </span>

        <h2
          className="
            whitespace-nowrap
            text-5xl
            font-bold
            uppercase
            leading-none
            tracking-[-0.06em]
            md:text-7xl
            lg:text-[7rem]
          "
        >
          SELECTED{" "}

          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "1px #eab308",
            }}
          >
            WORK
          </span>
        </h2>

        {/* ================= PROGRESS ================= */}

        <div
          className="
            mt-6
            h-[2px]
            w-40
            overflow-hidden
            bg-white/10
          "
        >
          <div
            ref={progressRef}
            className="
              h-full
              w-full
              origin-left
              scale-x-0
              bg-yellow-500
            "
          />
        </div>
      </div>


      {/* ================= HORIZONTAL TRACK ================= */}

      <div
        ref={trackRef}
        className="
          relative
          flex
          h-screen
          w-max
        "
      >
        {displayProjects.map((project, index) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>


      {/* ================= FOOTER HINT ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          left-1/2
          z-50
          -translate-x-1/2
          whitespace-nowrap
          font-mono
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/40
        "
      >
        Scroll to explore →
      </div>

    </section>
  );
}