import ProductPage from "../components/ProductPage";

// Hero image — used for both desktop and mobile.
import bannerImg from "../assets/hero1.jpeg";

/* ============================================================
   PRODUCT IMAGES — Structural Precast Elements
   ============================================================ */
import boundaryWallImg from "../assets/products/precast-boundary-wall.jpeg";
import waterTankImg from "../assets/products/precast-water-tank.jpg";
import kerbStoneImg from "../assets/products/kerb-stone.jpeg";
import boxCulvertImg from "../assets/products/precast-box-culvert.jpeg";

// New product images
// Update these filenames if your actual assets use different names.
import foundationColumnImg from "../assets/products/iso-sloped-foundation-column.jpeg";
import uDrainImg from "../assets/products/udrain.jpeg";

function Structural() {
  const products = [
    {
      image: boundaryWallImg,
      alt: "Precast hollow concrete boundary wall unit",
      title: "Precast Boundary Wall",
      description:
        "Secure your perimeter in a fraction of the time required for traditional masonry. These modular, panel-and-post wall systems deliver instant privacy and robust security. Cast in high-density concrete, they offer superior resistance to harsh weather and impact, all while providing a cleaner finish and taking up less physical space than a standard brick-and-mortar wall.",
    },

    {
      image: waterTankImg,
      alt: "Precast concrete water tank unit",
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

    {
      image: boxCulvertImg,
      alt: "Precast concrete box culvert",
      title: "Precast Concrete Box Culverts",
      description:
        "Precast concrete box culverts are robust, four-sided rectangular or square structures engineered for the safe passage of water, utilities, and traffic. Manufactured off-site under strict quality controls, these monolithic units offer a superior alternative to cast-in-place infrastructure, providing unmatched durability for industrial, commercial, and roadway projects.",
    },

    {
      image: foundationColumnImg,
      alt: "ISO sloped foundation column precast footing",
      title: "ISO Sloped Foundation Column",
      description:
        "Designed for immediate load-bearing capability, these ready-to-install footings provide a rock-solid, precisely engineered base for your building. By bypassing on-site pouring and waiting for concrete to cure, you can instantly begin erecting steel or concrete superstructures. They are an ideal choice for fast-tracking warehouses, commercial sheds, and residential frames.",
    },

    {
      image: uDrainImg,
      alt: "RCC U-drain with reinforced concrete cover slab",
      title: "RCC U-Drain with Cover Slab",
      description:
        "Effective surface water management is vital for the longevity of any developed site. Our heavy-duty, reinforced concrete drainage channels come paired with high-strength cover slabs. They are engineered to channel water efficiently to prevent waterlogging, while the reinforced slabs are built to safely withstand vehicular and heavy foot traffic passing overhead.",
    },
  ];

  return (
    <ProductPage
      bannerImage={bannerImg}
      bannerImageMobile={bannerImg}
      bannerClassName="structural-banner"
      title="Structural Precast Elements"
      subtitle="Engineered precast components that bring strength, precision and speed to every foundation and framework."
      sectionHeading="Precast Elements for Rapid Construction"
      sectionDesc={[
        "When planning your next commercial, industrial, or residential project, choosing the right structural components is critical for staying on schedule and within budget. Our core range of precast infrastructure elements is manufactured in a controlled factory environment using high-grade concrete, ensuring consistent strength, structural integrity, and perfect dimensions every time.",
        "By shifting the messy, time-consuming casting process away from your site, these “plug-and-play” solutions drastically reduce on-site labor requirements and eliminate long curing delays. Explore our essential precast elements below to understand exactly how they can benefit your specific project requirements.",
      ]}
      products={products}
    />
  );
}

export default Structural;