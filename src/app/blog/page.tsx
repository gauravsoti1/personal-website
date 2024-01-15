import { getSortedPostsData } from "../../lib/posts";
import Card from "../components/Card";
import Link from "next/link";

function getData() {
  const allPostsData = getSortedPostsData();
  return allPostsData;
}

export default async function Blog() {
  const allPostsData = getData();
  return (
    <section className="p-8">
      <h2 className="text-2xl mb-4">Blog</h2>
      <ul className="list-none grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {allPostsData.map(({ id, title, slug, description }) => (
          <Link key={id} href={`/blog/${slug}`}>
            <Card>
              <h6 className="text-lg font-medium"> {title} </h6>
              {description}
              <br />
            </Card>
          </Link>
        ))}
      </ul>
    </section>
  );
}
