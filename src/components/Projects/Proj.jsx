import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import download from "../../assets/1.jpg";
import ProjectShowcase from "./ProjectShowcase";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsLoad() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });


  /*
  ============================================================
  PROJECT INTRO TRANSITION
  ============================================================

  This is your custom:

              PROJECT?

                 ↓

          IMAGE ZOOMS IN

                 ↓

          IMAGE DISAPPEARS

                 ↓

        SELECTED WORK APPEARS
  ============================================================
  */

  useGSAP(
    () => {
      const container = containerRef.current;
      const imageWrapper = imageWrapperRef.current;

      if (!container || !imageWrapper) return;


      /*
      ========================================================
      IMPORTANT OFFSET
      ========================================================

      App.jsx translates the entire <motion.main>
      down by a maximum of 120vh.

      Therefore GSAP's DOM measurement and the
      visual position are different.

      We compensate for that here.
      */




      /*
      ========================================================
      INTRO TIMELINE
      ========================================================
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,


          /*
          ====================================================
          START

          Because App.jsx moves the entire main content
          downward, GSAP needs to compensate for it.
          ====================================================
          */

          start: "top top",


          /*
          ====================================================
          END

          The PROJECT? transition gets approximately
          1.8 viewport heights of scrolling.
          ====================================================
          */

          end: () => `+=${window.innerHeight * 1.8}`,


          /*
          Keep the Project? screen pinned.
          */

          pin: true,


          /*
          Smooth connection between scrollbar
          and animation.
          */

          scrub: 1,


          /*
          Recalculate when viewport changes.
          */

          invalidateOnRefresh: true,


          /*
          Helps avoid pinning jumps.
          */

          anticipatePin: 1,


          /*
          VERY IMPORTANT

          Your entire portfolio is inside:

          <motion.main style={{ y: smoothY }}>

          So using transform pinning is safer
          than position: fixed.
          */

          pinType: "transform",
        },
      });


      /*
      ========================================================
      1. ZOOM INTO IMAGE
      ========================================================
      */

      timeline.to(imageWrapper, {
        scale: 15,

        duration: 1,

        ease: "none",

        force3D: false,
      });


      /*
      ========================================================
      2. FADE IMAGE OUT
      ========================================================
      */

      timeline.to(
        imageWrapper,
        {
          opacity: 0,

          duration: 0.5,

          ease: "none",
        },
        "-=0.25"
      );
    },
    {
      scope: containerRef,
    }
  );


  /*
  ============================================================
  MOUSE PARALLAX
  ============================================================
  */

  const handleMouseMove = (event) => {
    const x =
      (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 2;

    setMousePos({
      x,
      y,
    });
  };


  /*
  ============================================================
  RESET MOUSE POSITION
  ============================================================
  */

  const handleMouseLeave = () => {
    setMousePos({
      x: 0,
      y: 0,
    });
  };


  return (
    <>
      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section
        ref={containerRef}
        id="projects"
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-[#080808]
          text-white
        "
      >

        {/* =================================================
            IMAGE TRANSITION
        ================================================= */}

        <div
          ref={imageWrapperRef}
          className="
            transition-img-wrapper
            absolute
            inset-0
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-black
          "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          <img
            src={download}
            alt="Project background"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-cover
              opacity-80
            "
          />


          {/* =================================================
              DARK OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-black/30
            "
          />


          {/* =================================================
              PROJECT TEXT
          ================================================= */}

          <div
            className="
              relative
              z-10
              pointer-events-none
              transition-transform
              duration-300
              ease-out
            "
            style={{
              transform: `
                translate(
                  ${mousePos.x * 30}px,
                  ${mousePos.y * 30}px
                )
              `,
            }}
          >

            <h1
              className="
                text-center
                text-[20vw]
                leading-none
                text-white
                drop-shadow-2xl

                md:text-[18vw]
              "
              style={{
                fontFamily: "'Great Vibes', cursive",

                WebkitTextStroke:
                  "2px #1A1A1A",

                textShadow:
                  "4px 4px 0px #1A1A1A, 0px 8px 20px rgba(0,0,0,0.6)",
              }}
            >
              Project?
            </h1>

          </div>


          {/* =================================================
              SCROLL INDICATOR
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-10
              left-1/2
              z-20
              flex
              -translate-x-1/2
              flex-col
              items-center
              gap-3
            "
          >

            <span
              className="
                font-mono
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/70
              "
            >
              Scroll to explore
            </span>

            <div
              className="
                h-12
                w-px
                bg-gradient-to-b
                from-yellow-400
                to-transparent
                animate-bounce
              "
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT SHOWCASE
      ===================================================== */}

      <ProjectShowcase />
    </>
  );
}