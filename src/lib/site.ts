import type { NavLink, AboutPillar, CountryMarker } from "./types";

export const SITE = {
  name: "Onspace Software LTD",
  shortName: "Onspace",
  tagline: "Custom software development & AI automation agency",
  email: "hello@onspace.software",
  /**
   * Free form backend (formsubmit.co) - no signup, no server needed.
   * Submissions are emailed to this inbox; the first submission sends a
   * one-time confirmation email that must be approved.
   */
  formEndpoint: "https://formsubmit.co/ajax/onspacecorp@gmail.com",
  phone: "+44 20 0000 0000",
  address: "London, United Kingdom",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    dribbble: "https://dribbble.com",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export const HERO_ROTATING_WORDS = ["business", "enterprise", "startup"];

export const ABOUT_PILLARS: AboutPillar[] = [
  { prefix: "On", highlight: "AI-powered Teams" },
  { prefix: "On", highlight: "Scalable Architecture" },
  { prefix: "On", highlight: "Time Delivery" },
  { prefix: "On", highlight: "Clear Communication" },
];

/**
 * Countries Onspace has delivered work in - rendered as interactive markers
 * on the world map. Coordinates are [longitude, latitude].
 */
export const COUNTRY_MARKERS: CountryMarker[] = [
  { name: "United Kingdom", coordinates: [-0.1278, 51.5074], clients: 24 },
  { name: "United States", coordinates: [-95.7129, 37.0902], clients: 31 },
  { name: "Germany", coordinates: [10.4515, 51.1657], clients: 12 },
  { name: "United Arab Emirates", coordinates: [54.0, 24.0], clients: 9 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], clients: 7 },
  { name: "Australia", coordinates: [133.7751, -25.2744], clients: 6 },
  { name: "Canada", coordinates: [-106.3468, 56.1304], clients: 10 },
  { name: "Bangladesh", coordinates: [90.3563, 23.685], clients: 56 },
  { name: "Netherlands", coordinates: [5.2913, 52.1326], clients: 5 },
  { name: "Malaysia", coordinates: [101.9758, 4.2105], clients: 13 },
  { name: "Brazil", coordinates: [-51.9253, -14.235], clients: 5 },
];

export const WORLD_TOPO_JSON =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
