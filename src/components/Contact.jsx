import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           MAIN
        ========================= */

        .contact-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f5f6f8;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
          padding: 110px 7% 70px;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(108, 76, 255, 0.08);
          top: -180px;
          right: -120px;
          animation: contactBlob 7s ease-in-out infinite;
        }

        .contact-page::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(108, 76, 255, 0.05);
          bottom: -130px;
          left: -100px;
          animation: contactBlobReverse 8s ease-in-out infinite;
        }

        @keyframes contactBlob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-30px, 25px) scale(1.12);
          }
        }

        @keyframes contactBlobReverse {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(25px, -20px);
          }
        }

        .contact-container {
          position: relative;
          z-index: 2;
          max-width: 1150px;
          margin: 0 auto;
        }

        /* =========================
           HEADER
        ========================= */

        .contact-header {
          margin-bottom: 65px;
          animation: contactReveal 0.9s ease both;
        }

        .contact-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #6c4cff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .contact-label::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #6c4cff;
          display: block;
        }

        .contact-header h1 {
          margin: 0;
          max-width: 750px;
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.9;
          letter-spacing: -6px;
          font-weight: 900;
          color: #111111;
        }

        .contact-header h1 span {
          color: transparent;
          -webkit-text-stroke: 1.5px #111111;
        }

        .contact-header p {
          max-width: 570px;
          margin: 25px 0 0;
          color: #777b82;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           CONTACT LAYOUT
        ========================= */

        .contact-content {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 55px;
          align-items: stretch;
        }

        /* =========================
           LEFT INTRO
        ========================= */

        .contact-intro {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 470px;
          padding: 35px 0;
        }

        .contact-intro-title {
          margin: 0 0 15px;
          font-size: 31px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .contact-intro-text {
          max-width: 380px;
          margin: 0;
          color: #777b82;
          font-size: 14px;
          line-height: 1.8;
        }

        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          width: fit-content;
          margin-top: 28px;
          padding: 9px 14px;
          border-radius: 30px;
          background: #ffffff;
          border: 1px solid #e7e7e9;
          color: #555;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .availability-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #35a66f;
          box-shadow: 0 0 0 4px rgba(53, 166, 111, 0.12);
          animation: availabilityPulse 2s infinite;
        }

        @keyframes availabilityPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(53, 166, 111, 0.35);
          }

          70% {
            box-shadow: 0 0 0 7px rgba(53, 166, 111, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(53, 166, 111, 0);
          }
        }

        /* =========================
           CONTACT CARDS
        ========================= */

        .contact-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .contact-card {
          position: relative;
          min-height: 175px;
          padding: 25px;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 18px 45px rgba(30, 30, 40, 0.06);
          backdrop-filter: blur(12px);
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
          animation: cardReveal 0.8s cubic-bezier(.16,1,.3,1) both;
        }

        .contact-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .contact-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .contact-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .contact-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 55px rgba(108, 76, 255, 0.13);
        }

        .contact-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          right: -45px;
          bottom: -45px;
          border-radius: 50%;
          background: rgba(108, 76, 255, 0.08);
          transition: transform 0.5s ease;
        }

        .contact-card:hover::after {
          transform: scale(1.7);
        }

        .contact-card-icon {
          position: relative;
          z-index: 2;
          width: 45px;
          height: 45px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0edff;
          color: #6c4cff;
          font-size: 17px;
          transition:
            transform 0.4s ease,
            background 0.4s ease,
            color 0.4s ease;
        }

        .contact-card:hover .contact-card-icon {
          transform: rotate(-8deg) scale(1.08);
          background: #6c4cff;
          color: #ffffff;
        }

        .contact-card-label {
          position: relative;
          z-index: 2;
          display: block;
          margin-top: 22px;
          color: #999da3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-card-value {
          position: relative;
          z-index: 2;
          display: block;
          margin-top: 7px;
          color: #27272a;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 700;
          text-decoration: none;
          word-break: break-word;
          transition: color 0.3s ease;
        }

        .contact-card-value:hover {
          color: #6c4cff;
        }

        /* =========================
           SOCIAL CARD
        ========================= */

        .contact-social-card {
          grid-column: span 2;
          min-height: 125px;
          padding: 25px;
          border-radius: 20px;
          background: #17151f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          box-shadow: 0 20px 45px rgba(20, 18, 30, 0.12);
          animation: cardReveal 0.8s cubic-bezier(.16,1,.3,1) 0.5s both;
        }

        .social-title {
          margin: 0 0 7px;
          font-size: 16px;
          font-weight: 800;
        }

        .social-subtitle {
          margin: 0;
          color: #9e9aa8;
          font-size: 10px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-links a {
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border 0.3s ease;
        }

        .social-links a:hover {
          background: #6c4cff;
          border-color: #6c4cff;
          transform: translateY(-5px);
        }

        /* =========================
           BOTTOM
        ========================= */

        .contact-bottom {
          margin-top: 75px;
          padding-top: 25px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999da3;
          font-size: 10px;
          letter-spacing: 0.5px;
        }

        .contact-arrow {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-arrow-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #6c4cff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.06);
          animation: arrowMove 1.8s ease-in-out infinite;
        }

        @keyframes arrowMove {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(5px);
          }
        }

        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .contact-page {
            padding: 90px 6% 60px;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .contact-intro {
            min-height: auto;
            padding: 10px 0 20px;
          }

          .contact-intro-text {
            max-width: 600px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .contact-page {
            padding: 75px 20px 45px;
          }

          .contact-header {
            margin-bottom: 45px;
          }

          .contact-header h1 {
            font-size: 56px;
            letter-spacing: -4px;
          }

          .contact-header p {
            font-size: 13px;
          }

          .contact-intro-title {
            font-size: 27px;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .contact-social-card {
            grid-column: span 1;
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-card {
            min-height: 160px;
          }

          .contact-bottom {
            margin-top: 55px;
            gap: 15px;
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 400px) {
          .contact-page {
            padding-left: 17px;
            padding-right: 17px;
          }

          .contact-header h1 {
            font-size: 48px;
          }

          .contact-card-value {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="contact-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="contact-header">
          <span className="contact-label">
            Contact
          </span>

          <h1>
            Let's <span>Connect.</span>
          </h1>

          <p>
            Looking for a frontend developer or want to connect?
            You can reach me through any of the details below.
          </p>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="contact-content">

          {/* =========================
              LEFT
          ========================= */}

          <div className="contact-intro">

            <div>
              <h2 className="contact-intro-title">
                Have an opportunity?
                <br />
                Let's talk.
              </h2>

              <p className="contact-intro-text">
                I'm open to frontend development opportunities,
                collaborations, and interesting projects.
              </p>

              <div className="contact-availability">
                <span className="availability-dot"></span>
                Available for opportunities
              </div>
            </div>

          </div>

          {/* =========================
              RIGHT CONTACT CARDS
          ========================= */}

          <div className="contact-cards">

            {/* EMAIL */}

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>

              <span className="contact-card-label">
                Email
              </span>

              <a
                href="mailto:priyakumar0415.s@gmail.com"
                className="contact-card-value"
              >
                priyakumar0415.s@gmail.com
              </a>
            </div>

            {/* PHONE */}

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaPhone />
              </div>

              <span className="contact-card-label">
                Phone
              </span>

              <a
                href="tel:+918015339918"
                className="contact-card-value"
              >
                +91 80153 39918
              </a>
            </div>

            {/* LOCATION */}

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>

              <span className="contact-card-label">
                Location
              </span>

              <span className="contact-card-value">
                Karaikudi, Tamil Nadu
              </span>
            </div>

            {/* ROLE */}

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaGithub />
              </div>

              <span className="contact-card-label">
                Role
              </span>

              <span className="contact-card-value">
                Frontend Developer
              </span>
            </div>

            {/* SOCIAL */}

            <div className="contact-social-card">

              <div>
                <h3 className="social-title">
                  Find me online
                </h3>

                <p className="social-subtitle">
                  Connect with me through my professional profiles.
                </p>
              </div>

              <div className="social-links">

                <a
                  href="https://github.com/priya2922128029"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/priyadharshini-s-b0b78642a"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:priyakumar0415.s@gmail.com"
                  title="Email"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="contact-bottom">

          <span>
            © {new Date().getFullYear()} Priyadharshini S
          </span>

          <div className="contact-arrow">
            Let's build something meaningful

            <span className="contact-arrow-icon">
              <FaArrowRight />
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;