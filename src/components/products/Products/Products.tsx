import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { PRODUCTS } from "@/lib/content";
import styles from "./Products.module.css";

interface ProductsProps {
  withHeader?: boolean;
}

const Products = ({ withHeader = true }: ProductsProps) => {
  return (
    <section className="section" id="products">
      <div className="container">
        {withHeader && (
          <SectionHeader
            eyebrow="Our Products & Solutions"
            title={
              <>
                <span className="text-gradient">Next-gen softwares</span> across
                industries
              </>
            }
          />
        )}

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className={styles.card}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
