import type { Metadata } from "next";
import Readymade from "@/components/shared/Readymade/Readymade";
import TrustedBy from "@/components/shared/TrustedBy/TrustedBy";
import CtaBand from "@/components/shared/CtaBand/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-made software products by Onspace - ERP, HRM, POS, e-commerce, healthcare and fintech solutions you can launch fast.",
};

export default function ProductsPage() {
  return (
    <>
      <Readymade lead />
      <TrustedBy />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
