import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/hero.css";

import { openWhatsAppQuotation } from "../utils/whatsapp";

import heroDesktop from "../assets/hero-desktop-new.jpeg";
import heroMobile from "../assets/hero-mobile-new.png";

function Hero() {
  const navigate = useNavigate();

  const productLinks = [
    { label: "Structural Precast Elements", path: "/structural" },
    { label: "Complete Building Solutions", path: "/building" },
    { label: "Architectural Cladding & Blocks", path: "/cladding" },
  ];

  const handleGetQuotation = () => {
    openWhatsAppQuotation();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="home" className="hero-section">

      <div className="hero-container">

        {/* Border Animation */}
        <svg
          className="hero-border"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="996"
            height="596"
            rx="18"
            ry="18"
            className="border-path"
          />
        </svg>

        {/* Background Image — single static hero image (no carousel).
            Portrait image on mobile, landscape image on desktop,
            swapped via <picture>/<source> based on viewport width. */}
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={heroMobile}
          />
          <img
            src={heroDesktop}
            alt="Hero"
            className="hero-image"
          />
        </picture>

        {/* Overlay */}
        <div className="hero-overlay">

          <div
            className="hero-content"
            data-aos="fade-up"
          >

            <h1 className="hero-title">
              Build Your Dream Home
              <span className="accent-text">
                {" "}With Complete Transparency
              </span>
            </h1>

            <div className="hero-line"></div>

            <p className="hero-description">
              Smart construction consultancy that helps you
              plan, estimate, monitor and execute projects
              with complete cost clarity, quality control
              and timely delivery.
            </p>

            {/* PRIMARY CTA: promoted above the product buttons so it
                reads as the main action right after the description */}
            <button
              className="hero-quote-btn"
              onClick={handleGetQuotation}
            >
              Get Quotation
            </button>

            {/* Small divider + label introduce the secondary
                product navigation without competing with the CTA */}
            <div className="hero-mini-divider"></div>

            <span className="hero-explore-label">
              Explore Our Products
            </span>

            <div className="hero-product-buttons">
              {productLinks.map((product) => (
                <button
                  key={product.path}
                  className="hero-product-btn"
                  onClick={() => navigate(product.path)}
                >
                  {product.label}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
