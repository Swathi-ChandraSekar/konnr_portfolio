import ProductPage from "../components/ProductPage";

import bannerImg from "../assets/hero2.jpeg";
import bannerImgMobile from "../assets/hero2-mobile.jpeg";

/* ============================================================
   PRODUCT IMAGE MAP — Building & Architectural Utilities
   ------------------------------------------------------------
   Real product photos, one per product, sourced from
   src/assets/products/.
   ============================================================ */

// 1. Commercial & Industrial PEB Construction
import pebImage from "../assets/products/peb-construction.jpg";

// 2. Residential Precast Homes
import precastHomeImage from "../assets/products/precast-home.jpg";

// 3. MS (Mild Steel) Kiosks
import msKioskImage from "../assets/products/ms-kiosk.jpg";

// 4. Precast Home Utilities — Wash Basins & Kitchen Countertops
import washBasinImage from "../assets/products/precast-wash-basin.jpg";

function Building() {
  const products = [
    {
      image: pebImage,
      fit: "contain",
      title: "Commercial & Industrial PEB Construction",
      alt: "Pre-engineered industrial warehouse construction",
      description:
        "Pre-Engineered Buildings (PEB) are the ultimate solution for rapid, large-scale industrial and commercial development. By combining high-strength steel frameworks with our durable precast concrete components, we deliver expansive sheds, warehouses, and factory floors in record time. This engineered approach ensures maximum structural stability, pairs perfectly with lightweight, weather-resistant roofing systems, and drastically cuts down on traditional, labor-intensive construction timelines.",
    },
    {
      image: precastHomeImage,
      fit: "contain",
      title: "Residential Precast Homes",
      alt: "Modular precast residential home",
      description:
        "Experience the future of housing with our modular residential solutions. By manufacturing the core structural components in a controlled factory setting, we bring unprecedented speed and precision to home building. These precast homes offer superior structural integrity, require minimal on-site labor, and provide a smarter, faster alternative to conventional brick-and-mortar construction—allowing homeowners to move in months ahead of schedule.",
    },
    {
      image: msKioskImage,
      fit: "contain",
      title: "Tiny Kiosks",
      alt: "Mild steel security kiosk",
      description:
        "When you need a durable, quick-to-deploy structure for a compact footprint, our fabricated Mild Steel kiosks provide the perfect answer. Built with robust steel framing, these versatile units are ideal for security cabins, pop-up retail booths, or temporary site offices. They are engineered to withstand the elements and arrive ready for rapid on-site setup, ensuring immediate functionality.",
    },
    {
      image: washBasinImage,
      fit: "contain",
      title: "Precast Home Utilities — Wash Basins & Kitchen Countertops",
      alt: "Precast concrete wash basin and kitchen countertop",
      description:
        "Bring the industrial elegance and extreme durability of architectural concrete directly into your living spaces. Our pre-finished, custom-cast wash basins and heavy-duty kitchen countertops offer a sleek, modern aesthetic that easily handles daily wear and tear. Manufactured for a flawless fit and a premium finish, these utilities arrive ready to install, instantly elevating the design of any residential or commercial interior.",
    },
  ];

  return (
    <ProductPage
      bannerImage={bannerImg}
      bannerImageMobile={bannerImgMobile}
      title="Complete Building Solutions & Architectural Utilities"
      subtitle="End-to-end structural systems and interior utilities engineered for faster, smarter construction."
      sectionHeading="Building Systems & Precast Utilities"
      sectionDesc={[
        "Beyond foundational infrastructure, we deliver complete, turnkey structural systems and specialized interior utilities designed to meet the demands of modern development. Whether you are scaling a commercial operation, erecting a residential build, or outfitting an interior space, our advanced manufacturing approach guarantees easy assembly, significantly reduced labor costs, and unmatched time savings.",
        "Explore our comprehensive building systems and precast utilities below to find the exact fit for your project scope:",
      ]}
      products={products}
    />
  );
}

export default Building;
