import Link from "next/link";
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
      { label: "Software Development", href: "/services" },
      { label: "AI Automation Systems", href: "/services" },
      { label: "Website & E-commerce", href: "/services" },
      { label: "Mobile Development", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/onspace-logo.png"
                alt=""
                className={styles.logoMark}
                aria-hidden="true"
              />
              <span>{SITE.shortName}</span>
            </Link>
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
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
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
