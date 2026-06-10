import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div className={`${styles.header} ${align === "center" ? styles.center : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtext">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
