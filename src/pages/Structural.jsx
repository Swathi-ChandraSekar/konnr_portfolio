import ProductPage from "../components/ProductPage";

import bannerImg from "../assets/hero1.jpeg";
import bannerImgMobile from "../assets/hero1-mobile.jpeg";

/* ============================================================
   PRODUCT IMAGES — Structural Precast Elements
   ------------------------------------------------------------
   Real product photos, one per product, sourced from
   src/assets/products/. Add more numbered images to that
   folder and reference them below to extend this list.
   ============================================================ */
import foundationColumnImg from "../assets/products/3.jpeg"; // precast foundation/column unit
import uDrainImg from "../assets/products/4.jpeg"; // U-shaped precast channel
import boundaryWallImg from "../assets/products/2.jpeg"; // hollow/box-type precast unit
import waterTankImg from "../assets/products/5.jpeg"; // cast concrete block units
import kerbStoneImg from "../assets/products/1.jpeg"; // precast slabs/panels

function Structural() {
  const products = [
    {
      image: foundationColumnImg,
      alt: "Precast sloped foundation column with anchor bolts",
      title: "ISO Sloped Foundation Column",
      description:
        "Designed for immediate load-bearing capability, these ready-to-install footings provide a rock-solid, precisely engineered base for your building. By bypassing on-site pouring and waiting for concrete to cure, you can instantly begin erecting steel or concrete superstructures. They are an ideal choice for fast-tracking warehouses, commercial sheds, and residential frames.",
    },
    {
      image: uDrainImg,
      alt: "RCC U-shaped drain channel with cover slab",
      title: "RCC U-Drain with Cover Slab",
      description:
        "Effective surface water management is vital for the longevity of any developed site. Our heavy-duty, reinforced concrete drainage channels come paired with high-strength cover slabs. They are engineered to channel water efficiently to prevent waterlogging, while the reinforced slabs are built to safely withstand vehicular and heavy foot traffic passing overhead.",
    },
    {
      image: boundaryWallImg,
      alt: "Precast hollow concrete boundary wall unit",
      title: "Precast Boundary Wall",
      description:
        "Secure your perimeter in a fraction of the time required for traditional masonry. These modular, panel-and-post wall systems deliver instant privacy and robust security. Cast in high-density concrete, they offer superior resistance to harsh weather and impact, all while providing a cleaner finish and taking up less physical space than a standard brick-and-mortar wall.",
    },
    {
      image: waterTankImg,
      alt: "Precast concrete water tank units",
      title: "Precast Water Tank",
      description:
        "Whether integrated underground or placed above ground, our factory-cast concrete water tanks are built for long-term durability and hygienic water storage. Unlike traditional block-built tanks that are highly prone to settling, cracking, and seepage over time, these monolithic, leak-proof units are delivered to your site ready for immediate plumbing integration.",
    },
    {
      image: kerbStoneImg,
      alt: "Stacked precast concrete kerb stone slabs",
      title: "Kerb Stone",
      description:
        "Kerb stones are the essential finishing touch for any high-quality infrastructure layout. These precision-molded edging blocks create clean, robust borders for pavements, driveways, internal roads, and landscaping. Beyond delivering a neat and polished appearance, they serve a vital structural purpose by locking paving elements firmly in place and preventing soil erosion along walkways.",
    },
  ];

  return (
    <ProductPage
      bannerImage={bannerImg}
      bannerImageMobile={bannerImgMobile}
      title="Structural Precast Elements"
      subtitle="Engineered precast components that bring strength, precision and speed to every foundation and framework."
      sectionHeading="Precast Elements for Rapid Construction"
      sectionDesc={[
        "When planning your next commercial, industrial, or residential project, choosing the right structural components is critical for staying on schedule and within budget. Our core range of precast infrastructure elements is manufactured in a controlled factory environment using high-grade concrete, ensuring consistent strength, structural integrity, and perfect dimensions every time.",
        "By shifting the messy, time-consuming casting process away from your site, these \u201cplug-and-play\u201d solutions drastically reduce on-site labor requirements and eliminate long curing delays. Explore our essential precast elements below to understand exactly how they can benefit your specific project requirements.",
      ]}
      products={products}
    />
  );
}

export default Structural;
