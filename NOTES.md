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
Tags) Typescript
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
Q) What's the use case of ts-node-dev package?
Tags) Typescript
A) Allows to execute Typescript code with live-reload on file

Q) In VSCode, in a NextJs project, eslint is working but it is still not showing Typescript errors, why?
Tags) VScode
A) Press `ctrl + shift + p` and then `open user settings`. Make sure that `typescript.validate.enable` is enabled.

Q) What does the command `npx prisma init` do?
Tags) prisma, node
A) - It creates `schema.prisma` file inside prisma folder which contains the start of a Prisma schema.
- It also creates a .env file and the environment variables defined are made available to Prisma

Q) What's the easiest way to host a free db for practice?
Tags) database, hosting
A) Use [railway]([railway](https://railway.app/))

Q) How to model a one-to-many relation between two models in prisma?
Tags) prisma
A) Let's take an example of User with id field and messages models.

```prisma
model User {
  id        Int       @id @default(autoincrement())
  messages  Message[]
}

model Message {
  id        Int      @id @default(autoincrement())
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
}

```

Q) What's the right way to think about your prisma schema?
Tags) prisma
A) Think of the Prisma Schema as the glue between the shape of your database and the API that interacts with it.

Q) How to perform a prisma db migration?
Tags) prisma
A) `npx prisma migrate dev`
  And if you want to name the migration: 
  `npx prisma migrate dev --name init`

Q) Give an example of seed file for prisma
Tags) prisma, database
A) 
```typescript
// seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  seedData.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });
}

main().then(() => {
  console.log("Data seeded");
});

```

Q) How to run a prisma seed file?
Tags) prisma
A) seed file is a normal js or ts file. So we can run it with node or typescript or ts-node-dev like this
`ts-node-dev prisma/seed.ts`

Q) What are the 2 approaches to building a GraphQL schema?
Tags) graphql
A) 
1. Code first: Your application code defines and generates a GraphQL schema
2. SDL-first: You manually write the GraphQL schema

Q) What scalar data types does graphql support by default?
Tags) graphql
A) 
1. Int
2. Float
3. String
4. Boolean
5. ID

Q) How to define a custom scalar type in graphql like Date?
Tags) graphql 
A) There are pre-made custom scalar type definitions available in the open source community: graphql-scalars
They can be used like this:
```typescript

import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
}>({});

builder.addScalarType("Date", DateResolver);

```

Q) How can you be sure that your frontend graphql query will stay in sync with the backend schema? 
Tags) graphql
A) By using Graphql Codegen

Q) What are the roles of Prisma, Pothos and Graphql codegen in a typescript node js and react full-stack project?
Tags) graphql, prisma, pothos
A) 
1. Prisma will generate types based off of your database schema
2. Pothos will use those types to expose GraphQL types via an API
3. GraphQL Codegen will read your GraphQL schema and generate types for your frontend codebase representing what is available via the API and how to interact with it.

Q)

Q)
