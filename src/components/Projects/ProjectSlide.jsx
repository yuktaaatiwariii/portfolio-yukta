import React, { useRef } from "react";

export default function ProjectSlide({ project, index }) {
  const videoRef = useRef(null);

  /*
  ==========================================================
  FORMAT PROJECT NUMBER

  0 → 01
  1 → 02
  2 → 03
  ==========================================================
  */

  const formatNumber = (number) => {
    return String(number + 1).padStart(2, "0");
  };

  return (
    <article
      className="
        project-slide
        relative
        h-screen
        w-screen
        shrink-0
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Large subtle yellow glow */}

        <div
          className="
            absolute
            right-[-10%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-yellow-400/[0.025]
            blur-[120px]
          "
        />

        {/* Large dark gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080808]
            via-[#080808]/90
            to-[#080808]/20
          "
        />

      </div>


      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          border
          border-white/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[35%]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-white/[0.035]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

    <div
  className="
    relative
    z-10
    flex
    h-screen
    w-full
    items-center
    px-6
    md:px-12
    lg:px-20
  "
>

        <div
          className="
            grid
            h-full
            w-full
            grid-cols-1
            items-center
            gap-10

            lg:grid-cols-[1fr_0.8fr]
            lg:gap-8
          "
        >


          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              flex
              h-full
              flex-col
              justify-center
              lg:pr-10
            "
          >

            {/* ================================================
                PROJECT META
            ================================================= */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-4
              "
            >

              {/* Project number */}

              <span
                className="
                  font-mono
                  text-xs
                  font-bold
                  tracking-[0.3em]
                  text-yellow-400
                "
              >
                {formatNumber(index)}
              </span>


              {/* Divider */}

              <div
                className="
                  h-px
                  w-10
                  bg-white/20
                "
              />


              {/* Category */}

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/35

                  md:text-[10px]
                "
              >
                {project.category}
              </span>

            </div>


            {/* ================================================
                PROJECT TITLE
            ================================================= */}

            <h3
              className="
                max-w-[850px]
                font-sans
                text-[17vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.08em]

                sm:text-[13vw]

                md:text-[10vw]

                lg:text-[7rem]

                xl:text-[8rem]
              "
            >
              {project.title}
            </h3>


            {/* ================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-7
                max-w-[600px]
                font-sans
                text-sm
                leading-7
                text-white/50

                md:mt-8
                md:text-base
                md:leading-8
              "
            >
              {project.description}
            </p>


            {/* ================================================
                TECHNOLOGY TAGS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                max-w-[650px]
                flex-wrap
                gap-2
              "
            >

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="
                    border
                    border-white/10
                    bg-white/[0.01]
                    px-3
                    py-2
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                    transition-all
                    duration-300

                    hover:border-yellow-400/40
                    hover:bg-yellow-400/[0.03]
                    hover:text-yellow-400
                  "
                >
                  {technology}
                </span>

              ))}

            </div>


            {/* ================================================
                READ CASE BUTTON
            ================================================= */}

            <div className="mt-9">

              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  gap-4
                "
              >

                {/* Text */}

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-yellow-400
                    transition-colors
                    duration-300
                    group-hover:text-yellow-300
                  "
                >
                  Read Case
                </span>


                {/* Circle */}

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/40
                    transition-all
                    duration-300

                    group-hover:border-yellow-400
                    group-hover:bg-yellow-400
                    group-hover:text-black
                  "
                >

                  {/* Arrow */}

                  <span
                    className="
                      -rotate-45
                      text-sm
                      transition-transform
                      duration-300

                      group-hover:rotate-0
                    "
                  >
                    →
                  </span>

                </span>

              </button>

            </div>

          </div>


          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div
            className="
              relative
              flex
              h-full
              items-center
              justify-center

              lg:justify-end
              lg:pr-[5vw]
            "
          >

            {/* ================================================
                OUTER DECORATIVE RING
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                right-[3%]
                h-[450px]
                w-[450px]
                rounded-full
                border
                border-white/[0.035]

                md:h-[550px]
                md:w-[550px]
              "
            />


            {/* ================================================
                PHONE
            ================================================= */}

            <div
              className="
                relative
                z-10
                h-[52vh]
                max-h-[620px]
                w-[270px]
                rounded-[38px]
                border
                border-white/20
                bg-[#111]
                p-[7px]
                shadow-[0_40px_100px_rgba(0,0,0,0.85)]
                transition-transform
                duration-700

                hover:-translate-y-3

                sm:w-[290px]

                md:h-[62vh]
                md:w-[310px]
                md:rounded-[42px]

                lg:h-[65vh]
                lg:w-[320px]
              "
            >

              {/* ============================================
                  PHONE INNER BODY
              ============================================ */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[31px]
                  bg-black

                  md:rounded-[35px]
                "
              >


                {/* ==========================================
                    TOP NOTCH
                ========================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    z-40
                    h-7
                    w-28
                    -translate-x-1/2
                    rounded-b-2xl
                    bg-black
                  "
                >

                  {/* Speaker */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-2.5
                      h-1.5
                      w-10
                      -translate-x-1/2
                      rounded-full
                      bg-white/10
                    "
                  />

                </div>


                {/* ==========================================
                    VIDEO
                ========================================== */}

                <video
                  ref={videoRef}
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />


                {/* ==========================================
                    DARK OVERLAY
                ========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    bg-gradient-to-b
                    from-black/[0.08]
                    via-transparent
                    to-black/[0.15]
                  "
                />


                {/* ==========================================
                    GLASS REFLECTION
                ========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[-30%]
                    top-[-20%]
                    z-30
                    h-[150%]
                    w-[70%]
                    rotate-[25deg]
                    bg-gradient-to-r
                    from-white/[0.10]
                    via-white/[0.025]
                    to-transparent
                  "
                />


                {/* ==========================================
                    SCREEN BORDER
                ========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-40
                    rounded-[31px]
                    border
                    border-white/[0.06]

                    md:rounded-[35px]
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          PROJECT LABEL — BOTTOM RIGHT
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          z-30
          font-mono
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-white/20

          md:right-12

          lg:right-20
        "
      >
        Project {formatNumber(index)}
      </div>


      {/* =====================================================
          SMALL YEAR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-6
          z-30
          font-mono
          text-[8px]
          tracking-[0.25em]
          text-white/20

          md:left-12

          lg:left-20
        "
      >
        {project.year}
      </div>

    </article>
  );
}