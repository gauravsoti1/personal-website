import { prisma } from "@/lib/prisma";

export type PostType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string;
  content: string;
  hide: boolean;
};

const toPostType = (post: {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: Date;
  tags: string;
  content: string;
  hide: boolean;
}): PostType => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  description: post.description,
  date: post.date.toISOString().slice(0, 10),
  tags: post.tags,
  content: post.content,
  hide: post.hide,
});

export const getSortedPostsData = async (): Promise<PostType[]> => {
  const posts = await prisma.post.findMany({
    where: { hide: false },
    orderBy: { date: "desc" },
  });
  return posts.map(toPostType);
};

export const getAllPostsData = async (): Promise<PostType[]> => {
  const posts = await prisma.post.findMany({
    orderBy: { date: "desc" },
  });
  return posts.map(toPostType);
};

export const getSinglePostData = async (
  slug: string,
): Promise<PostType | null> => {
  const post = await prisma.post.findUnique({ where: { slug } });
  return post ? toPostType(post) : null;
};
