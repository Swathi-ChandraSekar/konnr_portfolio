import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* Contact Card */}
      <div className="contact-card">

        <h2>Get in touch</h2>

        <div className="contact-item">
          <FaBuilding />
          <span>KONNR ENTERPRISES PVT LTD(OPC)</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>
            Natarajan Street, Karani Main Road,
            Arasankalani, Chennai - 600126
          </span>
        </div>

        <div className="contact-item">
          <FaPhoneAlt />
          <span>+91-8610048200</span>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <span>deepa.d@konnr.in</span>
        </div>

        <div className="contact-footer">
          <a href="#">Legal Notice</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>

      {/* Clickable Map */}
      <a
        href="https://maps.app.goo.gl/Ezc9xuVXv1UnNVkm8"
        target="_blank"
        rel="noopener noreferrer"
        className="map-container"
      >
        <iframe
          title="KONNR Location"
          src="https://maps.google.com/maps?q=Arasankalani%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="contact-map"
        />
      </a>

    </section>
  );
}

export default Contact;