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
          borderColor="#e2eefb"
          hoverFillColor="#bae6fd"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>
      <div className={styles.fade} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Custom software & AI automation agency
        </span>

        <h1 className={styles.title}>
          <span className="text-gradient">AI powered</span>
          <span className={styles.titleLine}>
            Next-gen solutions for&nbsp;
            <RotatingText words={HERO_ROTATING_WORDS} />
          </span>
        </h1>

        <p className={styles.subtitle}>
          Onspace Software LTD builds and ships premium software solutions and AI
          automation systems - clean, scalable and delivered on time.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            Get your custom demo
            <FiArrowRight />
          </a>
          <a href="#services" className="btn btn-secondary">
            Explore services
          </a>
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
