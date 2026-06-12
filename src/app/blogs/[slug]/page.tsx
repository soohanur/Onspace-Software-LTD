import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import BlogArticle from "@/components/blogs/BlogArticle/BlogArticle";
import CtaBand from "@/components/shared/CtaBand/CtaBand";
import { BLOG_POSTS } from "@/lib/content";
import { BLOG_DETAILS } from "@/lib/details";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_DETAILS.map((detail) => ({ slug: detail.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  const detail = BLOG_DETAILS.find((d) => d.slug === params.slug);
  if (!post || !detail) notFound();

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.readTime}`}
      />
      <BlogArticle detail={detail} />
      <section className="section">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  );
}
