Q) How to create sitemap in Next JS when using app router?
Tags) Seo, NextJS
A) Create a `sitemap.ts` file in app directory
Sample code for blogs:
```tsx
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

Q) Where to add a robots.txt in Next JS 14?
Tags) Seo, NextJS
A) In public folder. Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

Q) How to generate metadata in NextJS 14?
Tags) Seo, NextJS
A) https://nextjs.org/docs/app/building-your-application/optimizing/metadata

Q) Where and how to add icons like favico?
Tags) Seo, NextJS
A) You can add favico, icon or apple-icon in app directory and it will be added to the html head automatically.
https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Q) How to add a todo list in markdown file?
Tags) Markdown
A) Make sure you have a list with `-` and then create brackets with `space` for unchecked and brackets with `x` for checked
```
- [ ]
- [x]
```

Q) How to add a custom meta tag in a static way?
Tags) Seo, NextJS
A) For it to be on the home page, from root layout file, do this:
```typescript
export const metadata: Metadata = {
  other: {
    "google-site-verification": "ds-l9Fc",
  },
};
```
it is to be added inside the other key

Q) How to verify your website on google search console?
Tags) Seo
A) There are many methods, we can add a google verification meta tag on the home page.

Q) How to disable automatic dark mode in tailwind?
Tags) CSS, Tailwind
A) Add this in `tailwind.config.ts`
  ```typescript
  const config: Config = {
      darkMode: "class"
    }
  ```
Q) How to render a responsive image in NextJS 13 which generates blur url automatically?
Tags) CSS, NextJS, Responsive, image
A) For nextjs to generate blur url automatically, image should be statically imported like this. This way nextjs can automatically figure out the width and height of the image and can also automatically generate a blur image if you provide `placeholder=blur` value, default value = `empty`
`import myImage from './myImage.png;`
```tsx
  <Image
      priority
      src={myPic}
      alt="Gaurav Sobti pic"
      className="object-contain w-[40%] h-[auto]"
      placeholder="blur"
    />
```

Q) Prism from react-syntax-highlighter has a large footprint of around 420kb, how can you reduce it?
Tags) Seo, Markdown, React
A) Use PrismLight and register the languages you want to highlight.
```tsx
  import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
  import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
  import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

  SyntaxHighlighter.registerLanguage("jsx", jsx);
  SyntaxHighlighter.registerLanguage("tsx", tsx);
```

Q) How to tell typescript compiler that the value won't be null or undefined when it's not able to infer itself?
A) Just use non-null assertion operator: `!`
```typescript
    // Compiled with --strictNullChecks
  function validateEntity(e?: Entity) {
    // Throw exception if e is null or invalid entity
  }
  function processEntity(e?: Entity) {
    validateEntity(e);
    let s = e!.name; // Assert that e is non-null and access name
  }
```
Q)
