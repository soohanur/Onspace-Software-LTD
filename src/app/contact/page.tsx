import type { Metadata } from "next";
import Contact from "@/components/contact/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Talk to an Onspace expert. Tell us your idea and we will get back within one business day.",
};

export default function ContactPage() {
  return <Contact lead />;
}
