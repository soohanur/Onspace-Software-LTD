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

export interface Review {
  id: string;
  name: string;
  handle: string;
  country: string;
  avatar: string;
  body: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export interface AboutPillar {
  prefix: string;
  highlight: string;
}
