"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { READYMADE_CATEGORIES } from "@/lib/content";
import styles from "./Readymade.module.css";

interface ReadymadeProps {
  /** Adds top clearance for the fixed navbar when Readymade leads a page. */
  lead?: boolean;
}

const Readymade = ({ lead = false }: ReadymadeProps) => {
  const [activeId, setActiveId] = useState(READYMADE_CATEGORIES[0].id);
  const active =
    READYMADE_CATEGORIES.find((c) => c.id === activeId) ??
    READYMADE_CATEGORIES[0];

  return (
    <section
      className={`section ${lead ? styles.lead : ""}`}
      id="readymade"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Our Products"
          title={
            <>
              Our Readymade Software{" "}
              <span className="text-gradient">Solutions</span>
            </>
          }
        />

        <div className={styles.tabs} role="tablist" aria-label="Product categories">
          {READYMADE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={cat.id === activeId}
              className={`${styles.tab} ${cat.id === activeId ? styles.tabActive : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {active.items.map((item) => (
            <article key={item.name} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <div>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Readymade;
