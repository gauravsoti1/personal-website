import { getSortedPostsData } from "../../lib/posts";
import Blogs from "../components/Blogs";

export default function Blog() {
  const posts = getSortedPostsData();

  return <Blogs posts={posts} />;
}
