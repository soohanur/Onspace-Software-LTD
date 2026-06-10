import type { Metadata } from "next";
import About from "@/components/about/About/About";
import Globe from "@/components/shared/Globe/Globe";
import Reviews from "@/components/shared/Reviews/Reviews";
import CtaBand from "@/components/shared/CtaBand/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Onspace Software LTD is a custom software development and AI automation agency. Learn what we stand for.",
};

export default function AboutPage() {
  return (
    <>
      <About lead />
      <Globe />
      <Reviews />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
