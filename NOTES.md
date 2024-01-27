Q) How to create sitemap in Next JS when using app router?
A) Create a `sitemap.ts` file in app directory
Sample code for blogs:
```typescript
import { BASE_URL } from "@/lib/constants";
import { getSortedPostsData } from "@/lib/posts";
import { generateBlogDetailPath } from "@/lib/urlHelper";
import { MetadataRoute } from "next";

export default async function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    url: `${BASE_URL}${generateBlogDetailPath(post.slug)}`,
    lastModified: post.date,
    
  }));
}

```
https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps

Q) Where to add a robots.txt in Next JS?
A) In public folder. Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

Q) How to generate metadata?
A) https://nextjs.org/docs/app/building-your-application/optimizing/metadata

Q) Where and how to add icons like favico?
A) https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Q) How to add a todo list in markdown file?
A) Make sure you have a list with `-` and then create brackets with `space` for unchecked and brackets with `x` for checked
```
- [ ]
- [x]
```