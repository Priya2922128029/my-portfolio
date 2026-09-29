import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeExperience, setActiveExperience] = useState(1);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const experiences = [
    {
      id: 1,
      year: "2023",
      period: "AUG 2023 — SEP 2023",
      company: "FUTURIK TECHNOLOGIES",
      role: "WEB DESIGNING INTERN",
      number: "01",
      description:
        "Worked on responsive web pages and interactive interfaces while gaining practical experience in frontend development.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    },
    {
      id: 2,
      year: "2024",
      period: "DEC 2024 — OCT 2025",
      company: "VDART ACADEMY",
      role: "FULL STACK DEVELOPER INTERN",
      number: "02",
      description:
        "Developed responsive and interactive web applications using React.js, Material UI, Tailwind CSS and JavaScript.",
      skills: [
        "React.js",
        "JavaScript",
        "Material UI",
        "Tailwind CSS",
        "REST API",
        "Git",
      ],
    },
  ];

  const floatingSkills = [
    "REACT.JS",
    "JAVASCRIPT",
    "MATERIAL UI",
    "TAILWIND",
    "REST API",
    "GIT",
    "GITHUB",
    "RESPONSIVE UI",
  ];

  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(".experience-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("experience-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     MOUSE MOVEMENT
  ===================================================== */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = sectionRef.current?.getBoundingClientRect();

      if (!rect) return;

      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* =====================================================
     CARD TILT
  ===================================================== */

  const handleCardMove = (event, card) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (y / rect.height - 0.5) * -8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const resetCard = (event) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section
      className="experience-section"
      ref={sectionRef}
      id="experience"
    >
      <style>{`

        /* =====================================================
           EXPERIENCE PAGE
        ===================================================== */

        .experience-section {
          position: relative;
          min-height: 100vh;
          padding: 120px 6vw 140px;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(91, 54, 255, 0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(91, 54, 255, 0.07),
              transparent 25%
            ),
            #f3f3f1;
          color: #111;
          overflow: hidden;
          isolation: isolate;
        }

        /* =====================================================
           BACKGROUND WORD
        ===================================================== */

        .experience-bg-word {
          position: absolute;
          top: 70px;
          left: -20px;
          font-size: clamp(110px, 18vw, 280px);
          font-weight: 900;
          letter-spacing: -12px;
          line-height: .8;
          color: rgba(0,0,0,.035);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          z-index: -1;
        }

        /* =====================================================
           MOUSE FOLLOW GLOW
        ===================================================== */

        .experience-cursor {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              circle,
              rgba(92, 77, 255, .13),
              rgba(92, 77, 255, 0) 70%
            );
          transform: translate(
            calc(${mouse.x}px - 130px),
            calc(${mouse.y}px - 130px)
          );
          transition: transform .12s linear;
          z-index: -1;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .experience-header {
          max-width: 1200px;
          margin: 0 auto 90px;
          position: relative;
        }

        .experience-kicker {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #777;
        }

        .experience-kicker-line {
          width: 55px;
          height: 1px;
          background: #111;
        }

        .experience-header h1 {
          margin: 0;
          font-size: clamp(70px, 12vw, 170px);
          line-height: .78;
          letter-spacing: -8px;
          font-weight: 950;
        }

        .experience-outline {
          color: transparent;
          -webkit-text-stroke: 2px #111;
        }

        .experience-header-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 40px;
          gap: 30px;
        }

        .experience-header-description {
          max-width: 390px;
          font-size: 13px;
          line-height: 1.8;
          color: #666;
        }

        .experience-count {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #888;
        }

        .experience-count strong {
          color: #111;
          font-size: 25px;
          margin-right: 7px;
        }

        /* =====================================================
           FLOATING SKILLS
        ===================================================== */

        .floating-skills {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-skill {
          position: absolute;
          padding: 9px 15px;
          border: 1px solid rgba(0,0,0,.12);
          background: rgba(255,255,255,.6);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #555;
          animation: skillFloat 5s ease-in-out infinite;
        }

        .floating-skill:nth-child(1) {
          top: 17%;
          right: 8%;
          animation-delay: 0s;
        }

        .floating-skill:nth-child(2) {
          top: 32%;
          left: 5%;
          animation-delay: -1s;
        }

        .floating-skill:nth-child(3) {
          top: 49%;
          right: 4%;
          animation-delay: -2s;
        }

        .floating-skill:nth-child(4) {
          top: 66%;
          left: 4%;
          animation-delay: -3s;
        }

        .floating-skill:nth-child(5) {
          top: 76%;
          right: 8%;
          animation-delay: -4s;
        }

        .floating-skill:nth-child(6) {
          top: 42%;
          left: 10%;
          animation-delay: -1.5s;
        }

        .floating-skill:nth-child(7) {
          top: 85%;
          left: 17%;
          animation-delay: -2.5s;
        }

        .floating-skill:nth-child(8) {
          top: 24%;
          right: 20%;
          animation-delay: -3.5s;
        }

        @keyframes skillFloat {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-18px) rotate(2deg);
          }
        }

        /* =====================================================
           TIMELINE
        ===================================================== */

        .experience-timeline {
          position: relative;
          max-width: 1150px;
          margin: 0 auto;
        }

        .experience-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            #aaa 8%,
            #aaa 92%,
            transparent
          );
          transform: translateX(-50%);
        }

        .experience-line::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #5c4dff;
          transform: translateX(-50%);
          box-shadow:
            0 0 0 8px rgba(92,77,255,.08),
            0 0 30px rgba(92,77,255,.4);
          animation: pulseDot 2s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% {
            box-shadow:
              0 0 0 8px rgba(92,77,255,.08),
              0 0 20px rgba(92,77,255,.2);
          }

          50% {
            box-shadow:
              0 0 0 15px rgba(92,77,255,.04),
              0 0 40px rgba(92,77,255,.45);
          }
        }

        /* =====================================================
           EXPERIENCE ITEM
        ===================================================== */

        .experience-item {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 90px 1fr;
          align-items: center;
          min-height: 420px;
        }

        .experience-item:nth-child(even) {
          direction: rtl;
        }

        .experience-item:nth-child(even) > * {
          direction: ltr;
        }

        /* =====================================================
           YEAR
        ===================================================== */

        .experience-year {
          padding: 30px;
        }

        .experience-item:nth-child(odd) .experience-year {
          text-align: right;
        }

        .experience-year-number {
          font-size: clamp(70px, 9vw, 120px);
          line-height: .8;
          font-weight: 950;
          letter-spacing: -7px;
          color: transparent;
          -webkit-text-stroke: 1.5px #bbb;
          transition: .6s ease;
        }

        .experience-item:hover .experience-year-number {
          color: #111;
          -webkit-text-stroke: 1.5px #111;
          transform: translateX(-8px);
        }

        .experience-year-period {
          margin-top: 20px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #999;
        }

        /* =====================================================
           CENTER NODE
        ===================================================== */

        .experience-node {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .experience-node-inner {
          width: 24px;
          height: 24px;
          border: 1px solid #111;
          background: #f3f3f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .5s cubic-bezier(.16,1,.3,1);
        }

        .experience-node-inner::after {
          content: "";
          width: 7px;
          height: 7px;
          background: #111;
          border-radius: 50%;
          transition: .4s ease;
        }

        .experience-item:hover .experience-node-inner,
        .experience-item.active .experience-node-inner {
          width: 42px;
          height: 42px;
          background: #5c4dff;
          border-color: #5c4dff;
          box-shadow: 0 10px 30px rgba(92,77,255,.3);
        }

        .experience-item:hover .experience-node-inner::after,
        .experience-item.active .experience-node-inner::after {
          background: white;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .experience-card {
          position: relative;
          padding: 32px;
          min-height: 280px;
          border-radius: 22px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(0,0,0,.08);
          backdrop-filter: blur(16px);
          overflow: hidden;
          cursor: pointer;

          transition:
            transform .5s cubic-bezier(.16,1,.3,1),
            background .4s ease,
            box-shadow .4s ease,
            border .4s ease;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -90px;
          top: -90px;
          border-radius: 50%;
          background: #5c4dff;
          opacity: .06;
          transition: transform .7s cubic-bezier(.16,1,.3,1);
        }

        .experience-card:hover::before {
          transform: scale(2.3);
        }

        .experience-card:hover {
          background: #111;
          color: white;
          border-color: #111;
          box-shadow: 0 35px 70px rgba(0,0,0,.18);
        }

        .experience-card.active {
          background: #111;
          color: white;
        }

        /* =====================================================
           CARD TOP
        ===================================================== */

        .experience-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .experience-number {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #999;
        }

        .experience-arrow {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,.12);
          border-radius: 50%;
          font-size: 16px;
          transition: .5s ease;
        }

        .experience-card:hover .experience-arrow,
        .experience-card.active .experience-arrow {
          background: #5c4dff;
          border-color: #5c4dff;
          color: white;
          transform: rotate(45deg);
        }

        /* =====================================================
           COMPANY
        ===================================================== */

        .experience-company {
          position: relative;
          margin-top: 45px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: #777;
        }

        .experience-card:hover .experience-company,
        .experience-card.active .experience-company {
          color: #aaa;
        }

        /* =====================================================
           ROLE
        ===================================================== */

        .experience-role {
          position: relative;
          margin: 8px 0 18px;
          font-size: clamp(25px, 3vw, 38px);
          line-height: .95;
          letter-spacing: -1.5px;
          font-weight: 950;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .experience-description {
          position: relative;
          max-width: 430px;
          margin: 0;
          font-size: 11px;
          line-height: 1.8;
          color: #777;
        }

        .experience-card:hover .experience-description,
        .experience-card.active .experience-description {
          color: #aaa;
        }

        /* =====================================================
           SKILLS
        ===================================================== */

        .experience-skills {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 25px;
        }

        .experience-skill {
          padding: 6px 10px;
          border-radius: 100px;
          background: #e9e9e7;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #555;
          transition: .3s ease;
        }

        .experience-card:hover .experience-skill,
        .experience-card.active .experience-skill {
          background: rgba(255,255,255,.1);
          color: #ddd;
        }

        /* =====================================================
           REVEAL ANIMATION
        ===================================================== */

        .experience-reveal {
          opacity: 0;
          transform: translateY(70px);
          transition:
            opacity 1s cubic-bezier(.16,1,.3,1),
            transform 1s cubic-bezier(.16,1,.3,1);
        }

        .experience-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           BOTTOM STATEMENT
        ===================================================== */

        .experience-bottom {
          max-width: 1150px;
          margin: 120px auto 0;
          padding-top: 50px;
          border-top: 1px solid rgba(0,0,0,.12);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .experience-bottom-title {
          max-width: 650px;
          font-size: clamp(35px, 5vw, 70px);
          line-height: .95;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .experience-bottom-title span {
          color: #5c4dff;
        }

        .experience-bottom-meta {
          font-size: 9px;
          line-height: 1.7;
          letter-spacing: 1px;
          color: #888;
          text-align: right;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 900px) {

          .experience-section {
            padding: 90px 25px 100px;
          }

          .experience-header {
            margin-bottom: 60px;
          }

          .experience-header h1 {
            letter-spacing: -5px;
          }

          .experience-header-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .experience-line {
            left: 18px;
          }

          .experience-item,
          .experience-item:nth-child(even) {
            direction: ltr;
            grid-template-columns: 45px 1fr;
            min-height: auto;
            margin-bottom: 25px;
          }

          .experience-item:nth-child(even) > * {
            direction: ltr;
          }

          .experience-year {
            display: none;
          }

          .experience-node {
            grid-column: 1;
            grid-row: 1;
            align-self: stretch;
            align-items: flex-start;
            padding-top: 40px;
          }

          .experience-card {
            grid-column: 2;
            min-height: 0;
            padding: 25px;
          }

          .experience-role {
            font-size: 27px;
          }

          .floating-skill {
            display: none;
          }

          .experience-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .experience-bottom-meta {
            text-align: left;
          }
        }

        @media (max-width: 500px) {

          .experience-section {
            padding-left: 18px;
            padding-right: 18px;
          }

          .experience-header h1 {
            font-size: 65px;
          }

          .experience-outline {
            -webkit-text-stroke: 1px #111;
          }

          .experience-card {
            border-radius: 17px;
          }

          .experience-role {
            font-size: 23px;
          }

          .experience-bottom-title {
            font-size: 40px;
            letter-spacing: -2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .floating-skill,
          .experience-line::before {
            animation: none;
          }

          .experience-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .experience-cursor {
            display: none;
          }
        }

      `}</style>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="experience-bg-word">
        EXPERIENCE
      </div>

      <div className="experience-cursor" />

      {/* =====================================================
          FLOATING SKILLS
      ===================================================== */}

      <div className="floating-skills">
        {floatingSkills.map((skill, index) => (
          <span
            key={index}
            className="floating-skill"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="experience-header experience-reveal">

        <div className="experience-kicker">
          <span>02</span>
          <span className="experience-kicker-line"></span>
          <span>EXPERIENCE</span>
        </div>

        <h1>
          WORK
          <br />
          <span className="experience-outline">
            JOURNEY.
          </span>
        </h1>

        <div className="experience-header-bottom">

          <p className="experience-header-description">
            A collection of experiences where I learned,
            built interfaces, solved problems and turned
            ideas into responsive digital products.
          </p>

          <div className="experience-count">
            <strong>02</strong>
            EXPERIENCES
          </div>

        </div>

      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div className="experience-timeline">

        <div className="experience-line" />

        {experiences.map((experience, index) => (

          <div
            key={experience.id}
            className={`
              experience-item
              experience-reveal
              ${activeExperience === experience.id ? "active" : ""}
            `}
          >

            {/* YEAR */}

            <div className="experience-year">

              <div className="experience-year-number">
                {experience.year}
              </div>

              <div className="experience-year-period">
                {experience.period}
              </div>

            </div>


            {/* NODE */}

            <div className="experience-node">

              <div className="experience-node-inner" />

            </div>


            {/* CARD */}

            <div
              className={`
                experience-card
                ${activeExperience === experience.id ? "active" : ""}
              `}
              onClick={() =>
                setActiveExperience(experience.id)
              }
              onMouseMove={(event) =>
                handleCardMove(
                  event,
                  event.currentTarget
                )
              }
              onMouseLeave={resetCard}
            >

              <div className="experience-card-top">

                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-arrow">
                  ↗
                </span>

              </div>


              <div className="experience-company">
                {experience.company}
              </div>


              <h2 className="experience-role">
                {experience.role}
              </h2>


              <p className="experience-description">
                {experience.description}
              </p>


              <div className="experience-skills">

                {experience.skills.map((skill) => (

                  <span
                    key={skill}
                    className="experience-skill"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="experience-bottom experience-reveal">

        <div className="experience-bottom-title">
          STILL
          <br />
          <span>BUILDING.</span>
        </div>

        <div className="experience-bottom-meta">
          LEARNING
          <br />
          CREATING
          <br />
          IMPROVING
          <br />
          EVERY DAY.
        </div>

      </div>

    </section>
  );
};

export default Experience;