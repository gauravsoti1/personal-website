import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    await prisma.post.upsert({
      where: { slug: data.slug },
      update: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        tags: data.tags,
        content,
        hide: Boolean(data.hide),
      },
      create: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        tags: data.tags,
        content,
        hide: Boolean(data.hide),
      },
    });

    console.log(`Migrated: ${data.slug}`);
  }

  console.log(`Done. Migrated ${fileNames.length} post(s).`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
