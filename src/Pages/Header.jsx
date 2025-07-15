import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";

const queries = {
  isLargeDesktop: "(min-width: 1440px)",
  isDesktop: "(min-width: 1024px) and (max-width: 1439px)",
  isSmallOrLargeDesktop: "(min-width: 1024px)",
  isTablet: "(min-width: 768px) and (max-width: 1023px)",
  isTabletOrMobile: "(max-width: 1023px)",
  isMobile: "(min-width: 481px) and (max-width: 767px)",
  isSmallMobile: "(max-width: 480px)",
};

export default function Header() {
  const isLargeDesktop = useMediaQuery({ query: queries.isLargeDesktop });
  const isDesktop = useMediaQuery({ query: queries.isDesktop });
  const isSmallOrLargeDesktop = useMediaQuery({
    query: queries.isSmallOrLargeDesktop,
  });
  const isTablet = useMediaQuery({ query: queries.isTablet });
  const isTabletMobile = useMediaQuery({ query: queries.isTabletOrMobile });
  const isMobile = useMediaQuery({ query: queries.isMobile });
  const isSmallMobile = useMediaQuery({ query: queries.isSmallMobile });

  const navLinks = [
    { id: 1, name: "HOME", path: "/vus-project/" },
    {
      id: 2,
      name: "ABOUT US",
      path: "/aboutus",
      dropdown: [
        { id: "2-1", name: "MISSION, VISION AND CORE VALUES" },
        { id: "2-2", name: "THE VUS REPUTATION" },
        { id: "2-3", name: "HOW TO APPLY" },
        { id: "2-4", name: "FAQS" },
      ],
    },
    {
      id: 3,
      name: "WHY US",
      path: "/whyus",
      dropdown: [
        { id: "3-1", name: "TEACHER'S DEVELOPMENT" },
        { id: "3-2", name: "BENEFITS" },
        { id: "3-3", name: "EVENTS" },
      ],
    },
    {
      id: 4,
      name: "TEACH AT VUS",
      path: "/teachatVUS",
      dropdown: [
        { id: "4-1", name: "VIETNAMESE TEACHERS" },
        { id: "4-2", name: "EXPATRIATE TEACHERS" },
        { id: "4-3", name: "TEACHING ASSISTANT" },
      ],
    },
    { id: 5, name: "NEWS & BLOG", path: "/new&blog" },
    { id: 6, name: "VUS CENTER", path: "/VUScenter" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [arrowHovered, setArrowHover] = useState(false);

  const appearMenu = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-30px)",
    },
    to: {
      opacity: menuOpen ? 1 : 0,
      transform: menuOpen ? "translateY(0px)" : "translateY(-30px)",
    },
    config: {
      duration: 200,
    },
  });

  return (
    <header
      style={{
        width: "100%",
        height: "65px",
        display: "flex",
        justifyContent: isSmallOrLargeDesktop
          ? "space-around"
          : "space-between",
        alignItems: "center",
        paddingRight: "1.75em",
        position: "relative",
        zIndex: "1000",
      }}
    >
      {menuOpen ? (
        <animated.div
          style={{
            ...appearMenu,
            width: "100%",
            height: "auto",
            position: "absolute",
            top: "65px",
            left: "0px",
            padding: "2em",
            backgroundColor: "white",
            transition: "300ms ease",
            zIndex: "998",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#E0242B" : "#0A4EBF",
                    textDecoration: "none",
                  })}
                  to={navLink.path}
                >
                  {navLink.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </animated.div>
      ) : null}
      {/* VUS-logo */}
      <Link to="/vus-project/">
        <img
          style={{
            width: "135px",
            zIndex: "1000",
          }}
          class="VUS-logo"
          src="https://teachenglish.vus.edu.vn/wp-content/uploads/2024/05/cropped-LOGO-VUS-ENG-02.png"
          alt="VUS-logo"
        />
      </Link>
      <nav>
        {isTabletMobile ? (
          <div>
            {/* Hamburger styles */}
            <button
              style={{
                color: "#E0242B",
                fontSize: "2.25rem",
                background: "none",
                border: "none",
              }}
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        ) : (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "22px",
            }}
          >
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    color: isActive ? "#E0242B" : "#0A4EBF",
                    display: "flex",
                    gap: "12px",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                    position: "relative",
                  })}
                  // className={({ isActive }) => (isActive ? "active" : "")} style in CSS file
                  to={navLink.path}
                >
                  {Object.hasOwn(navLink, "dropdown") ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",

                        position: "relative",
                      }}
                      onMouseEnter={() => setArrowHover(true)}
                      onMouseLeave={() => setArrowHover(false)}
                    >
                      <span>
                        {navLink.name} <i className="fas fa-caret-down"></i>
                      </span>
                    </div>
                  ) : (
                    <span>{navLink.name}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
