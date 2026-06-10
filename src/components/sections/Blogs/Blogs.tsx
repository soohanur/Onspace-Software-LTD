import { FiArrowRight, FiClock } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { BLOG_POSTS } from "@/lib/content";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <section className="section" id="blogs">
      <div className="container">
        <div className={styles.head}>
          <SectionHeader
            align="left"
            eyebrow="From the blog"
            title="Ideas, engineering & playbooks"
            subtitle="Notes from the team on building production software and AI systems."
          />
          <a href="#" className="btn btn-secondary">
            View all posts
            <FiArrowRight />
          </a>
        </div>

        <div className={styles.grid}>
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.thumb} aria-hidden="true">
                <span className={styles.thumbTag}>{post.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.readTime}>
                    <FiClock />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
