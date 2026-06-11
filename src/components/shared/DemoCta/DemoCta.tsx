import Link from "next/link";
import { FiClock, FiGift, FiShield } from "react-icons/fi";
import styles from "./DemoCta.module.css";

const PERKS = [
  { icon: <FiClock />, label: "48h", sub: "To go" },
  { icon: <FiGift />, label: "Free", sub: "No cost" },
  { icon: <FiShield />, label: "NDA", sub: "Protected" },
];

const DemoCta = () => {
  return (
    <section className="section" id="demo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          {/* Placeholder dashboard image - swap with our own product shot later */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
            alt="Analytics dashboard prototype"
            className={styles.image}
            loading="lazy"
          />
          <ul className={styles.perks}>
            {PERKS.map((perk) => (
              <li key={perk.label} className={styles.perk}>
                <span className={styles.perkIcon}>{perk.icon}</span>
                <span>
                  <span className={styles.perkLabel}>{perk.label}</span>
                  <span className={styles.perkSub}>{perk.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Get Your Custom <span className="text-gradient">Demo in 48 Hours</span>
          </h2>
          <p className={styles.text}>
            We will analyze your requirements and you will receive a working
            prototype within just two business days. No slides, no obligations -
            just a high-fidelity prototype built to solve your specific needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Demo in 48h
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoCta;
