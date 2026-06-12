import { FiCheck } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import type { DetailFeature } from "@/lib/types";
import styles from "./DetailSections.module.css";

interface DetailSectionsProps {
  intro: string[];
  features: DetailFeature[];
  featuresEyebrow?: string;
  featuresTitle: React.ReactNode;
  /** Pill list rendered under the features (e.g. deliverables). */
  chips?: string[];
  /** Stat cards rendered above the features (e.g. product highlights). */
  stats?: { value: string; label: string }[];
}

/**
 * DetailSections - shared body for service/product detail pages: intro copy,
 * optional stat highlights, a feature grid and an optional chip list.
 */
const DetailSections = ({
  intro,
  features,
  featuresEyebrow,
  featuresTitle,
  chips,
  stats,
}: DetailSectionsProps) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {stats && (
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={featuresEyebrow} title={featuresTitle} />

          <div className={styles.grid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.card}>
                <span className={styles.icon}>{feature.icon}</span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </article>
            ))}
          </div>

          {chips && (
            <ul className={styles.chips}>
              {chips.map((chip) => (
                <li key={chip} className={styles.chip}>
                  <FiCheck />
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default DetailSections;
