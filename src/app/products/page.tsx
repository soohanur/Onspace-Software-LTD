import type { Metadata } from "next";
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
      <Products lead />
      <TrustedBy />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
