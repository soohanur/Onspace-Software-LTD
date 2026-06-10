import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import ClickSpark from "@/components/reactbits/ClickSpark/ClickSpark";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onspace.software"),
  title: {
    default: "Onspace Software LTD - Custom Software & AI Automation Agency",
    template: "%s | Onspace Software LTD",
  },
  description:
    "Onspace Software LTD is a custom software development agency building next-gen software solutions and AI automation systems for businesses, enterprises and startups.",
  keywords: [
    "custom software development",
    "AI automation",
    "software agency",
    "web development",
    "mobile development",
    "enterprise software",
  ],
  openGraph: {
    title: "Onspace Software LTD - Custom Software & AI Automation Agency",
    description:
      "Next-gen software solutions and AI automation systems for business, enterprise and startup.",
    type: "website",
    siteName: "Onspace Software LTD",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        {/* Full-website click effect, tuned for the white theme */}
        <ClickSpark sparkColor="#38bdf8" sparkSize={10} sparkRadius={16} sparkCount={8} duration={500}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
