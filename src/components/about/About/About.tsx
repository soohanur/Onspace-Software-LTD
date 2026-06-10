"use client";

import { useState } from "react";
import { SITE, ABOUT_PILLARS } from "@/lib/site";
import styles from "./About.module.css";

interface AboutProps {
  /** Adds top clearance for the fixed navbar when About is a page's first block. */
  lead?: boolean;
}

const About = ({ lead = false }: AboutProps) => {
  const [active, setActive] = useState(0);

  return (
    <section
      className={`section ${lead ? styles.lead : ""}`}
      id="about"
    >
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className="eyebrow">About {SITE.shortName}</span>
            <h2 className="section-heading">
              We make it your own,
              <br />
              built on what we stand for.
            </h2>
            <p className="section-subtext">
              {SITE.shortName} is a custom software development agency building
              software solutions and AI automation systems for ambitious teams.
            </p>
          </div>

          <ul className={styles.pillars}>
            {ABOUT_PILLARS.map((pillar, i) => (
              <li
                key={pillar.highlight}
                className={`${styles.pillar} ${i === active ? styles.active : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className={styles.brandWord}>{SITE.shortName}</span>
                <span className={styles.stands}> Stands </span>
                <span className={styles.prefix}>{pillar.prefix} </span>
                <span className={styles.highlight}>{pillar.highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
