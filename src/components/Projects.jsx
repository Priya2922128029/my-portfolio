import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const sectionRef = useRef(null);

  const [activeProject, setActiveProject] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const projects = [
    {
      number: "01",
      year: "2025",
      title: "SMART CITY",
      subtitle: "DASHBOARD",
      category: "DASHBOARD / DATA VISUALIZATION",
      description:
        "A responsive dashboard designed to monitor and visualize city operational metrics across transport, energy, water, pollution, weather and emergency services.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Chart.js",
        "Responsive UI",
      ],
      image: "/images/projects/smart-city.png",
      url: "https://priya2922128029.github.io/Smart-City-Dashboard/",
    },

    {
      number: "02",
      year: "2025",
      title: "SKILL",
      subtitle: "BRIDGE",
      category: "ONLINE TEST PLATFORM",
      description:
        "A comprehensive online examination platform supporting Admin and Student roles with authentication, test management, result tracking and performance analytics.",
      tech: [
        "React.js",
        "JavaScript",
        "Material UI",
        "Django",
        "REST API",
        "Chart.js",
      ],
      image: "/images/projects/skill-bridge.png",
      url: null,
    },

    {
      number: "03",
      year: "2025",
      title: "PORT",
      subtitle: "DOCS",
      category: "DOCUMENT MANAGEMENT SYSTEM",
      description:
        "A role-based document management system supporting secure document upload, verification, review, approval and audit workflows.",
      tech: [
        "React.js",
        "JavaScript",
        "REST API",
        "RBAC",
        "Git",
        "GitHub",
      ],
      image: "/images/projects/portdocs.png",
      url: null,
    },

    {
      number: "04",
      year: "2026",
      title: "TRAVEL",
      subtitle: "PLANNER",
      category: "TRAVEL PLANNING WEB APPLICATION",
      description:
        "A responsive travel planning application that helps users discover destinations, organize trips, manage daily activities, track travel budgets and create personalized travel plans.",
      tech: [
        "React.js",
        "JavaScript",
        "Chart.js",
        "React Router",
        "Responsive UI",
        "Vercel",
      ],
      image: "/images/projects/travel-planner.png",
      url: "https://trip-planning-eight.vercel.app/",
    },

    {
      number: "05",
      year: "2026",
      title: "MY",
      subtitle: "PORTFOLIO",
      category: "PERSONAL PORTFOLIO WEBSITE",
      description:
        "A modern personal portfolio website designed to showcase my frontend development skills, professional experience, projects and contact information through a responsive and interactive interface.",
      tech: [
        "React.js",
        "JavaScript",
        "CSS3",
        "Material UI",
        "Responsive UI",
        "Git / GitHub",
      ],
      image: "/images/projects/portfolio.png",
      url: "https://my-portfolio-blond-one-17.vercel.app/",
    },
  ];

  /* =====================================================
     MOUSE FOLLOW
  ===================================================== */

  useEffect(() => {
    const move = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();

      if (!rect) return;

      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".project-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "project-visible"
            );
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     PROJECT CARD TILT
  ===================================================== */

  const handleTilt = (event) => {
    const card = event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateY =
      (x / rect.width - 0.5) * 8;

    const rotateX =
      (y / rect.height - 0.5) * -8;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const resetTilt = (event) => {
    event.currentTarget.style.transform = "";
  };

  /* =====================================================
     OPEN PROJECT
  ===================================================== */

  const openProject = () => {
    if (!project.url) {
      return;
    }

    window.open(
      project.url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const project =
    projects[activeProject];

  return (
    <section
      ref={sectionRef}
      className="projects-section"
      id="projects"
    >
      <style>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .projects-section {
          position: relative;
          min-height: 100vh;
          padding: 120px 6vw 140px;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(92,77,255,.09),
              transparent 25%
            ),
            radial-gradient(
              circle at 10% 75%,
              rgba(0,0,0,.04),
              transparent 25%
            ),
            #f2f2f0;

          color: #111;
          isolation: isolate;
        }

        /* =====================================================
           GIANT BACKGROUND
        ===================================================== */

        .projects-bg {
          position: absolute;
          top: 80px;
          left: -20px;

          font-size: clamp(
            130px,
            20vw,
            300px
          );

          font-weight: 950;
          letter-spacing: -15px;
          line-height: .7;

          color: rgba(0,0,0,.035);

          pointer-events: none;
          white-space: nowrap;

          z-index: -2;
        }

        /* =====================================================
           CURSOR GLOW
        ===================================================== */

        .projects-cursor {
          position: absolute;

          width: 300px;
          height: 300px;

          border-radius: 50%;

          pointer-events: none;

          background:
            radial-gradient(
              circle,
              rgba(92,77,255,.12),
              transparent 68%
            );

          transform:
            translate(
              calc(${mouse.x}px - 150px),
              calc(${mouse.y}px - 150px)
            );

          transition:
            transform .12s linear;

          z-index: -1;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .projects-header {
          max-width: 1200px;
          margin: 0 auto 90px;
        }

        .projects-kicker {
          display: flex;
          align-items: center;
          gap: 14px;

          margin-bottom: 25px;

          font-size: 9px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #777;
        }

        .projects-kicker-line {
          width: 50px;
          height: 1px;
          background: #111;
        }

        .projects-header h1 {
          margin: 0;

          font-size:
            clamp(75px, 13vw, 180px);

          line-height: .78;
          letter-spacing: -9px;
          font-weight: 950;
        }

        .projects-outline {
          color: transparent;

          -webkit-text-stroke:
            2px #111;
        }

        .projects-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          margin-top: 40px;
          gap: 30px;
        }

        .projects-intro-text {
          max-width: 420px;

          font-size: 12px;
          line-height: 1.8;
          color: #666;
        }

        .projects-total {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #999;
        }

        .projects-total strong {
          color: #111;
          font-size: 28px;
          margin-right: 8px;
        }

        /* =====================================================
           MOVING TECH STRIP
        ===================================================== */

        .project-tech-strip {
          position: relative;
          width: 100%;
          overflow: hidden;

          margin-bottom: 90px;

          border-top:
            1px solid rgba(0,0,0,.12);

          border-bottom:
            1px solid rgba(0,0,0,.12);

          padding: 18px 0;
        }

        .project-tech-track {
          display: flex;

          width: max-content;

          gap: 45px;

          animation:
            projectMarquee
            22s linear infinite;
        }

        .project-tech-item {
          display: flex;
          align-items: center;
          gap: 15px;

          white-space: nowrap;

          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #777;
        }

        .project-tech-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #5c4dff;
        }

        @keyframes projectMarquee {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }

        /* =====================================================
           PROJECT SELECTOR
        ===================================================== */

        .project-selector {
          max-width: 1200px;
          margin: 0 auto 35px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 15px;
        }

        .project-selector-label {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #888;
        }

        .project-selector-buttons {
          display: flex;
          gap: 7px;
        }

        .project-selector-button {
          width: 40px;
          height: 40px;

          border-radius: 50%;

          border:
            1px solid rgba(0,0,0,.15);

          background: transparent;

          cursor: pointer;

          font-size: 9px;
          font-weight: 900;

          transition:
            .35s cubic-bezier(
              .16,1,.3,1
            );
        }

        .project-selector-button:hover {
          transform: translateY(-4px);
        }

        .project-selector-button.active {
          background: #111;
          color: white;
          border-color: #111;
        }

        /* =====================================================
           MAIN PROJECT
        ===================================================== */

        .project-main {
          max-width: 1200px;
          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1.1fr .9fr;

          gap: 18px;
        }

        /* =====================================================
           PROJECT IMAGE PANEL
        ===================================================== */

        .project-visual {
          position: relative;

          min-height: 560px;

          border-radius: 25px;

          background: #111;

          overflow: hidden;

          cursor: pointer;

          perspective: 1200px;

          transition:
            transform .6s
            cubic-bezier(.16,1,.3,1),

            box-shadow .5s ease;
        }

        .project-visual:hover {
          box-shadow:
            0 35px 80px
            rgba(0,0,0,.20);
        }

        /* =====================================================
           ACTUAL PROJECT IMAGE
        ===================================================== */

        .project-preview-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          display: block;

          transition:
            transform .8s
            cubic-bezier(.16,1,.3,1),
            filter .5s ease;
        }

        .project-visual:hover
        .project-preview-image {
          transform: scale(1.045);

          filter:
            brightness(.82)
            contrast(1.04);
        }

        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .project-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,.48) 0%,
              rgba(0,0,0,.05) 38%,
              rgba(0,0,0,.10) 55%,
              rgba(0,0,0,.78) 100%
            );

          pointer-events: none;

          z-index: 2;
        }

        /* =====================================================
           IMAGE TOP
        ===================================================== */

        .project-visual-top {
          position: absolute;

          top: 25px;
          left: 25px;
          right: 25px;

          display: flex;
          justify-content:
            space-between;

          align-items: center;

          color: white;

          z-index: 5;
        }

        .project-visual-number {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;

          text-shadow:
            0 2px 10px
            rgba(0,0,0,.3);
        }

        .project-visual-category {
          max-width: 60%;

          font-size: 8px;
          letter-spacing: 2px;
          text-align: right;

          opacity: .85;

          text-shadow:
            0 2px 10px
            rgba(0,0,0,.3);
        }

        /* =====================================================
           IMAGE BADGE
        ===================================================== */

        .project-image-badge {
          position: absolute;

          left: 25px;
          top: 75px;

          z-index: 6;

          padding:
            7px 11px;

          border-radius: 30px;

          background:
            rgba(255,255,255,.16);

          border:
            1px solid
            rgba(255,255,255,.28);

          backdrop-filter:
            blur(10px);

          color: white;

          font-size: 7px;

          font-weight: 900;

          letter-spacing: 1.5px;

          opacity: 0;

          transform:
            translateY(8px);

          transition:
            .4s ease;
        }

        .project-visual:hover
        .project-image-badge {
          opacity: 1;

          transform:
            translateY(0);
        }

        /* =====================================================
           IMAGE BOTTOM
        ===================================================== */

        .project-visual-bottom {
          position: absolute;

          left: 25px;
          right: 25px;
          bottom: 25px;

          display: flex;

          justify-content:
            space-between;

          align-items: flex-end;

          color: white;

          z-index: 5;
        }

        .project-visual-year {
          font-size: 70px;

          font-weight: 950;

          line-height: .7;

          letter-spacing: -5px;

          text-shadow:
            0 4px 20px
            rgba(0,0,0,.3);
        }

        .project-visual-mini {
          font-size: 8px;

          letter-spacing: 2px;

          opacity: .75;

          text-align: right;

          line-height: 1.4;
        }

        /* =====================================================
           INFO PANEL
        ===================================================== */

        .project-info {
          position: relative;

          padding: 38px;

          border-radius: 25px;

          background:
            rgba(
              255,255,255,.72
            );

          border:
            1px solid
            rgba(0,0,0,.08);

          backdrop-filter:
            blur(15px);

          overflow: hidden;

          min-height: 560px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-info::before {
          content: "";

          position: absolute;

          width: 220px;
          height: 220px;

          right: -110px;
          bottom: -110px;

          border-radius: 50%;

          background: #5c4dff;

          opacity: .08;

          transition:
            transform .8s
            cubic-bezier(.16,1,.3,1);
        }

        .project-info:hover::before {
          transform:
            scale(2.5);
        }

        .project-info-top {
          position: relative;

          display: flex;

          justify-content:
            space-between;
        }

        .project-info-category {
          font-size: 9px;

          font-weight: 900;

          letter-spacing: 2px;

          color: #888;
        }

        .project-info-index {
          font-size: 10px;

          font-weight: 900;
        }

        .project-title {
          position: relative;

          margin:
            60px 0 25px;

          font-size:
            clamp(
              45px,
              6vw,
              75px
            );

          line-height: .82;

          letter-spacing: -4px;

          font-weight: 950;
        }

        .project-title span {
          color: #5c4dff;
        }

        .project-description {
          position: relative;

          max-width: 480px;

          font-size: 12px;

          line-height: 1.9;

          color: #666;
        }

        /* =====================================================
           TECHNOLOGIES
        ===================================================== */

        .project-info-tech {
          position: relative;

          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 30px;
        }

        .project-info-tech span {
          padding:
            8px 12px;

          border-radius: 100px;

          background: #e7e7e5;

          font-size: 7px;

          font-weight: 900;

          letter-spacing: 1px;

          color: #555;

          transition: .3s ease;
        }

        .project-info-tech span:hover {
          background: #111;

          color: white;

          transform:
            translateY(-4px);
        }

        /* =====================================================
           VIEW PROJECT
        ===================================================== */

        .project-view {
          position: relative;

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          padding-top: 25px;

          margin-top: 25px;

          border-top:
            1px solid
            rgba(0,0,0,.1);

          cursor: pointer;

          user-select: none;
        }

        .project-view-text {
          font-size: 9px;

          font-weight: 900;

          letter-spacing: 2px;
        }

        .project-view-arrow {
          width: 45px;
          height: 45px;

          border-radius: 50%;

          background: #111;

          color: white;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 18px;

          transition:
            .5s
            cubic-bezier(
              .16,1,.3,1
            );
        }

        .project-view:hover
        .project-view-arrow {
          background: #5c4dff;

          transform:
            rotate(45deg)
            scale(1.1);
        }

        /* =====================================================
           DISABLED PROJECT
        ===================================================== */

        .project-view.disabled {
          cursor: default;

          opacity: .45;
        }

        .project-view.disabled:hover
        .project-view-arrow {
          background: #111;

          transform: none;
        }

        /* =====================================================
           PROJECT LIST
        ===================================================== */

        .project-list {
          max-width: 1200px;

          margin: 80px auto 0;

          display: grid;

          grid-template-columns:
            repeat(5,1fr);

          gap: 10px;
        }

        .project-list-card {
          position: relative;

          padding: 25px;

          min-height: 170px;

          background:
            rgba(255,255,255,.55);

          border:
            1px solid
            rgba(0,0,0,.08);

          border-radius: 17px;

          cursor: pointer;

          overflow: hidden;

          transition:
            .5s
            cubic-bezier(
              .16,1,.3,1
            );
        }

        .project-list-card:hover {
          transform:
            translateY(-8px);
        }

        .project-list-card.active {
          background: #111;

          color: white;
        }

        .project-list-number {
          font-size: 8px;

          font-weight: 900;

          color: #999;
        }

        .project-list-card.active
        .project-list-number {
          color: #aaa;
        }

        .project-list-title {
          margin-top: 35px;

          font-size: 17px;

          line-height: .9;

          font-weight: 950;

          letter-spacing: -1px;
        }

        .project-list-year {
          position: absolute;

          right: 20px;

          bottom: 20px;

          font-size: 8px;

          color: #999;
        }

        /* =====================================================
           BOTTOM
        ===================================================== */

        .projects-bottom {
          max-width: 1200px;

          margin: 130px auto 0;

          padding-top: 50px;

          border-top:
            1px solid
            rgba(0,0,0,.12);
        }

        .projects-bottom-title {
          font-size:
            clamp(
              45px,
              7vw,
              90px
            );

          font-weight: 950;

          letter-spacing: -5px;

          line-height: .85;
        }

        .projects-bottom-title span {
          color: #5c4dff;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .project-reveal {
          opacity: 0;

          transform:
            translateY(60px);

          transition:
            opacity 1s
            cubic-bezier(
              .16,1,.3,1
            ),

            transform 1s
            cubic-bezier(
              .16,1,.3,1
            );
        }

        .project-visible {
          opacity: 1;

          transform:
            translateY(0);
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 1100px) {

          .project-list {
            grid-template-columns:
              repeat(3,1fr);
          }

        }

        @media (max-width: 850px) {

          .projects-section {
            padding:
              90px 20px 100px;
          }

          .projects-header h1 {
            font-size: 70px;

            letter-spacing: -5px;
          }

          .projects-intro {
            flex-direction: column;

            align-items:
              flex-start;
          }

          .project-main {
            grid-template-columns: 1fr;
          }

          .project-visual,
          .project-info {
            min-height: 430px;
          }

          .project-list {
            grid-template-columns:
              repeat(2,1fr);
          }

          .project-visual-year {
            font-size: 55px;
          }

        }

        @media (max-width: 500px) {

          .projects-header h1 {
            font-size: 58px;
          }

          .project-visual {
            min-height: 360px;
          }

          .project-info {
            min-height: 480px;

            padding: 25px;
          }

          .project-title {
            font-size: 45px;

            margin-top: 45px;
          }

          .project-visual-year {
            font-size: 50px;
          }

          .project-tech-track {
            gap: 25px;
          }

          .project-list {
            grid-template-columns: 1fr;
          }

          .project-visual-top {
            top: 18px;

            left: 18px;

            right: 18px;
          }

          .project-visual-bottom {
            left: 18px;

            right: 18px;

            bottom: 18px;
          }

          .project-image-badge {
            left: 18px;

            top: 65px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .project-tech-track,
          .project-preview-image {
            animation: none;
          }

          .project-reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .projects-cursor {
            display: none;
          }

        }

      `}</style>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="projects-bg">
        PROJECTS
      </div>

      <div className="projects-cursor" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="projects-header project-reveal">

        <div className="projects-kicker">

          <span>03</span>

          <span className="projects-kicker-line" />

          <span>SELECTED WORK</span>

        </div>

        <h1>
          THINGS
          <br />

          <span className="projects-outline">
            I BUILT.
          </span>
        </h1>

        <div className="projects-intro">

          <p className="projects-intro-text">
            A collection of interfaces, dashboards and
            applications built with a focus on clean
            interaction, responsive design and meaningful
            user experiences.
          </p>

          <div className="projects-total">

            <strong>05</strong>

            PROJECTS

          </div>

        </div>

      </header>

      {/* =====================================================
          MOVING TECH STRIP
      ===================================================== */}

      <div className="project-tech-strip">

        <div className="project-tech-track">

          {[
            "REACT.JS",
            "JAVASCRIPT",
            "MATERIAL UI",
            "TAILWIND CSS",
            "DJANGO",
            "REST API",
            "CHART.JS",
            "GIT / GITHUB",

            "REACT.JS",
            "JAVASCRIPT",
            "MATERIAL UI",
            "TAILWIND CSS",
            "DJANGO",
            "REST API",
            "CHART.JS",
            "GIT / GITHUB",
          ].map((item, index) => (

            <div
              className="project-tech-item"
              key={index}
            >

              <span className="project-tech-dot" />

              {item}

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          SELECTOR
      ===================================================== */}

      <div className="project-selector project-reveal">

        <div className="project-selector-label">
          SELECT PROJECT
        </div>

        <div className="project-selector-buttons">

          {projects.map((item, index) => (

            <button
              key={item.number}

              className={`
                project-selector-button
                ${
                  activeProject === index
                    ? "active"
                    : ""
                }
              `}

              onClick={() =>
                setActiveProject(index)
              }
            >

              {item.number}

            </button>

          ))}

        </div>

      </div>

      {/* =====================================================
          MAIN PROJECT
      ===================================================== */}

      <div className="project-main project-reveal">

        {/* =====================================================
            PROJECT IMAGE
        ===================================================== */}

        <div
          className="project-visual"

          onMouseMove={handleTilt}

          onMouseLeave={resetTilt}

          onClick={openProject}
        >

          <img
            src={project.image}

            alt={`${project.title} ${project.subtitle}`}

            className="project-preview-image"
          />

          <div className="project-image-overlay" />

          <div className="project-visual-top">

            <span className="project-visual-number">
              PROJECT / {project.number}
            </span>

            <span className="project-visual-category">
              {project.category}
            </span>

          </div>

          <div className="project-image-badge">

            {project.url
              ? "OPEN PROJECT"
              : "PROJECT PREVIEW"}

          </div>

          <div className="project-visual-bottom">

            <div className="project-visual-year">
              {project.year}
            </div>

            <div className="project-visual-mini">
              SELECTED
              <br />
              WORK
            </div>

          </div>

        </div>

        {/* =====================================================
            INFORMATION
        ===================================================== */}

        <div className="project-info">

          <div>

            <div className="project-info-top">

              <span className="project-info-category">
                {project.category}
              </span>

              <span className="project-info-index">
                {project.number}/05
              </span>

            </div>

            <h2 className="project-title">

              {project.title}

              <br />

              <span>
                {project.subtitle}
              </span>

            </h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-info-tech">

              {project.tech.map((tech) => (

                <span key={tech}>
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* =====================================================
              EXPLORE PROJECT
          ===================================================== */}

          <div
            className={`project-view ${
              !project.url
                ? "disabled"
                : ""
            }`}

            onClick={openProject}
          >

            <span className="project-view-text">

              {project.url
                ? "EXPLORE PROJECT"
                : "PROJECT PREVIEW"}

            </span>

            <span className="project-view-arrow">
              ↗
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <div className="project-list project-reveal">

        {projects.map((item, index) => (

          <div
            key={item.number}

            className={`
              project-list-card
              ${
                activeProject === index
                  ? "active"
                  : ""
              }
            `}

            onClick={() =>
              setActiveProject(index)
            }
          >

            <div className="project-list-number">
              {item.number}
            </div>

            <div className="project-list-title">

              {item.title}

              <br />

              {item.subtitle}

            </div>

            <div className="project-list-year">
              {item.year}
            </div>

          </div>

        ))}

      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <div className="projects-bottom project-reveal">

        <div className="projects-bottom-title">

          IDEAS

          <br />

          <span>
            INTO INTERFACES.
          </span>

        </div>

      </div>

    </section>
  );
};

export default Projects;