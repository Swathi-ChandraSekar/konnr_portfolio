import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";

import "../styles/faq.css";

const faqs = [
  {
    q: "What products do you manufacture?",
    a: "We manufacture ISO Footing Columns, Boundary Walls, Box Culverts, Grass Pavers, U Drains, Kerb Stones, Water Tanks, Breeze Blocks and many other precast concrete products."
  },
  {
    q: "Can you manufacture custom products?",
    a: "Yes. Products are manufactured according to client drawings and project requirements."
  },
  {
    q: "Do you deliver across Tamil Nadu?",
    a: "Yes. We deliver throughout Tamil Nadu and nearby states."
  },
  {
    q: "Can I visit your factory?",
    a: "Absolutely. Clients are welcome to visit our manufacturing facility."
  }
];

function FAQ({ show, onClose }) {

  const [open, setOpen] = useState(null);

  return (

    <>
      {show && (
        <div
          className="faq-overlay"
          onClick={onClose}
        />
      )}

      <div className={`faq-sidebar ${show ? "open" : ""}`}>

        <div className="faq-top">

          <h3>Frequently Asked Questions</h3>

          <button onClick={onClose}>
            <FaTimes />
          </button>

        </div>

        {faqs.map((item, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              {item.q}

              {open === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}

            </button>

            {open === index && (

              <div className="faq-answer">

                {item.a}

              </div>

            )}

          </div>

        ))}

      </div>

    </>

  );
}

export default FAQ;