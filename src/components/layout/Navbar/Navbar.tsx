"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, SITE } from "@/lib/site";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav
        className={`${styles.bar} ${scrolled ? styles.barScrolled : ""}`}
        aria-label="Primary"
      >
        <a href="#top" className={styles.brand} aria-label={`${SITE.name} home`}>
          <span className={styles.logoMark} aria-hidden="true">
            <span className={styles.logoDot} />
          </span>
          <span className={styles.brandText}>
            {SITE.shortName}
            <span className={styles.brandAccent}>space</span>
          </span>
        </a>

        <ul className={styles.menu}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.menuLink} ${link.muted ? styles.muted : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            Talk to an expert
          </a>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Talk to an expert
        </a>
      </div>
    </header>
  );
};

export default Navbar;
