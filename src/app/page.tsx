import Hero from "@/components/home/Hero/Hero";
import TrustedBy from "@/components/shared/TrustedBy/TrustedBy";
import Services from "@/components/services/Services/Services";
import DemoCta from "@/components/shared/DemoCta/DemoCta";
import Globe from "@/components/shared/Globe/Globe";
import TechStack from "@/components/shared/TechStack/TechStack";
import Reviews from "@/components/shared/Reviews/Reviews";
import CtaBand from "@/components/shared/CtaBand/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <DemoCta />
      <Globe />
      <TechStack />
      <Reviews />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
