import { FiTwitter, FiLinkedin, FiGithub, FiDribbble } from "react-icons/fi";
import { NAV_LINKS, SITE } from "@/lib/site";
import styles from "./Footer.module.css";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: NAV_LINKS,
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "#services" },
      { label: "AI Automation Systems", href: "#services" },
      { label: "Website & E-commerce", href: "#services" },
      { label: "Mobile Development", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "#blogs" },
      { label: "Reviews", href: "#reviews" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.brand}>
              <span className={styles.logoMark} aria-hidden="true">
                <span className={styles.logoDot} />
              </span>
              <span>
                {SITE.shortName}
                <span className={styles.brandAccent}>space</span>
              </span>
            </a>
            <p className={styles.blurb}>
              Custom software development and AI automation systems for business,
              enterprise and startup teams.
            </p>
            <div className={styles.social}>
              <a href={SITE.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer noopener">
                <FiTwitter />
              </a>
              <a href={SITE.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
                <FiLinkedin />
              </a>
              <a href={SITE.social.github} aria-label="GitHub" target="_blank" rel="noreferrer noopener">
                <FiGithub />
              </a>
              <a href={SITE.social.dribbble} aria-label="Dribbble" target="_blank" rel="noreferrer noopener">
                <FiDribbble />
              </a>
            </div>
          </div>

          <div className={styles.cols}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.colLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
