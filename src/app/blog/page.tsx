import { Metadata } from "next";
import { getSortedPostsData } from "../../lib/posts";
import Blogs from "../components/Blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on code, and occasionally on everything that isn't — writing by Gaurav Sobti.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog | Gaurav Sobti",
    description:
      "Notes on code, and occasionally on everything that isn't — writing by Gaurav Sobti.",
  },
};

export const dynamic = 'force-dynamic';

export default async function Blog() {
  const posts = await getSortedPostsData();

  return <Blogs posts={posts} />;
}
