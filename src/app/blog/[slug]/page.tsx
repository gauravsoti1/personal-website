import { getSinglePostData } from "@/lib/posts";
import Markdown from "react-markdown";

type Props = {
  params: { slug: string };
};
export default function Page({ params }: Props) {
  const data = getSinglePostData(params.slug);
  console.log("single post", data);
  return (
    <div className="lg:container mx-auto p-8 h-screen ">
      <h1 className="mb-4 text-2xl font-bold">{data.title}</h1>
      <Markdown>{data.content}</Markdown>
    </div>
  );
}
