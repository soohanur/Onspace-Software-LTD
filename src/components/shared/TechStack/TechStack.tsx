"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { TECH_CATEGORIES } from "@/lib/content";
import styles from "./TechStack.module.css";

const TechStack = () => {
  const [activeId, setActiveId] = useState(TECH_CATEGORIES[0].id);
  const active =
    TECH_CATEGORIES.find((c) => c.id === activeId) ?? TECH_CATEGORIES[0];

  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <SectionHeader
          eyebrow="Our Tech Stack"
          title={
            <>
              Engineered with{" "}
              <span className="text-gradient">Modern Tech Stacks</span>
            </>
          }
        />

        <div className={styles.tabs} role="tablist" aria-label="Tech categories">
          {TECH_CATEGORIES.map((cat) => (
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

        <div className={styles.panel}>
          <div className={styles.grid}>
            {active.items.map((item) => (
              <div key={item.name} className={styles.chip}>
                <span className={styles.chipIcon}>{item.icon}</span>
                <span className={styles.chipName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
