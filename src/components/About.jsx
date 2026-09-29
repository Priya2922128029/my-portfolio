
import React from "react";

function About() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "REST API",
    "Git / GitHub",
  ];

  return (
    <section className="creative-about" id="about">
      <style>{`
        /* =====================================================
           MAIN
        ===================================================== */

        .creative-about {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 20%,
              rgba(255,255,255,.95),
              transparent 27%
            ),
            #f1f3f5;

          padding: 120px 6% 100px;
          color: #111;
          box-sizing: border-box;
        }

        .about-container {
          position: relative;
          z-index: 5;
          max-width: 1400px;
          margin: auto;
        }


        /* =====================================================
           BACKGROUND WORD
        ===================================================== */

        .about-bg-word {
          position: absolute;
          top: 60px;
          left: -20px;

          font-size: clamp(150px, 22vw, 330px);
          font-weight: 900;
          letter-spacing: -15px;
          line-height: .7;

          color: rgba(255,255,255,.7);

          white-space: nowrap;
          pointer-events: none;
          user-select: none;

          animation: bgWordMove 9s ease-in-out infinite;
        }

        @keyframes bgWordMove {
          0%,100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(35px);
          }
        }


        /* =====================================================
           DECORATIVE DOTS
        ===================================================== */

        .about-dot {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #5528e8;

          animation: dotFloat 4s ease-in-out infinite;
        }

        .about-dot-one {
          top: 20%;
          left: 7%;
        }

        .about-dot-two {
          top: 35%;
          right: 8%;
          animation-delay: 1s;
        }

        .about-dot-three {
          bottom: 15%;
          left: 45%;
          animation-delay: 2s;
        }

        @keyframes dotFloat {
          0%,100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-20px) scale(1.4);
          }
        }


        /* =====================================================
           TOP BAR
        ===================================================== */

        .about-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 70px;
        }

        .about-number {
          display: flex;
          align-items: center;
          gap: 12px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;

          color: #777;
        }

        .about-number-line {
          width: 40px;
          height: 1px;
          background: #111;
        }

        .about-scroll {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 9px;
          letter-spacing: 2px;

          color: #888;

          animation: scrollBounce 2s ease-in-out infinite;
        }

        .about-scroll-arrow {
          font-size: 15px;
        }

        @keyframes scrollBounce {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(5px);
          }
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .about-heading {
          position: relative;

          margin: 0;

          max-width: 1100px;

          font-size: clamp(65px, 9vw, 140px);

          line-height: .8;

          letter-spacing: -8px;

          font-weight: 900;
        }

        .about-heading-line {
          display: block;
          overflow: hidden;
        }

        .about-heading-inner {
          display: inline-block;

          animation:
            titleReveal
            1s
            cubic-bezier(.16,1,.3,1)
            both;
        }

        .about-heading-line:nth-child(2)
        .about-heading-inner {
          animation-delay: .15s;
        }

        .about-heading-line:nth-child(3)
        .about-heading-inner {
          animation-delay: .3s;
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform:
              translateY(120px)
              rotate(3deg);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              rotate(0);
          }
        }

        .about-outline {
          color: transparent;

          -webkit-text-stroke: 2px #111;

          transition: color .5s ease;
        }

        .about-outline:hover {
          color: #111;
        }


        /* =====================================================
           SIGNATURE
        ===================================================== */

        .about-script {
          position: absolute;

          left: 52%;
          bottom: -45px;

          z-index: 5;

          color: #5528e8;

          font-family:
            "Brush Script MT",
            "Segoe Script",
            cursive;

          font-size: clamp(45px, 6vw, 90px);

          font-weight: 500;

          transform: rotate(-5deg);

          animation:
            scriptFloat
            3.5s
            ease-in-out
            infinite;

          white-space: nowrap;
        }

        @keyframes scriptFloat {
          0%,100% {
            transform:
              rotate(-5deg)
              translateY(0);
          }

          50% {
            transform:
              rotate(-2deg)
              translateY(-9px);
          }
        }


        /* =====================================================
           ORBIT
        ===================================================== */

        .about-orbit {
          position: absolute;

          right: 8%;
          top: 180px;

          width: 170px;
          height: 170px;

          border:
            1px solid rgba(17,17,17,.15);

          border-radius: 50%;

          animation:
            orbitRotate
            15s
            linear
            infinite;
        }

        .about-orbit::before {
          content: "";

          position: absolute;

          inset: 18px;

          border:
            1px dashed rgba(17,17,17,.18);

          border-radius: 50%;
        }

        .about-orbit::after {
          content:
            "CREATIVE • CODE • DESIGN •";

          position: absolute;

          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        /* =====================================================
           NEW INTERACTIVE SKILL SHOWCASE
        ===================================================== */

        .about-tech-showcase {
          position: relative;

          width: 100%;
          min-height: 170px;

          margin-top: 100px;

          padding: 28px 0;

          border-top:
            1px solid rgba(0,0,0,.1);

          border-bottom:
            1px solid rgba(0,0,0,.1);

          overflow: hidden;
        }


        /* subtle moving background */

        .tech-line {
          position: absolute;

          left: 0;
          right: 0;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(85,40,232,.25),
              transparent
            );

          animation: techLineMove 5s linear infinite;
        }

        .tech-line-one {
          top: 35%;
        }

        .tech-line-two {
          top: 70%;

          animation-delay: 2s;
        }

        @keyframes techLineMove {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(100%);
          }
        }


        .tech-label {
          position: relative;

          margin-bottom: 20px;

          font-size: 9px;

          letter-spacing: 3px;

          font-weight: 800;

          color: #888;
        }


        .tech-label span {
          color: #5528e8;
        }


        /* skill container */

        .tech-skills {
          position: relative;

          display: flex;

          flex-wrap: wrap;

          align-items: center;

          justify-content: center;

          gap: 13px;

          z-index: 3;
        }


        /* skill pill */

        .tech-pill {
          position: relative;

          padding: 12px 20px;

          border:
            1px solid rgba(0,0,0,.12);

          border-radius: 100px;

          background:
            rgba(255,255,255,.65);

          backdrop-filter: blur(10px);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .5px;

          color: #333;

          cursor: default;

          transition:
            transform .4s cubic-bezier(.16,1,.3,1),
            background .4s ease,
            color .4s ease,
            border .4s ease,
            box-shadow .4s ease;

          animation:
            skillAppear
            .8s
            cubic-bezier(.16,1,.3,1)
            both;
        }

        .tech-pill:nth-child(1) {
          animation-delay: .1s;
        }

        .tech-pill:nth-child(2) {
          animation-delay: .18s;
        }

        .tech-pill:nth-child(3) {
          animation-delay: .26s;
        }

        .tech-pill:nth-child(4) {
          animation-delay: .34s;
        }

        .tech-pill:nth-child(5) {
          animation-delay: .42s;
        }

        .tech-pill:nth-child(6) {
          animation-delay: .50s;
        }

        .tech-pill:nth-child(7) {
          animation-delay: .58s;
        }

        .tech-pill:nth-child(8) {
          animation-delay: .66s;
        }

        @keyframes skillAppear {
          from {
            opacity: 0;

            transform:
              translateY(30px)
              scale(.8);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }


        /* floating animation */

        .tech-pill:nth-child(odd) {
          animation:
            skillAppear .8s both,
            pillFloat 5s ease-in-out 1.5s infinite;
        }

        .tech-pill:nth-child(even) {
          animation:
            skillAppear .8s both,
            pillFloatReverse 6s ease-in-out 1.5s infinite;
        }

        @keyframes pillFloat {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes pillFloatReverse {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(6px);
          }
        }


        /* hover */

        .tech-pill:hover {
          transform:
            translateY(-9px)
            rotate(-2deg)
            scale(1.05);

          background: #111;

          color: white;

          border-color: #111;

          box-shadow:
            0 18px 35px rgba(0,0,0,.15);
        }


        /* little dot */

        .tech-pill::before {
          content: "";

          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #5528e8;

          left: 8px;
          top: 8px;

          opacity: 0;

          transition: opacity .3s ease;
        }

        .tech-pill:hover::before {
          opacity: 1;
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .about-main-grid {
          display: grid;

          grid-template-columns:
            1.1fr
            .9fr;

          gap: 80px;

          margin-top: 100px;

          align-items: start;
        }


        /* =====================================================
           LEFT
        ===================================================== */

        .about-left-label {
          font-size: 10px;

          letter-spacing: 3px;

          font-weight: 800;

          color: #858585;

          margin-bottom: 22px;
        }

        .about-intro {
          max-width: 620px;

          font-size:
            clamp(27px, 3vw, 45px);

          line-height: 1.08;

          letter-spacing: -1.5px;

          font-weight: 700;

          margin: 0;
        }

        .about-intro-muted {
          color: #94989c;
        }

        .about-highlight {
          position: relative;

          display: inline-block;

          color: #111;
        }

        .about-highlight::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -5px;

          width: 100%;
          height: 3px;

          background: #5528e8;

          transform-origin: left;

          animation:
            underlineGrow
            1.5s
            ease
            both;
        }

        @keyframes underlineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }


        /* =====================================================
           SKILLS
        ===================================================== */

        .about-skills {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 42px;
        }

        .about-skill {
          position: relative;

          padding: 10px 16px;

          border:
            1px solid rgba(0,0,0,.1);

          border-radius: 30px;

          background:
            rgba(255,255,255,.6);

          color: #555;

          font-size: 10px;

          font-weight: 700;

          transition:
            transform .35s ease,
            background .35s ease,
            color .35s ease,
            box-shadow .35s ease;
        }

        .about-skill:hover {
          transform:
            translateY(-7px)
            rotate(-3deg);

          background: #111;

          color: white;

          box-shadow:
            0 15px 25px rgba(0,0,0,.12);
        }


        /* =====================================================
           RIGHT STATS
        ===================================================== */

        .about-right {
          position: relative;
        }

        .about-stat-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 12px;
        }

        .about-stat {
          position: relative;

          min-height: 190px;

          padding: 25px;

          border-radius: 18px;

          background:
            rgba(255,255,255,.72);

          border:
            1px solid rgba(255,255,255,.9);

          box-shadow:
            0 15px 40px rgba(0,0,0,.05);

          overflow: hidden;

          transition:
            transform .4s ease,
            box-shadow .4s ease;
        }

        .about-stat:hover {
          transform:
            translateY(-10px)
            rotate(-1deg);

          box-shadow:
            0 25px 55px rgba(0,0,0,.12);
        }

        .about-stat.dark {
          background: #111;
          color: white;
        }

        .about-stat-number {
          font-size: 42px;

          font-weight: 900;

          letter-spacing: -2px;
        }

        .about-stat-label {
          position: absolute;

          left: 25px;
          bottom: 25px;

          font-size: 9px;

          letter-spacing: 2px;

          text-transform: uppercase;

          font-weight: 700;

          color: #888;
        }

        .about-stat.dark
        .about-stat-label {
          color: #aaa;
        }

        .about-stat-circle {
          position: absolute;

          width: 110px;
          height: 110px;

          right: -35px;
          top: -35px;

          border-radius: 50%;

          border:
            1px solid rgba(0,0,0,.1);

          transition:
            transform .6s ease;
        }

        .about-stat:hover
        .about-stat-circle {
          transform:
            scale(1.5)
            rotate(30deg);
        }

        .about-stat.dark
        .about-stat-circle {
          border-color:
            rgba(255,255,255,.15);
        }


        /* =====================================================
           INFO
        ===================================================== */

        .about-info {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 12px;

          margin-top: 12px;
        }

        .about-info-card {
          padding: 23px;

          min-height: 125px;

          border-radius: 16px;

          background: #e5e7e9;

          transition:
            transform .35s ease;
        }

        .about-info-card:hover {
          transform:
            translateX(7px);
        }

        .about-info-label {
          font-size: 8px;

          font-weight: 800;

          letter-spacing: 2px;

          color: #777;
        }

        .about-info-title {
          margin-top: 12px;

          font-size: 14px;

          font-weight: 800;
        }

        .about-info-sub {
          margin-top: 5px;

          color: #777;

          font-size: 10px;

          line-height: 1.5;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .about-bottom {
          position: relative;

          margin-top: 110px;

          padding-top: 30px;

          border-top:
            1px solid rgba(0,0,0,.1);
        }

        .about-bottom-text {
          margin: 0;

          font-size:
            clamp(22px, 3.2vw, 44px);

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -1.5px;
        }

        .about-bottom-text span {
          color: #8b8f93;
        }

        .about-bottom-dot {
          position: absolute;

          right: 3%;
          top: 30px;

          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #5528e8;

          animation:
            pulseDot
            2s
            infinite;
        }

        @keyframes pulseDot {
          0% {
            box-shadow:
              0 0 0 0 rgba(85,40,232,.4);
          }

          70% {
            box-shadow:
              0 0 0 15px rgba(85,40,232,0);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(85,40,232,0);
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .creative-about {
            padding:
              100px 5% 80px;
          }

          .about-main-grid {
            gap: 45px;
          }

          .about-orbit {
            right: 3%;

            width: 130px;
            height: 130px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {

          .creative-about {
            padding:
              85px 20px 70px;
          }

          .about-bg-word {
            top: 70px;

            font-size: 32vw;

            letter-spacing: -5px;
          }

          .about-topbar {
            margin-bottom: 55px;
          }

          .about-scroll {
            display: none;
          }

          .about-heading {
            font-size:
              clamp(52px, 14vw, 80px);

            letter-spacing: -4px;
          }

          .about-script {
            position: relative;

            left: 20%;

            bottom: auto;

            margin-top: 25px;

            font-size: 48px;
          }

          .about-orbit {
            display: none;
          }


          /* NEW MOBILE TECH AREA */

          .about-tech-showcase {
            margin-top: 65px;

            padding:
              25px 0;
          }

          .tech-skills {
            justify-content: flex-start;

            gap: 9px;
          }

          .tech-pill {
            padding:
              10px 15px;

            font-size: 10px;
          }


          .about-main-grid {
            display: flex;

            flex-direction: column;

            gap: 60px;

            margin-top: 70px;
          }

          .about-intro {
            font-size: 28px;
          }

          .about-stat-grid {
            width: 100%;
          }

          .about-stat {
            min-height: 145px;

            padding: 20px;
          }

          .about-stat-number {
            font-size: 32px;
          }

          .about-stat-label {
            left: 20px;

            bottom: 20px;
          }

          .about-info {
            grid-template-columns: 1fr;
          }

          .about-bottom {
            margin-top: 75px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .creative-about {
            padding-left: 17px;
            padding-right: 17px;
          }

          .about-heading {
            font-size: 48px;

            letter-spacing: -3px;
          }

          .about-script {
            font-size: 40px;

            left: 10%;
          }

          .about-intro {
            font-size: 25px;
          }

          .about-stat {
            min-height: 130px;

            padding: 17px;
          }

          .about-stat-number {
            font-size: 27px;
          }

          .about-stat-label {
            left: 17px;

            bottom: 17px;

            font-size: 8px;
          }

          .tech-pill {
            padding:
              9px 13px;

            font-size: 9px;
          }
        }

      `}</style>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="about-bg-word">
        ABOUT
      </div>

      <div className="about-dot about-dot-one"></div>
      <div className="about-dot about-dot-two"></div>
      <div className="about-dot about-dot-three"></div>


      <div className="about-container">


        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="about-topbar">

          <div className="about-number">

            <span className="about-number-line"></span>

            01 / ABOUT ME

          </div>


          <div className="about-scroll">

            KEEP SCROLLING

            <span className="about-scroll-arrow">
              ↓
            </span>

          </div>

        </div>


        {/* =====================================================
            TITLE
        ===================================================== */}

        <h2 className="about-heading">

          <span className="about-heading-line">

            <span className="about-heading-inner">
              CODE.
            </span>

          </span>


          <span className="about-heading-line">

            <span className="about-heading-inner about-outline">
              CREATE.
            </span>

          </span>


          <span className="about-heading-line">

            <span className="about-heading-inner">
              EXPERIENCE.
            </span>

          </span>


          <span className="about-script">
            Priyadharshini
          </span>

        </h2>


        {/* =====================================================
            ORBIT
        ===================================================== */}

        <div className="about-orbit"></div>


        {/* =====================================================
            NEW SKILL SHOWCASE
        ===================================================== */}

        <div className="about-tech-showcase">

          <div className="tech-line tech-line-one"></div>
          <div className="tech-line tech-line-two"></div>


          <div className="tech-label">
            WHAT I <span>WORK WITH</span>
          </div>


          <div className="tech-skills">

            {skills.map((skill, index) => (
              <div
                className="tech-pill"
                key={index}
              >
                {skill}
              </div>
            ))}

          </div>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="about-main-grid">


          {/* LEFT */}

          <div>

            <div className="about-left-label">
              WHO I AM
            </div>


            <h3 className="about-intro">

              I'm{" "}

              <span className="about-highlight">
                Priyadharshini S
              </span>

              , a Computer Science graduate building modern
              interfaces with{" "}

              <span className="about-intro-muted">
                React.js.
              </span>

            </h3>


            <div className="about-skills">

              <span className="about-skill">
                React.js
              </span>

              <span className="about-skill">
                JavaScript
              </span>

              <span className="about-skill">
                HTML5
              </span>

              <span className="about-skill">
                CSS3
              </span>

              <span className="about-skill">
                Tailwind CSS
              </span>

              <span className="about-skill">
                Material UI
              </span>

              <span className="about-skill">
                REST API
              </span>

              <span className="about-skill">
                Git / GitHub
              </span>

            </div>

          </div>


          {/* RIGHT */}

          <div className="about-right">


            <div className="about-stat-grid">


              <div className="about-stat">

                <div className="about-stat-number">
                  2025
                </div>

                <div className="about-stat-label">
                  Computer Science Graduate
                </div>

                <div className="about-stat-circle"></div>

              </div>


              <div className="about-stat dark">

                <div className="about-stat-number">
                  React
                </div>

                <div className="about-stat-label">
                  Primary Technology
                </div>

                <div className="about-stat-circle"></div>

              </div>

            </div>


            <div className="about-info">


              <div className="about-info-card">

                <div className="about-info-label">
                  EDUCATION
                </div>

                <div className="about-info-title">
                  B.Sc. Computer Science
                </div>

                <div className="about-info-sub">
                  2022 — 2025
                </div>

              </div>


              <div className="about-info-card">

                <div className="about-info-label">
                  FOCUS
                </div>

                <div className="about-info-title">
                  Frontend & UI Development
                </div>

                <div className="about-info-sub">
                  Responsive · Interactive · User-focused
                </div>

              </div>


            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="about-bottom">

          <div className="about-bottom-dot"></div>

          <p className="about-bottom-text">

            Turning{" "}

            <span>
              ideas
            </span>

            {" "}into clean, responsive &{" "}

            <span>
              interactive experiences.
            </span>

          </p>

        </div>


      </div>

    </section>
  );
}

export default About;
