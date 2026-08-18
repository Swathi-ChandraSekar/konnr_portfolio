import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <Contact />
      <Footer />
    </>
  );
}

export default Home;