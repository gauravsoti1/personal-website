import { BASE_URL } from "@/lib/constants";
import { getSortedPostsData } from "@/lib/posts";
import { generateBlogDetailPath } from "@/lib/urlHelper";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  const blogPostsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}${generateBlogDetailPath(post.slug)}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
  }));
  const sitemapData: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2024-01-24").toISOString(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2024-01-24").toISOString(),
    },
    ...blogPostsSitemap,
  ];
  return sitemapData;
}
