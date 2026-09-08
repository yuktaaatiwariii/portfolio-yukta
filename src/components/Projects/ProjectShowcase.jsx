import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProjectSlide from "./ProjectSlide";
import { projectsData } from "./projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const showcaseRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  const displayProjects = [...projectsData, projectsData[0]]; // Clone first project for seamless loop
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isInstantRef = useRef(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1));
  };

  useGSAP(() => {
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!track) return;

    if (isInstantRef.current) {
      gsap.set(track, { x: 0 });
      if (progress) gsap.set(progress, { scaleX: 1 / projectsData.length });
      isInstantRef.current = false;
      return;
    }

    gsap.to(track, {
      x: () => -(currentIndex * window.innerWidth),
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        // If we reached the cloned slide, seamlessly jump back to real first slide
        if (currentIndex === displayProjects.length - 1) {
          isInstantRef.current = true;
          setCurrentIndex(0);
        }
      }
    });

    if (progress) {
      let progressScale = ((currentIndex % projectsData.length) + 1) / projectsData.length;
      gsap.to(progress, {
        scaleX: progressScale,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  }, [currentIndex]);


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
            
            h-[2px]
            w-200
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
            key={`${project.id}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>


      {/* ================= NAVIGATION ARROWS ================= */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 md:left-6"
        data-cursor="PREV"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 md:right-6"
        data-cursor="NEXT"
      >
        <ChevronRight size={32} />
      </button>

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