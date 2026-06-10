import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Blogs from "@/components/blogs/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas, engineering notes and playbooks from the Onspace Software LTD team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="From the blog"
        title="Ideas, engineering & playbooks"
        subtitle="Notes from the team on building production software and AI systems."
      />
      <Blogs withHeader={false} />
    </>
  );
}
