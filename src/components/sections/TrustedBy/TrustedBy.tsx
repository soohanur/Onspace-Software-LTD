import LogoLoop from "@/components/reactbits/LogoLoop/LogoLoop";
import { TRUSTED_LOGOS } from "@/lib/content";
import styles from "./TrustedBy.module.css";

const TrustedBy = () => {
  return (
    <section className={styles.section} aria-label="Trusted by">
      <div className="container">
        <p className={styles.label}>
          Trusted by teams building with modern technology
        </p>
        <div className={styles.loop}>
          <LogoLoop
            logos={TRUSTED_LOGOS}
            speed={90}
            direction="left"
            logoHeight={40}
            gap={64}
            fadeOut
            fadeOutColor="#ffffff"
            scaleOnHover
            pauseOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
