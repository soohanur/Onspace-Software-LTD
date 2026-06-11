import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ShapeGrid from "@/components/reactbits/ShapeGrid/ShapeGrid";
import { HERO_ROTATING_WORDS } from "@/lib/site";
import RotatingText from "./RotatingText";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      {/* Animated ShapeGrid background, tuned for the white theme */}
      <div className={styles.gridBg} aria-hidden="true">
        <ShapeGrid
          direction="diagonal"
          speed={0.4}
          squareSize={46}
          borderColor="#e3eef9"
          hoverFillColor="#bae0f3"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>
      <div className={styles.fade} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>Custom software & AI automation</span>

        <h1 className={styles.title}>
          <span>AI powered</span>
          <span className={styles.titleLine}>
            Next-gen solutions for&nbsp;
            <RotatingText words={HERO_ROTATING_WORDS} />
          </span>
        </h1>

        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary">
            Get your custom demo
            <FiArrowRight />
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Explore services
          </Link>
        </div>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt className={styles.statValue}>120+</dt>
            <dd className={styles.statLabel}>Products shipped</dd>
          </div>
          <div className={styles.stat}>
            <dt className={styles.statValue}>10+</dt>
            <dd className={styles.statLabel}>Countries served</dd>
          </div>
          <div className={styles.stat}>
            <dt className={styles.statValue}>48h</dt>
            <dd className={styles.statLabel}>To first prototype</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
