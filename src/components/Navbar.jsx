import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import { ThemeContext } from "../context/theme-context";

import FAQ from "./FAQ";

import "../styles/navbar.css";

function Navbar() {

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const [showFAQ, setShowFAQ] =
    useState(false);

  const navigate = useNavigate();

  // Navigate to Home sections from any page
  const goToSection = (sectionId) => {

    navigate("/");

    setTimeout(() => {

      const section =
        document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
        });

      }

    }, 100);

  };

  return (

    <>

      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">

        <div className="container">

          {/* ==========================
                  LOGO
          ========================== */}

          <button
            className="navbar-brand border-0 bg-transparent d-flex align-items-center p-0"
            onClick={() => goToSection("home")}
          >

            <img
              src="/logo.jpg"
              alt="KONNR Logo"
              className="navbar-logo"
            />

            <div className="brand-text">

              <span>KONNR</span>

                <small>ENTERPRISES</small>

            </div>

          </button>

          {/* ==========================
              MOBILE TOGGLE
          ========================== */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>

          </button>

          {/* ==========================
              NAVIGATION
          ========================== */}

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">

              {/* Home */}

              <li className="nav-item">

                <button
                  className="nav-link nav-btn"
                  onClick={() => goToSection("home")}
                >
                  Home
                </button>

              </li>

              {/* About */}

              <li className="nav-item">

                <button
                  className="nav-link nav-btn"
                  onClick={() => goToSection("about")}
                >
                  About Us
                </button>

              </li>

              {/* Products */}

              <li className="nav-item dropdown">

                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products ---
                </a>

                <ul className="dropdown-menu">

                  <li>

                    <Link
                      to="/structural"
                      className="dropdown-item"
                    >
                      Structural Precast Elements
                    </Link>

                  </li>

                  <li>

                    <Link
                      to="/building"
                      className="dropdown-item"
                    >
                      Complete Building Solutions
                    </Link>

                  </li>

                  <li>

                    <Link
                      to="/cladding"
                      className="dropdown-item"
                    >
                      Architectural Claddings & Blocks
                    </Link>

                  </li>

                </ul>

              </li>
                            {/* FAQ */}

              <li className="nav-item">

                <button
                  className="nav-link nav-btn faq-btn-nav"
                  onClick={() => setShowFAQ(true)}
                >
                  FAQ
                </button>

              </li>

              {/* Contact */}

              <li className="nav-item">

                <button
                  className="nav-link nav-btn"
                  onClick={() => goToSection("contact")}
                >
                  Contact Us
                </button>

              </li>

              {/* Theme Toggle */}

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

                <button
                  onClick={toggleTheme}
                  className="btn-theme"
                  aria-label="Toggle Theme"
                >

                  {darkMode ? (
                    <FaSun />
                  ) : (
                    <FaMoon />
                  )}

                </button>

              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* FAQ Sidebar */}

      <FAQ
        show={showFAQ}
        onClose={() => setShowFAQ(false)}
      />

    </>

  );

}

export default Navbar;