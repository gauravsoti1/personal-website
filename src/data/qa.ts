export type QA = {
  question: string;
  answer: string;
  tags?: string[];
};

const data: QA[] = [
  {
    tags: ["seo", "nextjs"],
    question: "How to create sitemap in Next JS when using app router?",
    answer: `Create a \`sitemap.ts\` file in app directory
  Sample code for blogs:
  \`\`\`tsx
  import { BASE_URL } from "@/lib/constants";
  import { getSortedPostsData } from "@/lib/posts";
  import { generateBlogDetailPath } from "@/lib/urlHelper";
  import { MetadataRoute } from "next";
  
  export default async function sitemap(): MetadataRoute.Sitemap {
    const posts = getSortedPostsData();
  
    return posts.map((post) => ({
      url: \`\${BASE_URL}\${generateBlogDetailPath(post.slug)}\`,
      lastModified: post.date,
      
    }));
  }
  
  \`\`\`
  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

  https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps`,
  },
  {
    tags: ["markdown"],
    question: "How to add a todo list in markdown file?",
    answer: `Make sure you have a list with \`-\` and then create brackets with \`space\` for unchecked and brackets with \`x\` for checked.   
    
    - [ ]
    - [x]
  `,
  },
  {
    tags: ["react", "markdown"],
    question: "How to render a simple markdown in react?",
    answer: "",
  },
];

export default data;
