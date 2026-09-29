import React from "react";

function Hero() {
  return (
    <section className="hero-reference" id="home">
      <style>{`

        /* =====================================================
           HERO
        ===================================================== */

        .hero-reference {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 68px);

          overflow: hidden;

          background: #d4dbe3;

          display: flex;
          align-items: center;

          padding: 55px 4.5% 45px;

          box-sizing: border-box;
        }


        /* =====================================================
           BIG BACKGROUND TEXT
        ===================================================== */

        .hero-bg-text {
          position: absolute;

          top: 55px;
          left: 50%;

          transform: translateX(-50%);

          width: 100%;

          text-align: center;

          color: rgba(255, 255, 255, 0.58);

          font-family: Arial, Helvetica, sans-serif;

          font-size: clamp(100px, 15vw, 225px);

          font-weight: 900;

          letter-spacing: -10px;

          line-height: 0.8;

          white-space: nowrap;

          pointer-events: none;

          z-index: 0;
        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .hero-reference-container {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1450px;

          min-height: 650px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.95fr
            1.1fr
            0.6fr;

          align-items: center;

          column-gap: 25px;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .hero-reference-content {
          position: relative;

          z-index: 10;

          width: 100%;

          max-width: 580px;

          margin-top: 135px;
        }


        /* =====================================================
           GREETING
        ===================================================== */

        .hero-greeting {
          margin: 0 0 12px 2px;

          color: #3e444b;

          font-family: Arial, Helvetica, sans-serif;

          font-size: 12px;

          line-height: 1.4;

          font-weight: 400;

          text-align: left;
        }


        .hero-greeting strong {
          color: #17191b;

          font-weight: 700;
        }


        /* =====================================================
           MAIN TITLE
        ===================================================== */

        .hero-reference-title {
          margin: 0;

          color: #090a0b;

          font-family: Arial, Helvetica, sans-serif;

          font-size: clamp(52px, 5.2vw, 82px);

          font-weight: 900;

          line-height: 0.91;

          letter-spacing: -4.5px;

          text-align: left;
        }


        .hero-reference-title span {
          color: #090a0b;
        }


        /* =====================================================
           CENTER VISUAL
        ===================================================== */

        .hero-reference-visual {
          position: relative;

          width: 100%;

          height: 650px;

          display: flex;

          align-items: flex-end;

          justify-content: center;

          isolation: isolate;
        }


        /* =====================================================
           MODERN BACKGROUND PANEL
        ===================================================== */

        .hero-reference-visual::before {
          content: "";

          position: absolute;

          z-index: 0;

          left: 50%;

          top: 45px;

          transform: translateX(-50%);

          width: 520px;

          height: 560px;

          border-radius: 35px;

          background:
            linear-gradient(
              135deg,
              rgba(139, 92, 246, 0.13),
              rgba(139, 92, 246, 0.025) 45%,
              rgba(255, 255, 255, 0.18)
            );

          border:
            1px solid
            rgba(255, 255, 255, 0.55);

          box-shadow:
            0 30px 80px
            rgba(100, 90, 120, 0.08);

          pointer-events: none;
        }


        /* =====================================================
           SUBTLE GRID
        ===================================================== */

        .hero-reference-visual::after {
          content: "";

          position: absolute;

          z-index: 1;

          left: 50%;

          top: 70px;

          transform: translateX(-50%);

          width: 470px;

          height: 510px;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.22) 1px,
              transparent 1px
            );

          background-size: 45px 45px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );

          opacity: 0.45;

          pointer-events: none;
        }


        /* =====================================================
           OLD CIRCLE
           KEPT HIDDEN
        ===================================================== */

        .hero-orange-circle {
          display: none;
        }


        /* =====================================================
           MODERN PHOTO FRAME
        ===================================================== */

        .hero-photo-holder {
          position: absolute;

          z-index: 4;

          left: 50%;

          bottom: 0;

          transform: translateX(-50%);

          width: 475px;

          height: 590px;

          overflow: hidden;

          display: flex;

          justify-content: center;

          align-items: flex-start;

          /* NO CIRCLE */

          clip-path: none;

          /* ASYMMETRIC EDITORIAL SHAPE */

          border-radius:
            42px
            42px
            145px
            42px;

          background: #c5ccd4;

          border:
            1px solid
            rgba(255, 255, 255, 0.7);

          box-shadow:
            22px 22px 0
            rgba(139, 92, 246, 0.12),

            0 25px 60px
            rgba(40, 45, 55, 0.16);
        }


        /* =====================================================
           OFFSET PURPLE FRAME
        ===================================================== */

        .hero-photo-holder::before {
          content: "";

          position: absolute;

          z-index: 6;

          inset: 10px;

          border:
            1px solid
            rgba(139, 92, 246, 0.28);

          border-radius:
            34px
            34px
            120px
            34px;

          pointer-events: none;
        }


        /* =====================================================
           DECORATIVE CORNER
        ===================================================== */

        .hero-photo-holder::after {
          content: "";

          position: absolute;

          z-index: 7;

          right: 22px;

          bottom: 22px;

          width: 55px;

          height: 55px;

          border-right:
            2px solid
            #8b5cf6;

          border-bottom:
            2px solid
            #8b5cf6;

          border-radius:
            0 0 18px 0;

          opacity: 0.85;

          pointer-events: none;
        }


        /* =====================================================
           PROFILE IMAGE
        ===================================================== */

        .hero-reference-image {
          position: relative;

          z-index: 2;

          display: block;

          width: 475px;

          height: 600px;

          object-fit: cover;

          object-position: center 7%;

          filter:
            grayscale(82%)
            contrast(1.08)
            brightness(1.03);

          opacity: 0.94;

          mix-blend-mode: normal;
        }


        /* =====================================================
           SOFT PHOTO FADE
        ===================================================== */

        .hero-photo-fade {
          position: absolute;

          z-index: 5;

          left: 0;

          bottom: 0;

          width: 100%;

          height: 170px;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              rgba(212, 219, 227, 0) 0%,

              rgba(212, 219, 227, 0.08) 30%,

              rgba(212, 219, 227, 0.65) 78%,

              #d4dbe3 100%
            );
        }


        /* =====================================================
           FLOATING LABELS
        ===================================================== */

        .hero-floating-label {
          position: absolute;

          z-index: 12;

          padding: 10px 17px;

          border-radius: 30px;

          background: #111;

          color: #fff;

          font-size: 10px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-weight: 600;

          line-height: 1;

          box-shadow:
            0 12px 25px
            rgba(0, 0, 0, 0.16);

          white-space: nowrap;

          backdrop-filter: blur(8px);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .hero-floating-label:hover {
          box-shadow:
            0 15px 30px
            rgba(0, 0, 0, 0.22);
        }


        .hero-label-one {
          top: 155px;

          left: 5px;

          transform: rotate(-8deg);
        }


        .hero-label-two {
          top: 80px;

          right: 10px;

          transform: rotate(8deg);
        }


        /* =====================================================
           RIGHT CARD
        ===================================================== */

       .hero-card-description {
  margin: 14px 0 0;

  color: #70767d;

  font-size: 11px;

  line-height: 1.6;

  font-weight: 400;
}


.hero-card-footer {
  margin-top: 22px;

  padding-top: 16px;

  border-top: 1px solid rgba(0, 0, 0, 0.08);

  display: flex;

  flex-direction: column;

  gap: 11px;
}


.hero-email {
  display: inline-block;

  margin: 0;

  color: #45494e;

  font-size: 9px;

  text-decoration: none;

  transition: color 0.25s ease;
}


.hero-email:hover {
  color: #6d28d9;

  text-decoration: underline;

  text-underline-offset: 3px;
}


.hero-availability {
  display: inline-flex;

  align-items: center;

  gap: 7px;

  width: fit-content;

  padding: 6px 10px;

  border-radius: 20px;

  background: #f3f4f4;

  color: #4c5359;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.8px;

  text-transform: uppercase;
}


.availability-dot {
  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: #38a169;

  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.12);
}



        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .hero-reference {
            padding-left: 3%;
            padding-right: 3%;
          }


          .hero-reference-container {
            grid-template-columns:
              0.9fr
              1fr
              0.52fr;

            column-gap: 12px;
          }


          .hero-reference-title {
            font-size:
              clamp(48px, 5.4vw, 72px);
          }


          .hero-reference-visual::before {
            width: 460px;
            height: 540px;
          }


          .hero-reference-visual::after {
            width: 420px;
            height: 490px;
          }


          .hero-photo-holder {
            width: 430px;
            height: 555px;

            border-radius:
              38px
              38px
              125px
              38px;
          }


          .hero-reference-image {
            width: 430px;
            height: 565px;
          }


          .hero-signature {
            width: 510px;

            font-size: 56px;
          }


          .hero-info-card {
            max-width: 240px;
          }
        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 950px) {

          .hero-reference {
            min-height: auto;

            padding:
              80px
              4%
              100px;
          }


          .hero-reference-container {
            grid-template-columns: 1fr 1fr;

            min-height: auto;
          }


          .hero-reference-content {
            margin-top: 55px;
          }


          .hero-info-card {
            display: none;
          }


          .hero-reference-visual {
            height: 570px;
          }


          .hero-reference-visual::before {
            width: 430px;
            height: 500px;
          }


          .hero-reference-visual::after {
            width: 390px;
            height: 455px;
          }


          .hero-photo-holder {
            width: 400px;
            height: 525px;
          }


          .hero-reference-image {
            width: 400px;
            height: 535px;
          }


          .hero-bg-text {
            top: 50px;

            font-size: 17vw;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .hero-reference {
            min-height: auto;

            padding:
              85px
              20px
              65px;
          }


          .hero-bg-text {
            top: 65px;

            font-size: 24vw;

            letter-spacing: -4px;
          }


          .hero-reference-container {
            display: flex;

            flex-direction: column;

            gap: 25px;

            align-items: stretch;
          }


          /* =================================================
             LEFT
          ================================================= */

          .hero-reference-content {
            width: 100%;

            max-width: 100%;

            margin-top: 45px;
          }


          .hero-greeting {
            font-size: 11px;

            margin-bottom: 10px;
          }


          .hero-reference-title {
            font-size:
              clamp(43px, 13.5vw, 66px);

            line-height: 0.93;

            letter-spacing: -3px;
          }


          /* =================================================
             VISUAL
          ================================================= */

          .hero-reference-visual {
            width: 100%;

            height: 450px;

            margin-top: 5px;
          }


          /* BACKGROUND PANEL */

          .hero-reference-visual::before {
            width: 320px;

            height: 390px;

            top: 30px;

            border-radius: 28px;
          }


          /* GRID */

          .hero-reference-visual::after {
            width: 290px;

            height: 350px;

            top: 50px;

            background-size: 35px 35px;
          }


          /* =================================================
             PHOTO
          ================================================= */

          .hero-photo-holder {
            width: 315px;

            height: 420px;

            bottom: 0;

            border-radius:
              30px
              30px
              95px
              30px;

            box-shadow:
              14px 14px 0
              rgba(139, 92, 246, 0.12),

              0 20px 45px
              rgba(40, 45, 55, 0.14);
          }


          .hero-photo-holder::before {
            inset: 8px;

            border-radius:
              24px
              24px
              75px
              24px;
          }


          .hero-photo-holder::after {
            right: 15px;

            bottom: 15px;

            width: 40px;

            height: 40px;
          }


          .hero-reference-image {
            width: 315px;

            height: 425px;

            object-position:
              center 6%;
          }


          .hero-photo-fade {
            width: 100%;

            height: 120px;
          }


          /* =================================================
             LABELS
          ================================================= */

          .hero-floating-label {
            padding: 8px 13px;

            font-size: 9px;
          }


          .hero-label-one {
            top: 105px;

            left: 2px;
          }


          .hero-label-two {
            top: 60px;

            right: 2px;
          }


          /* =================================================
             CARD
          ================================================= */

          .hero-info-card {
            display: block;

            max-width: 100%;

            margin-top: 0;
          }


         

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .hero-reference {
            padding-left: 16px;

            padding-right: 16px;
          }


          .hero-reference-title {
            font-size: 41px;

            letter-spacing: -2px;
          }


          .hero-reference-visual {
            height: 405px;
          }


          /* BACKGROUND */

          .hero-reference-visual::before {
            width: 285px;

            height: 345px;

            border-radius: 25px;
          }


          .hero-reference-visual::after {
            width: 260px;

            height: 315px;

            background-size: 30px 30px;
          }


          /* PHOTO */

          .hero-photo-holder {
            width: 285px;

            height: 380px;

            border-radius:
              28px
              28px
              85px
              28px;
          }


          .hero-photo-holder::before {
            inset: 7px;

            border-radius:
              22px
              22px
              68px
              22px;
          }


          .hero-reference-image {
            width: 285px;

            height: 385px;
          }


          .hero-photo-fade {
            width: 100%;
          }


          /* LABELS */

          .hero-label-one {
            top: 95px;

            left: -2px;
          }


          .hero-label-two {
            top: 52px;

            right: -2px;
          }
        }


        /* =====================================================
           REDUCE MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-floating-label,
          .hero-tech-row span {
            transition: none;
          }
        }

      `}</style>


      {/* =====================================================
          BACKGROUND WORD
      ===================================================== */}

      <div className="hero-bg-text">
        DEVELOPER
      </div>


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="hero-reference-container">


        {/* =================================================
            LEFT
        ================================================= */}

        <div className="hero-reference-content">

          <p className="hero-greeting">
            Hi 👋, I'm <strong>Priyadharshini</strong>
          </p>


          <h1 className="hero-reference-title">

            FRONTEND

            <br />

            DEVELOPER.

            <br />

            {/* <span>
              UI/UX & WEB.
            </span> */}

          </h1>

        </div>


        {/* =================================================
            CENTER PHOTO
        ================================================= */}

        <div className="hero-reference-visual">


          {/* OLD CIRCLE REMOVED */}

          {/* <div className="hero-orange-circle"></div> */}


          {/* =================================================
              FLOATING LABELS
          ================================================= */}

          {/* <div className="hero-floating-label hero-label-one">
            React.js
          </div>


          <div className="hero-floating-label hero-label-two">
            Frontend
          </div> */}


          {/* =================================================
              PHOTO
          ================================================= */}

          <div className="hero-photo-holder">

            <img
              src="/images/profile.png"
              alt="Priyadharshini"
              className="hero-reference-image"
            />


            <div className="hero-photo-fade"></div>

          </div>

        </div>


        {/* =================================================
            RIGHT CARD
        ================================================= */}

       <div className="hero-info-card">

  <p className="hero-card-title">
    FRONTEND DEVELOPER
  </p>

  <h3>
    Crafting Clean &<br />
    Engaging Digital<br />
    Experiences.
  </h3>

  <p className="hero-card-description">
    Focused on building responsive interfaces
    with React.js and modern web technologies.
  </p>

  <div className="hero-card-footer">

    <a
      href="mailto:priyakumar0415.s@gmail.com"
      className="hero-email"
    >
      priyakumar0415.s@gmail.com
    </a>

    <span className="hero-availability">
      <span className="availability-dot"></span>
      Open to Work
    </span>

  </div>

</div>

      </div>



    </section>
  );
}

export default Hero;