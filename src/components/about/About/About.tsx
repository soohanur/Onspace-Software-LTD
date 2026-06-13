import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SITE, ABOUT_PILLARS } from "@/lib/site";
import styles from "./About.module.css";

interface AboutProps {
  /** Adds top clearance for the fixed navbar when About is a page's first block. */
  lead?: boolean;
}

const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "11", label: "Countries served" },
  { value: "98%", label: "On-time delivery" },
  { value: "5.0", label: "Average client rating" },
];

const About = ({ lead = false }: AboutProps) => {
  return (
    <section className={`section ${lead ? styles.lead : ""}`} id="about">
      <div className="container">
        <div className={styles.hero}>
          <span className="eyebrow">About {SITE.shortName}</span>
          <h1 className={styles.heading}>
            We build software that
            <br />
            <span className="text-gradient">feels like your own.</span>
          </h1>
          <p className={styles.copy}>
            {SITE.name} is a custom software development and AI automation
            agency. We partner with founders and teams to design, build and ship
            products that scale - from a 48-hour prototype to enterprise-grade
            platforms running in production.
          </p>
          <p className={styles.copy}>
            One senior team owns every build, with weekly demos, honest
            estimates and code your own engineers will be glad to inherit. No
            handoffs, no surprises - just software that works.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Start a project
              <FiArrowRight />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <ul className={styles.pillars}>
          {ABOUT_PILLARS.map((pillar) => (
            <li key={pillar.highlight} className={styles.pillar}>
              <span className={styles.prefix}>{pillar.prefix}</span>
              <span className={styles.highlight}>{pillar.highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
