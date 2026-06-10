import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import TrustedBy from "@/components/sections/TrustedBy/TrustedBy";
import Products from "@/components/sections/Products/Products";
import Globe from "@/components/sections/Globe/Globe";
import Services from "@/components/sections/Services/Services";
import TechStack from "@/components/sections/TechStack/TechStack";
import About from "@/components/sections/About/About";
import Reviews from "@/components/sections/Reviews/Reviews";
import Blogs from "@/components/sections/Blogs/Blogs";
import Contact from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Products />
        <Globe />
        <Services />
        <TechStack />
        <About />
        <Reviews />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
