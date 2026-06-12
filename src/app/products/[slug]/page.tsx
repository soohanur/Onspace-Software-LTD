import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import DetailSections from "@/components/shared/DetailSections/DetailSections";
import TrustedBy from "@/components/shared/TrustedBy/TrustedBy";
import CtaBand from "@/components/shared/CtaBand/CtaBand";
import { PRODUCTS } from "@/lib/content";
import { PRODUCT_DETAILS } from "@/lib/details";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PRODUCT_DETAILS.map((detail) => ({ slug: detail.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = PRODUCTS.find((p) => p.id === params.slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = PRODUCTS.find((p) => p.id === params.slug);
  const detail = PRODUCT_DETAILS.find((d) => d.id === params.slug);
  if (!product || !detail) notFound();

  return (
    <>
      <PageHeader
        eyebrow={product.industry}
        title={<span className="text-gradient">{product.name}</span>}
        subtitle={detail.tagline}
      />
      <DetailSections
        intro={detail.intro}
        features={detail.features}
        featuresEyebrow="Inside the product"
        featuresTitle={
          <>
            What <span className="text-gradient">{product.name}</span> does for
            you
          </>
        }
        stats={detail.highlights}
        chips={product.tags}
      />
      <TrustedBy />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
