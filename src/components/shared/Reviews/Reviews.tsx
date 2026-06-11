import { FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { REVIEWS } from "@/lib/content";
import type { Review, ReviewSource } from "@/lib/types";
import styles from "./Reviews.module.css";

const SOURCE_ICONS: Record<ReviewSource, React.ReactNode> = {
  fiverr: (
    <span className={styles.fiverrF} title="Fiverr">
      fi
    </span>
  ),
  upwork: <SiUpwork title="Upwork" />,
  clutch: <FiStar title="Clutch" />,
  google: <FaGoogle title="Google" />,
  linkedin: <FaLinkedinIn title="LinkedIn" />,
};

const ReviewCard = ({ review }: { review: Review }) => (
  <figure className={styles.card}>
    <figcaption className={styles.cardTop}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={review.avatar}
        alt={review.name}
        className={styles.avatar}
        loading="lazy"
        width={32}
        height={32}
      />
      <span className={styles.meta}>
        <span className={styles.handle}>{review.handle}</span>
        <span className={styles.country}>{review.country}</span>
      </span>
      <span className={styles.x} aria-label={review.source}>
        {SOURCE_ICONS[review.source]}
      </span>
    </figcaption>
    <blockquote className={styles.body}>{review.body}</blockquote>
  </figure>
);

const Column = ({
  reviews,
  speed,
  reverse = false,
}: {
  reviews: Review[];
  speed: string;
  reverse?: boolean;
}) => (
  <div className={styles.col}>
    <div
      className={`${styles.colTrack} ${reverse ? styles.reverse : ""}`}
      style={{ animationDuration: speed }}
    >
      {[...reviews, ...reviews].map((review, i) => (
        <ReviewCard key={`${review.id}-${i}`} review={review} />
      ))}
    </div>
  </div>
);

const Reviews = () => {
  const colA = REVIEWS.slice(0, 4);
  const colB = REVIEWS.slice(4, 8);
  const colC = REVIEWS.slice(8, 12);

  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHeader
          eyebrow="Loved by developers & founders"
          title={
            <>
              Teams ship faster with{" "}
              <span className="text-gradient">Onspace</span>
            </>
          }
          subtitle="Real words from clients across the countries we work with."
        />

        <div className={styles.columns}>
          <Column reviews={colA} speed="42s" />
          <Column reviews={colB} speed="56s" reverse />
          <Column reviews={colC} speed="48s" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
