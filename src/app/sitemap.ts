import { BASE_URL } from "@/lib/constants";
import { getSortedPostsData } from "@/lib/posts";
import { generateBlogDetailPath } from "@/lib/urlHelper";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getSortedPostsData();

  const blogPostsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}${generateBlogDetailPath(post.slug)}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
  const sitemapData: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPostsSitemap,
  ];
  return sitemapData;
}
