import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import type { BlogDetail } from "@/lib/types";
import styles from "./BlogArticle.module.css";

interface BlogArticleProps {
  detail: BlogDetail;
}

const BlogArticle = ({ detail }: BlogArticleProps) => {
  return (
    <section className="section">
      <div className="container">
        <article className={styles.article}>
          {detail.sections.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div className={styles.back}>
            <Link href="/blogs" className="btn btn-secondary">
              <FiArrowLeft />
              All posts
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogArticle;
