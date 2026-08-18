import {
  FaBuilding,
  FaIndustry,
  FaRoad,
  FaWarehouse,
  FaTools,
  FaCheckCircle,
  FaEye,
} from "react-icons/fa";

import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        {/* Badge */}
        <div className="mb-3 about-badge-wrap">
          <span className="hero-badge">
            ABOUT KONNR ENTERPRISES
          </span>
        </div>
{/* Heading + underline, centered as a unit so the underline
            always sits directly beneath the heading text regardless
            of how many lines the heading wraps to */}
        <div className="about-heading-wrap">
          <h2 className="section-heading">
            KONNR ENTERPRISES - PRECAST EXPERT
          </h2>

          {/* Premium red accent underline (matches hero-line style) */}
          <div className="about-heading-line"></div>
        </div>

        
        {/* Description */}
        <div className="about-content">
          <p className="about-text">
            KONNR ENTERPRISES is a premier manufacturer and trader of
            high-performance precast concrete solutions, dedicated to
            transforming the landscape of modern construction. We specialize
            in delivering factory-cast structural elements that bridge the gap
            between architectural vision and engineering excellence.
          </p>

          <p className="about-text">
            By moving the construction process from the site to a controlled
            factory environment, we ensure that every componen from ISO footing
            columns to intricate breeze block meets the highest standards of
            durability, precision and finish. Our mission is to empower
            developers and contractors to build faster, smarter and more
            sustainably.
          </p>
        </div>

        {/* Core Offerings */}
        <div className="about-card mt-5" id="products">
          <h3 className="card-title">
            Our Core Offerings
          </h3>

          <div className="row g-4 mt-1">

            <div className="col-lg-4 col-md-6">
              <div className="offering-card">
                <FaBuilding />
                <div>
                  <h5>Structural Elements</h5>
                  <p>
                    ISO footing columns, wall panels and heavy-duty box
                    culverts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="offering-card">
                <FaIndustry />
                <div>
                  <h5>Infrastructure & Drainage</h5>
                  <p>
                    Precision engineered U-drain channels and trench slabs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="offering-card">
                <FaRoad />
                <div>
                  <h5>Site Improvement</h5>
                  <p>
                    Kerb stones, grass pavers and checkered tiles.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="offering-card">
                <FaWarehouse />
                <div>
                  <h5>Enclosures</h5>
                  <p>
                    Rapid-install precast boundary walls for site security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="offering-card">
                <FaTools />
                <div>
                  <h5>PEB Integration</h5>
                  <p>
                    Specialized support for Pre-Engineered Building (PEB)
                    systems, combining steel efficiency with precast
                    reliability.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Cards */}
        <div className="row mt-4 g-4">

          <div className="col-lg-6">
            <div className="about-card h-100">
              <h3 className="card-title">
                Why Choose KONNR?
              </h3>

              <ul className="about-list">
                <li>
                  <FaCheckCircle />
                  Fine Factory Quality with M25/M30 grade concrete.
                </li>

                <li>
                  <FaCheckCircle />
                  Up to 50% faster construction timelines.
                </li>

                <li>
                  <FaCheckCircle />
                  Superior structural precision and durability.
                </li>

                <li>
                  <FaCheckCircle />
                  Sustainable and eco-friendly construction methods.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-card h-100">
              <h3 className="card-title">
                <FaEye className="me-2" />
                Our Vision
              </h3>

              <p>
                To be the most trusted partner in the construction industry by
                providing innovative, cost-effective and rapid building
                solutions that stand the test of time.
              </p>

              <p className="vision-text">
                Whether you are developing a modern warehouse, industrial
                facility, infrastructure project or residential community,
                KONNR ENTERPRISES provides the foundation for your success.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;