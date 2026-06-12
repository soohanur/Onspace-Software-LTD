import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
  muted?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  label: string;
  span?: "wide" | "tall" | "normal";
  cta?: { label: string; href: string };
}

export interface ProductCard {
  id: string;
  name: string;
  industry: string;
  description: string;
  tags: string[];
}

export interface TechItem {
  name: string;
  icon: ReactNode;
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export interface CountryMarker {
  name: string;
  coordinates: [number, number];
  clients: number;
}

export type ReviewSource =
  | "fiverr"
  | "upwork"
  | "clutch"
  | "google"
  | "linkedin";

export interface Review {
  id: string;
  name: string;
  handle: string;
  country: string;
  avatar: string;
  body: string;
  source: ReviewSource;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

/* ---- Detail-page content ---- */
export interface DetailFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceDetail {
  id: string; // matches Service.id
  tagline: string;
  intro: string[];
  features: DetailFeature[];
  deliverables: string[];
}

export interface ProductDetail {
  id: string; // matches ProductCard.id
  tagline: string;
  intro: string[];
  features: DetailFeature[];
  highlights: { value: string; label: string }[];
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogDetail {
  slug: string; // matches BlogPost.slug
  sections: BlogSection[];
}

export interface AboutPillar {
  prefix: string;
  highlight: string;
}

export interface ReadymadeProduct {
  name: string;
  description: string;
  icon: ReactNode;
}

export interface ReadymadeCategory {
  id: string;
  label: string;
  items: ReadymadeProduct[];
}
