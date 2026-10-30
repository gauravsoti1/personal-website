import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export type PostType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string;
  content: string;
  hide?: boolean;
};

const readAllPosts = (): PostType[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    } as PostType;
  });
};

export const getSortedPostsData = async (): Promise<PostType[]> => {
  return readAllPosts()
    .filter((post) => !post.hide)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getSinglePostData = async (
  slug: string,
): Promise<PostType | null> => {
  const post = readAllPosts().find((post) => post.slug === slug);
  return post ?? null;
};
