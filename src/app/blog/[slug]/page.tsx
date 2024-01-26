import { getSinglePostData } from "@/lib/posts";
import Markdown from "react-markdown";

type Props = {
  params: { slug: string };
};
export default function Page({ params }: Props) {
  const data = getSinglePostData(params.slug);
  console.log("single post", data);
  return (
    <div className="lg:max-w-4xl mx-auto p-8 bg-white ">
      <h1 className="mb-1 text-2xl font-bold">{data.title}</h1>
      <div className="mb-8">
        <span className="text-sm ">
          Updated at: <i>{data.date}</i>
        </span>
      </div>
      <Markdown>{data.content}</Markdown>
    </div>
  );
}
