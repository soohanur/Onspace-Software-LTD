"use client";

import { useState } from "react";
import LogoLoop from "@/components/reactbits/LogoLoop/LogoLoop";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { TECH_CATEGORIES } from "@/lib/content";
import styles from "./TechStack.module.css";

const TechStack = () => {
  const [activeId, setActiveId] = useState(TECH_CATEGORIES[0].id);
  const active =
    TECH_CATEGORIES.find((c) => c.id === activeId) ?? TECH_CATEGORIES[0];

  const loopLogos = active.items.map((item) => ({
    node: item.icon,
    title: item.name,
    ariaLabel: item.name,
  }));

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
          subtitle="Pick a layer to see the tools we reach for. Battle-tested, well-supported and chosen for the job."
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

          <div className={styles.loop}>
            <LogoLoop
              key={active.id}
              logos={loopLogos}
              speed={70}
              direction="left"
              logoHeight={34}
              gap={56}
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel={`${active.label} technologies`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
