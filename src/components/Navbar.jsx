import React, { useEffect, useState } from "react";

import {
  GitHub,
  LinkedIn,
  MenuRounded,
  CloseRounded,
  ArrowOutwardRounded,
  PersonOutlineRounded,
  WorkOutlineRounded,
  FolderOpenRounded,
  MailOutlineRounded,
  HomeRounded,
} from "@mui/icons-material";


const navItems = [
  {
    id: "about",
    label: "About",
    icon: <PersonOutlineRounded />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <WorkOutlineRounded />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FolderOpenRounded />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <MailOutlineRounded />,
  },
];


function Navbar() {

  const [activeSection, setActiveSection] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [showFloatingNav, setShowFloatingNav] = useState(false);

  const [heroHeight, setHeroHeight] = useState(0);


  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

    setMenuOpen(false);
  };


  /* =========================================
     FIND HERO HEIGHT
  ========================================= */

  useEffect(() => {

    const updateHeroHeight = () => {

      const hero = document.getElementById("home");

      if (hero) {

        setHeroHeight(hero.offsetHeight);

      }

    };

    updateHeroHeight();

    window.addEventListener("resize", updateHeroHeight);

    return () => {
      window.removeEventListener("resize", updateHeroHeight);
    };

  }, []);


  /* =========================================
     SCROLL HANDLER
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY;

      /*
        Floating navigation appears
        after leaving Hero section.
      */

      setShowFloatingNav(
        scrollPosition > Math.max(heroHeight * 0.65, 350)
      );


      const sections = navItems
        .map((item) => ({
          ...item,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element);


      /*
        IMPORTANT:
        Before About starts, NOTHING is active.

        This prevents About from being
        highlighted while Hero is visible.
      */

      let currentSection = null;


      sections.forEach((item) => {

        const sectionTop =
          item.element.offsetTop - 220;

        if (scrollPosition >= sectionTop) {

          currentSection = item.id;

        }

      });


      setActiveSection(currentSection);

    };


    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });


    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [heroHeight]);


  /* =========================================
     CLOSE MENU WHEN SCREEN BECOMES LARGE
  ========================================= */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 700) {

        setMenuOpen(false);

      }

    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  return (
    <>

      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

      <header
        className={`professional-navbar ${
          showFloatingNav ? "navbar-hidden" : ""
        }`}
      >

        <div className="professional-navbar-inner">


          {/* =================================================
              LEFT NAVIGATION
          ================================================= */}

          <nav className="professional-nav-left">

            {navItems.map((item, index) => (

              <button
                key={item.id}
                className={`professional-nav-link ${
                  activeSection === item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >

                <span className="nav-number">
                  0{index + 1}
                </span>

                <span>
                  {item.label}
                </span>

                <span className="active-line"></span>

              </button>

            ))}

          </nav>


          {/* =================================================
              CENTER BRAND
          ================================================= */}

          <button
            className="professional-brand"
            onClick={() =>
              scrollToSection("home")
            }
            aria-label="Go to home"
          >

            <span className="professional-brand-mark">
              P
            </span>

            <span className="professional-brand-text">

              <strong>
                PRIYADHARSHINI S
              </strong>

              <small>
                FRONTEND DEVELOPER
              </small>

            </span>

          </button>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="professional-nav-right">


            {/* GitHub */}

            <a
              href="https://github.com/priya2922128029"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-social"
              aria-label="GitHub"
            >
              <GitHub />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/priyadharshini-s-b0b78642a"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-social"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>


            {/* Hire Me */}

            <button
              className="professional-hire"
              onClick={() =>
                scrollToSection("contact")
              }
            >

              <span>
                Hire Me
              </span>

              <ArrowOutwardRounded />

            </button>


            {/* Mobile menu */}

            <button
              className="professional-menu-button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Toggle navigation"
            >

              {menuOpen ? (
                <CloseRounded />
              ) : (
                <MenuRounded />
              )}

            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          FLOATING LEFT NAVIGATION
      ===================================================== */}

      <div
        className={`floating-navigation ${
          showFloatingNav
            ? "floating-visible"
            : ""
        }`}
      >

        {/* Home */}

        <button
          className={`floating-nav-item ${
            activeSection === null
              ? "floating-active"
              : ""
          }`}
          onClick={() =>
            scrollToSection("home")
          }
          aria-label="Home"
        >

          <HomeRounded />

          <span className="floating-tooltip">
            Home
          </span>

        </button>


        {/* Divider */}

        <div className="floating-divider"></div>


        {/* Sections */}

        {navItems.map((item) => (

          <button
            key={item.id}
            className={`floating-nav-item ${
              activeSection === item.id
                ? "floating-active"
                : ""
            }`}
            onClick={() =>
              scrollToSection(item.id)
            }
            aria-label={item.label}
          >

            {item.icon}

            <span className="floating-tooltip">
              {item.label}
            </span>

          </button>

        ))}

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`professional-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="mobile-menu-heading">

          <span>
            NAVIGATION
          </span>

          <p>
            Explore my portfolio
          </p>

        </div>


        <div className="mobile-menu-home">

          <button
            onClick={() =>
              scrollToSection("home")
            }
          >

            <HomeRounded />

            <span>
              Home
            </span>

            <ArrowOutwardRounded />

          </button>

        </div>


        <div className="mobile-menu-links">

          {navItems.map((item, index) => (

            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              className={`mobile-menu-link ${
                activeSection === item.id
                  ? "mobile-active"
                  : ""
              }`}
            >

              <span className="mobile-number">
                0{index + 1}
              </span>

              <span className="mobile-title">
                {item.label}
              </span>

              <ArrowOutwardRounded />

            </button>

          ))}

        </div>


        <div className="mobile-menu-footer">

          <div>

            <span>
              CONNECT
            </span>

            <div className="mobile-socials">

              <a
                href="https://github.com/priya2922128029"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>

              <a
                href="https://www.linkedin.com/in/priyadharshini-s-b0b78642a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>

            </div>

          </div>


          <button
            onClick={() =>
              scrollToSection("contact")
            }
            className="mobile-hire"
          >

            Let's Work Together

            <ArrowOutwardRounded />

          </button>

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           TOP NAVBAR
        ===================================================== */

        .professional-navbar {

          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          height: 88px;

          z-index: 9999;

          padding: 0 4%;

          background:
            rgba(255,255,255,0.96);

          transition:
            transform 0.45s ease,
            opacity 0.35s ease;

        }


        /*
          When user leaves Hero,
          top navbar slides upward.
        */

        .professional-navbar.navbar-hidden {

          transform:
            translateY(-120%);

          opacity: 0;

          pointer-events: none;

        }


        .professional-navbar-inner {

          position: relative;

          width: 100%;

          max-width: 1500px;

          height: 100%;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          border-bottom:
            1px solid
            rgba(30,25,35,0.10);

        }


        /* =====================================================
           LEFT NAV
        ===================================================== */

        .professional-nav-left {

          display: flex;

          align-items: center;

          gap: 4px;

          justify-self: start;

        }


        .professional-nav-link {

          position: relative;

          height: 40px;

          padding: 0 10px;

          display: flex;

          align-items: center;

          gap: 6px;

          border: none;

          background: transparent;

          color: #726b75;

          font-family: inherit;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;

          transition:
            color 0.25s ease;

        }


        .professional-nav-link:hover {

          color: #19161b;

        }


        .nav-number {

          color: #aaa3ac;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 1px;

        }


        .professional-nav-link.active {

          color: #19161b;

        }


        .professional-nav-link.active
        .nav-number {

          color: #8b5cf6;

        }


        .active-line {

          position: absolute;

          bottom: 0;

          left: 50%;

          width: 0;

          height: 2px;

          border-radius: 10px;

          background: #8b5cf6;

          transform:
            translateX(-50%);

          transition:
            width 0.3s ease;

        }


        .professional-nav-link.active
        .active-line {

          width: 18px;

        }


        /* =====================================================
           BRAND
        ===================================================== */

        .professional-brand {

          border: none;

          background: transparent;

          display: flex;

          align-items: center;

          gap: 10px;

          cursor: pointer;

          color: #19161b;

          padding: 0;

        }


        .professional-brand-mark {

          width: 40px;
          height: 40px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #19161b;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;

        }


        .professional-brand:hover
        .professional-brand-mark {

          transform:
            rotate(-8deg);

          background: #8b5cf6;

        }


        .professional-brand-text {

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 2px;

        }


        .professional-brand-text strong {

          font-size: 12px;

          letter-spacing: 1px;

          font-weight: 700;

        }


        .professional-brand-text small {

          color: #958d97;

          font-size: 7px;

          letter-spacing: 1.5px;

          font-weight: 700;

        }


        /* =====================================================
           RIGHT
        ===================================================== */

        .professional-nav-right {

          display: flex;

          align-items: center;

          justify-self: end;

          gap: 8px;

        }


        .professional-social {

          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(30,25,35,0.10);

          border-radius: 50%;

          background:
            rgba(255,255,255,0.55);

          color: #49424d;

          text-decoration: none;

          transition:
            all 0.3s ease;

        }


        .professional-social:hover {

          color: #ffffff;

          background: #19161b;

          border-color: #19161b;

          transform:
            translateY(-2px);

        }


        .professional-social svg {

          font-size: 17px;

        }


        /* =====================================================
           HIRE BUTTON
        ===================================================== */

        .professional-hire {

          height: 40px;

          padding: 0 17px;

          display: flex;

          align-items: center;

          gap: 7px;

          border: none;

          border-radius: 100px;

          background: #19161b;

          color: #ffffff;

          font-family: inherit;

          font-size: 11px;

          font-weight: 700;

          cursor: pointer;

          transition:
            all 0.3s ease;

        }


        .professional-hire:hover {

          background: #8b5cf6;

          transform:
            translateY(-2px);

          box-shadow:
            0 8px 20px
            rgba(139,92,246,0.18);

        }


        .professional-hire svg {

          font-size: 15px;

        }


        /* =====================================================
           FLOATING LEFT NAVIGATION
        ===================================================== */

        .floating-navigation {

          position: fixed;

          left: 24px;

          top: 50%;

          transform:
            translateY(-50%)
            translateX(-25px);

          z-index: 9000;

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 7px;

          padding: 9px;

          border:
            1px solid
            rgba(30,25,35,0.10);

          border-radius: 18px;

          background:
            rgba(255,255,255,0.78);

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          box-shadow:
            0 12px 35px
            rgba(20,15,30,0.10);

          opacity: 0;

          visibility: hidden;

          pointer-events: none;

          transition:
            opacity 0.35s ease,
            transform 0.35s ease;

        }


        .floating-navigation.floating-visible {

          opacity: 1;

          visibility: visible;

          pointer-events: auto;

          transform:
            translateY(-50%)
            translateX(0);

        }


        .floating-nav-item {

          position: relative;

          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: none;

          border-radius: 12px;

          background: transparent;

          color: #817984;

          cursor: pointer;

          transition:
            all 0.25s ease;

        }


        .floating-nav-item svg {

          font-size: 19px;

        }


        .floating-nav-item:hover {

          background: #f2efff;

          color: #8b5cf6;

          transform:
            scale(1.06);

        }


        


        /* ================================
   ACTIVE SECTION
   ================================ */

.floating-nav-item.floating-active {
  position: relative;
  background: transparent;
  color: #8b5cf6;
  box-shadow: none;
  transform: none;
}

/* Small active indicator */
.floating-nav-item.floating-active::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #8b5cf6;
  transform: translateY(-50%);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.10);
}

/* Active icon */
.floating-nav-item.floating-active svg {
  color: #8b5cf6;
  transform: scale(1.15);
}

/* Don't add background when active */
.floating-nav-item.floating-active:hover {
  background: transparent;
  color: #8b5cf6;
  transform: none;
}


        .floating-divider {

          width: 22px;

          height: 1px;

          background:
            rgba(30,25,35,0.12);

          margin: 2px 0;

        }


        /* =====================================================
           FLOATING TOOLTIP
        ===================================================== */

        .floating-tooltip {

          position: absolute;

          left: 55px;

          top: 50%;

          transform:
            translateY(-50%)
            translateX(-5px);

          padding: 7px 10px;

          border-radius: 7px;

          background: #19161b;

          color: #ffffff;

          font-size: 11px;

          font-weight: 600;

          white-space: nowrap;

          opacity: 0;

          visibility: hidden;

          pointer-events: none;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;

        }


        .floating-nav-item:hover
        .floating-tooltip {

          opacity: 1;

          visibility: visible;

          transform:
            translateY(-50%)
            translateX(0);

        }


        /* =====================================================
           MOBILE MENU BUTTON
        ===================================================== */

        .professional-menu-button {

          display: none;

          width: 40px;
          height: 40px;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(30,25,35,0.12);

          border-radius: 50%;

          background: #ffffff;

          color: #19161b;

          cursor: pointer;

        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .professional-mobile-menu {

          position: fixed;

          inset: 0;

          z-index: 9998;

          padding:
            110px
            7%
            40px;

          background: #f7f6f3;

          overflow-y: auto;

          opacity: 0;

          visibility: hidden;

          transform:
            translateY(-20px);

          transition:
            opacity 0.35s ease,
            transform 0.35s ease;

        }


        .professional-mobile-menu.open {

          opacity: 1;

          visibility: visible;

          transform:
            translateY(0);

        }


        .mobile-menu-heading {

          margin-bottom: 25px;

          display: flex;

          align-items: baseline;

          gap: 15px;

        }


        .mobile-menu-heading span {

          color: #958d96;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 2px;

        }


        .mobile-menu-heading p {

          color: #aaa3aa;

          font-size: 12px;

        }


        /* MOBILE HOME */

        .mobile-menu-home {

          border-top:
            1px solid #ddd9d5;

        }


        .mobile-menu-home button {

          width: 100%;

          height: 60px;

          display: grid;

          grid-template-columns:
            45px 1fr 30px;

          align-items: center;

          border: none;

          border-bottom:
            1px solid #ddd9d5;

          background: transparent;

          color: #8b5cf6;

          cursor: pointer;

          text-align: left;

        }


        .mobile-menu-home button svg {

          font-size: 20px;

        }


        .mobile-menu-home button span {

          font-size: 18px;

          font-weight: 600;

        }


        /* MOBILE LINKS */

        .mobile-menu-link {

          width: 100%;

          min-height: 75px;

          padding: 0 5px;

          display: grid;

          grid-template-columns:
            45px 1fr 30px;

          align-items: center;

          border: none;

          border-bottom:
            1px solid #ddd9d5;

          background: transparent;

          color: #1a171c;

          cursor: pointer;

          text-align: left;

        }


        .mobile-number {

          color: #9b939c;

          font-size: 9px;

          letter-spacing: 1px;

        }


        .mobile-title {

          font-size: 30px;

          font-weight: 500;

        }


        .mobile-menu-link svg {

          color: #918a93;

          font-size: 18px;

        }


        .mobile-menu-link.mobile-active
        .mobile-title {

          color: #8b5cf6;

        }


        /* =====================================================
           MOBILE FOOTER
        ===================================================== */

        .mobile-menu-footer {

          margin-top: 50px;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 25px;

        }


        .mobile-menu-footer > div {

          display: flex;

          flex-direction: column;

          gap: 10px;

        }


        .mobile-menu-footer > div > span {

          color: #958d96;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 2px;

        }


        .mobile-socials {

          display: flex;

          gap: 8px;

        }


        .mobile-socials a {

          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid #ddd8d5;

          border-radius: 50%;

          color: #4e4751;

          background: #ffffff;

        }


        .mobile-hire {

          height: 45px;

          padding: 0 17px;

          display: flex;

          align-items: center;

          gap: 7px;

          border: none;

          border-radius: 30px;

          background: #19161b;

          color: #ffffff;

          font-size: 11px;

          font-weight: 700;

          cursor: pointer;

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .professional-navbar {

            padding: 0 25px;

          }


          .professional-nav-link {

            padding: 0 7px;

          }


          .professional-brand-text {

            display: none;

          }


          .floating-navigation {

            left: 15px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
  .professional-navbar {
    height: 72px;
    padding: 0 18px;
  }

  .professional-navbar-inner {
    display: flex;
    justify-content: space-between;
    border-bottom: none;
  }

  .professional-nav-left {
    display: none;
  }

  .professional-brand {
    order: 1;
  }

  .professional-nav-right {
    order: 2;
  }

  .professional-social,
  .professional-hire {
    display: none;
  }

  .professional-menu-button {
    display: flex;
  }

  .professional-brand-text {
    display: flex;
  }

  .professional-brand-mark {
    width: 36px;
    height: 36px;
    font-size: 17px;
  }

  .professional-brand-text strong {
    font-size: 11px;
  }

  .professional-brand-text small {
    font-size: 6px;
  }

  /* ================================
     MOBILE FLOATING NAVIGATION
     ================================ */

  .floating-navigation {
    display: flex;
    left: 10px;
    top: 50%;
    padding: 6px;
    gap: 4px;
    border-radius: 15px;
    transform: translateY(-50%) translateX(-25px) scale(0.95);
  }

  .floating-navigation.floating-visible {
    transform: translateY(-50%) translateX(0) scale(1);
  }

  .floating-nav-item {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }

  .floating-nav-item svg {
    font-size: 17px;
  }

  .floating-divider {
    width: 18px;
    margin: 1px 0;
  }

  /* Hide tooltip on mobile */
  .floating-tooltip {
    display: none;
  }

  /* Mobile menu */
  .professional-mobile-menu {
    padding: 100px 20px 30px;
  }

  .mobile-menu-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .mobile-hire {
    width: 100%;
    justify-content: center;
  }
}

      `}</style>

    </>
  );
}


export default Navbar;