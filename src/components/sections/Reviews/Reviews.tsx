import { FiStar } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { REVIEWS } from "@/lib/content";
import type { Review } from "@/lib/types";
import styles from "./Reviews.module.css";

const ReviewCard = ({ review }: { review: Review }) => (
  <figure className={styles.card}>
    <div className={styles.stars} aria-label={`${review.rating} out of 5`}>
      {Array.from({ length: review.rating }).map((_, i) => (
        <FiStar key={i} className={styles.star} />
      ))}
    </div>
    <blockquote className={styles.body}>{review.body}</blockquote>
    <figcaption className={styles.person}>
      <span className={styles.avatar} aria-hidden="true">
        {review.avatar}
      </span>
      <span>
        <span className={styles.name}>{review.name}</span>
        <span className={styles.role}>
          {review.role}, {review.company}
        </span>
      </span>
    </figcaption>
  </figure>
);

const Reviews = () => {
  const rowA = REVIEWS.slice(0, 3);
  const rowB = REVIEWS.slice(3);

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
          subtitle="Real words from the people we have partnered with across products and industries."
        />
      </div>

      <div className={styles.marquee} aria-hidden="false">
        <div className={`${styles.track} ${styles.left}`}>
          {[...rowA, ...rowA].map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
        </div>
        <div className={`${styles.track} ${styles.right}`}>
          {[...rowB, ...rowB].map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
