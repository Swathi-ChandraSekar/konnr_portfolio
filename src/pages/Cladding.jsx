import ProductPage from "../components/ProductPage";

import bannerImg from "../assets/hero3.jpeg";
import bannerImgMobile from "../assets/hero3-mobile.jpeg";

/* ============================================================
   PRODUCT IMAGE MAP — Claddings & Architectural Blocks
   ------------------------------------------------------------
   Breeze Blocks already has a real product photo (cropped from
   the reference imagery supplied for this project). The other
   two products use a generated placeholder graphic at
   src/assets/products/<name>.jpg until real photography is
   added — drop a real photo in the same filename/location to
   go live, no other code changes required.
   ============================================================ */

// 1. Concrete Wall Claddings
// TODO: replace with an actual concrete wall cladding photograph.
import claddingImage from "../assets/products/concrete-cladding.jpg";

// 2. Breeze Blocks — actual product photo
import breezeBlockImage from "../assets/products/breeze-block.jpg";

// 3. Paver Blocks
// TODO: replace with an actual paver block photograph.
import paverBlockImage from "../assets/products/paver-block.jpg";

function Cladding() {
  const products = [
    {
      image: claddingImage,
      fit: "contain",
      title: "Concrete Wall Claddings",
      alt: "Architectural concrete wall cladding",
      description:
        "Transform plain walls into striking architectural features in a fraction of the time. Our precast concrete claddings provide a rugged, high-end finish that delivers the appeal of natural stone or complex masonry, but installs quickly and cleanly. They offer superior weather resistance and durability, making them ideal for both interior feature walls and robust exterior facades.",
    },
    {
      image: breezeBlockImage,
      title: "Breeze Blocks",
      alt: "Decorative precast breeze blocks",
      description:
        "Combine privacy, natural ventilation, and dynamic shadow play with our precision-cast breeze blocks. These decorative blocks are designed for easy, modular stacking, allowing you to rapidly assemble breathable partition walls, striking building facades, or stylish boundary accents. They deliver a high-design aesthetic without the heavy labor or structural complexity of custom brickwork.",
    },
    {
      image: paverBlockImage,
      fit: "contain",
      title: "Paver Blocks",
      alt: "Interlocking concrete paver blocks",
      description:
        "Engineered for high-traffic environments, our heavy-duty paver blocks deliver immediate, load-bearing surfaces the moment they are laid. Their precise, interlocking design ensures a quick, seamless installation process for driveways, commercial parking lots, and pedestrian walkways. With absolutely zero on-site curing required, you can open your newly paved areas to vehicular and foot traffic instantly.",
    },
  ];

  return (
    <ProductPage
      bannerImage={bannerImg}
      bannerImageMobile={bannerImgMobile}
      title="Claddings & Architectural Blocks"
      subtitle="Factory-finished concrete finishes that bring premium aesthetics and rapid installation to every facade."
      sectionHeading="Surface & Structural Finishes"
      sectionDesc={[
        "Finishing a project should not mean slowing down your timeline. Our engineered claddings and architectural blocks are designed to deliver premium aesthetics and robust performance while adhering to our core promise: rapid installation and reduced on-site labor. By choosing our factory-finished concrete elements, you eliminate the tedious, time-consuming masonry and curing work traditionally required to bring a facade or landscape to life.",
        "Explore our selection of surface and structural finishes to add the perfect blend of form and function to your project:",
      ]}
      products={products}
    />
  );
}

export default Cladding;
