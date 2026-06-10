import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

/**
 * PageHeader - top banner for inner routes. Adds clearance below the fixed
 * navbar and a soft sky gradient backdrop.
 */
const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
