import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/productPage.css";

import { openWhatsAppQuotation } from "../utils/whatsapp";

function ProductPage({
  bannerImage,
  bannerImageMobile,
  bannerClassName,
  title,
  subtitle,
  sectionHeading,
  sectionDesc,
  products,
}) {
  const navigate = useNavigate();

  // Send enquiries to the Contact section on Home
  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleGetQuotation = () => {
    openWhatsAppQuotation();
  };

  // Allow sectionDesc to be a single string or an array of paragraphs
  const descParagraphs = Array.isArray(sectionDesc)
    ? sectionDesc
    : sectionDesc
    ? [sectionDesc]
    : [];

  return (
    <>
      <Navbar />

      {/* ==========================
          BANNER (image + title)
      ========================== */}

      <section
        className={
          bannerClassName
            ? `product-banner ${bannerClassName}`
            : "product-banner"
        }
      >
        <picture>
          {bannerImageMobile && (
            <source
              media="(max-width: 768px)"
              srcSet={bannerImageMobile}
            />
          )}
          <img
            src={bannerImage}
            alt={title}
            className="product-banner-img"
          />
        </picture>

        <div className="product-banner-overlay"></div>

        <div className="product-banner-content">
          <h1 className="product-banner-title">{title}</h1>

          <div className="product-banner-line"></div>

          {subtitle && (
            <p className="product-banner-subtitle">{subtitle}</p>
          )}
        </div>
      </section>

      {/* ==========================
          INTRODUCTION
      ========================== */}

      <section className="product-section">
        <div className="container">
          {sectionHeading && (
            <>
              <h2 className="product-section-heading">{sectionHeading}</h2>
              <div className="product-section-line"></div>
            </>
          )}

          {descParagraphs.map((para, i) => (
            <p className="product-section-desc" key={i}>
              {para}
            </p>
          ))}

          {/* ==========================
              ALTERNATING SHOWCASE
          ========================== */}

          <div className="product-showcase">
            {products.map((product, index) => (
              <div
                className={
                  index % 2 === 0
                    ? "showcase-row"
                    : "showcase-row reverse"
                }
                key={index}
              >
                <div className="showcase-media">
                  <div
                    className={
                      product.fit === "contain"
                        ? "showcase-img-wrap fit-contain"
                        : "showcase-img-wrap"
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="showcase-content">
                  <h3 className="showcase-title">{product.title}</h3>
                  <p className="showcase-desc">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          BOTTOM CTA
      ========================== */}

      <section className="product-cta-section">
        <div className="container">
          <h2 className="product-cta-heading">
            Ready to Build with Premium Precast Solutions?
          </h2>

          <p className="product-cta-desc">
            Our team is ready to help you choose the right products
            for your project. Contact us today to discuss your
            requirements or request a customized quotation.
          </p>

          <div className="product-cta-buttons">
            <button
              className="product-cta-btn secondary"
              onClick={goToContact}
            >
              Contact Us
            </button>

            <button
              className="product-cta-btn primary"
              onClick={handleGetQuotation}
            >
              Get Quotation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductPage;
