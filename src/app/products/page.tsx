import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Products from "@/components/products/Products/Products";
import TrustedBy from "@/components/shared/TrustedBy/TrustedBy";
import CtaBand from "@/components/shared/CtaBand/CtaBand";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Next-gen software products and solutions built by Onspace across operations, e-commerce, fintech and healthcare.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products & Solutions"
        title={
          <>
            <span className="text-gradient">Next-gen softwares</span> across
            industries
          </>
        }
        subtitle="Battle-tested platforms we have built and shipped - adaptable to your domain, your data and your team."
      />
      <Products withHeader={false} />
      <TrustedBy />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
