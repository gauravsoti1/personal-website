import { NextRequest, NextResponse } from "next/server";
import { getSinglePostData } from "@/lib/posts";
import { deletePost, updatePost, PostInput } from "@/lib/postsAdmin";

type Params = { params: { slug: string } };

export async function GET(_request: NextRequest, { params }: Params) {
  const post = await getSinglePostData(params.slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
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

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json().catch(() => null);
  if (!isValidInput(body)) {
    return NextResponse.json({ error: "Invalid post data" }, { status: 400 });
  }

  try {
    const post = await updatePost(params.slug, body);
    return NextResponse.json({ post });
  } catch {
    return NextResponse.json(
      { error: "Update failed (post or slug conflict)" },
      { status: 409 },
    );
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    await deletePost(params.slug);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
