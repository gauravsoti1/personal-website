import { prisma } from "@/lib/prisma";

export type PostInput = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string;
  content: string;
  hide: boolean;
};

export const createPost = (input: PostInput) =>
  prisma.post.create({
    data: { ...input, date: new Date(input.date) },
  });

export const updatePost = (slug: string, input: PostInput) =>
  prisma.post.update({
    where: { slug },
    data: { ...input, date: new Date(input.date) },
  });

export const deletePost = (slug: string) =>
  prisma.post.delete({ where: { slug } });
