import { NextRequest, NextResponse } from "next/server";
import { getAllPostsData } from "@/lib/posts";
import { createPost, PostInput } from "@/lib/postsAdmin";

export async function GET() {
  const posts = await getAllPostsData();
  return NextResponse.json({ posts });
}

const isValidInput = (body: unknown): body is PostInput => {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.slug === "string" &&
    b.slug.length > 0 &&
    typeof b.title === "string" &&
    typeof b.description === "string" &&
    typeof b.date === "string" &&
    typeof b.tags === "string" &&
    typeof b.content === "string" &&
    typeof b.hide === "boolean"
  );
};

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!isValidInput(body)) {
    return NextResponse.json({ error: "Invalid post data" }, { status: 400 });
  }

  try {
    const post = await createPost(body);
    return NextResponse.json({ post }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "A post with that slug already exists" },
      { status: 409 },
    );
  }
}
