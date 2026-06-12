import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import DetailSections from "@/components/shared/DetailSections/DetailSections";
import TechStack from "@/components/shared/TechStack/TechStack";
import CtaBand from "@/components/shared/CtaBand/CtaBand";
import { SERVICES } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/details";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((detail) => ({ slug: detail.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.id === params.slug);
  const detail = SERVICE_DETAILS.find((d) => d.id === params.slug);
  if (!service || !detail) notFound();

  return (
    <>
      <PageHeader
        eyebrow={service.label}
        title={<span className="text-gradient">{service.title}</span>}
        subtitle={detail.tagline}
      />
      <DetailSections
        intro={detail.intro}
        features={detail.features}
        featuresEyebrow="What we deliver"
        featuresTitle={
          <>
            Everything included in{" "}
            <span className="text-gradient">{service.title}</span>
          </>
        }
        chips={detail.deliverables}
      />
      <TechStack />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
