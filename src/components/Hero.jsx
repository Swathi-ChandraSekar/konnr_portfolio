import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/hero.css";

import { openWhatsAppQuotation } from "../utils/whatsapp";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

import hero1Mobile from "../assets/hero1-mobile.jpeg";
import hero2Mobile from "../assets/hero2-mobile.jpeg";
import hero3Mobile from "../assets/hero3-mobile.jpeg";

function Hero() {
  const slides = [
    { desktop: hero1, mobile: hero1Mobile },
    { desktop: hero2, mobile: hero2Mobile },
    { desktop: hero3, mobile: hero3Mobile },
  ];

  const [current, setCurrent] = useState(0);

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

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

        {/* Background Image */}
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={slides[current].mobile}
          />
          <img
            src={slides[current].desktop}
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

          {/* Left Arrow */}
          <button
            className="slider-btn left-btn"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            className="slider-btn right-btn"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={
                  current === index
                    ? "dot active"
                    : "dot"
                }
              ></span>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;