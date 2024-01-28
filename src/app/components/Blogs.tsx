"use client";
import { PostType } from "@/lib/posts";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Card from "./Card";
import { generateBlogDetailPath } from "@/lib/urlHelper";

const textClass = "font-medium text-white";
const hoverGradient =
  "hover:bg-gradient-to-r hover:from-blue-300 hover:via-purple-400 hover:o-pink-500";
const selectedButtonClassName =
  "p-2 accent-blue-900 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500";
const unselectedButtonClassName = `border-2 ${hoverGradient}`;

function Blogs({ posts }: { posts: PostType[] }) {
  const [codingOrLife, setCodingOrLife] = useState("coding");
  const filteredPosts = useMemo(
    () => posts.filter(({ tags }) => tags.includes(codingOrLife)),
    [posts, codingOrLife]
  );
  return (
    <section className="p-8">
      <h2 className="text-xl mb-4 ">Blog</h2>
      <div className="grid grid-cols-2 mb-4 gap-2">
        <button
          className={` ${
            codingOrLife === "coding"
              ? selectedButtonClassName
              : unselectedButtonClassName
          } ${textClass}`}
          onClick={() => setCodingOrLife("coding")}
        >
          Coding
        </button>
        <button
          className={`${
            codingOrLife === "life"
              ? selectedButtonClassName
              : unselectedButtonClassName
          } ${textClass}`}
          onClick={() => setCodingOrLife("life")}
        >
          Life
        </button>
      </div>
      <ul className="list-none grid md:grid-cols-2 xl:grid-cols-3 gap-4 pl-0">
        {filteredPosts.map(({ id, title, slug, description }) => (
          <Link key={id} href={generateBlogDetailPath(slug)}>
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

export default Blogs;
