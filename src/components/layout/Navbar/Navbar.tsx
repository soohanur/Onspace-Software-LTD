"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, SITE } from "@/lib/site";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(y > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav
        className={`${styles.bar} ${scrolled ? styles.barScrolled : ""}`}
        aria-label="Primary"
      >
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/onspace-logo.png"
            alt=""
            className={styles.logoMark}
            aria-hidden="true"
          />
          <span className={styles.brandText}>{SITE.shortName}</span>
        </Link>

        <ul className={styles.menu}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`${styles.menuLink} ${link.muted ? styles.muted : ""} ${
                  isActive(link.href) ? styles.menuActive : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary">
            Talk to an expert
          </Link>
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

      <div
        className={`${styles.scrim} ${open ? styles.scrimOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`${styles.mobileLink} ${
                  isActive(link.href) ? styles.menuActive : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary">
          Talk to an expert
        </Link>
      </aside>
    </header>
  );
};

export default Navbar;
