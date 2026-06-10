import { FiArrowUpRight, FiZap } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { PRODUCTS } from "@/lib/content";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <section className="section" id="products">
      <div className="container">
        <SectionHeader
          eyebrow="Our Products & Solutions"
          title={
            <>
              <span className="text-gradient">Next-gen softwares</span> across
              industries
            </>
          }
          subtitle="Battle-tested platforms we have built and shipped - adaptable to your domain, your data and your team."
        />

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.industry}>{product.industry}</span>
                <FiArrowUpRight className={styles.arrow} />
              </div>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.desc}>{product.description}</p>
              <ul className={styles.tags}>
                {product.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Custom CTA box - single focused line + action */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <span className={styles.ctaKicker}>
              <FiZap />I have a custom project idea
            </span>
            <h3 className={styles.ctaTitle}>
              Get your custom demo in 48 hours. No slides, no decks - just a
              high-fidelity prototype built to solve your specific needs.
            </h3>
          </div>
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            Submit request
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
