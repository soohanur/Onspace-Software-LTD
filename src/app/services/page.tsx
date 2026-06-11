import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Services from "@/components/services/Services/Services";
import TechStack from "@/components/shared/TechStack/TechStack";
import CtaBand from "@/components/shared/CtaBand/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, AI automation systems, website & e-commerce and mobile development from Onspace Software LTD.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Solutions <span className="text-gradient">Tailored for You</span>
          </>
        }
      />
      <Services withHeader={false} />
      <TechStack />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
