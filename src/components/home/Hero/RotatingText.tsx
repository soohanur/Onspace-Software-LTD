"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

/**
 * RotatingText - cycles words with a "rise from bottom" animation.
 */
const RotatingText = ({ words, interval = 2200 }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={styles.rotator} aria-live="polite">
      {/* Reserve width using the longest word to avoid layout shift */}
      <span className={styles.rotatorSizer} aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          className={`${styles.rotatorWord} ${i === index ? styles.rotatorActive : ""}`}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default RotatingText;
