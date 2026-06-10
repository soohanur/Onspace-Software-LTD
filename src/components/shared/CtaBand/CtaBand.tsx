import Link from "next/link";
import { FiArrowUpRight, FiZap } from "react-icons/fi";
import styles from "./CtaBand.module.css";

interface CtaBandProps {
  kicker?: string;
  title?: string;
  buttonLabel?: string;
  href?: string;
}

/**
 * CtaBand - the dark "custom demo" call-to-action band.
 * Reused on the home page and the products page.
 */
const CtaBand = ({
  kicker = "I have a custom project idea",
  title = "Get your custom demo in 48 hours. No slides, no decks - just a high-fidelity prototype built to solve your specific needs.",
  buttonLabel = "Submit request",
  href = "/contact",
}: CtaBandProps) => {
  return (
    <div className={styles.ctaBox}>
      <div className={styles.ctaGlow} aria-hidden="true" />
      <div className={styles.ctaContent}>
        <span className={styles.ctaKicker}>
          <FiZap />
          {kicker}
        </span>
        <h3 className={styles.ctaTitle}>{title}</h3>
      </div>
      <Link href={href} className={`btn btn-primary ${styles.ctaBtn}`}>
        {buttonLabel}
        <FiArrowUpRight />
      </Link>
    </div>
  );
};

export default CtaBand;
