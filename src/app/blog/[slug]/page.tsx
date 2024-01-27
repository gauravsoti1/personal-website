import { getSinglePostData } from "@/lib/posts";
import Markdown from "react-markdown";

type Props = {
  params: { slug: string };
};
export default function Page({ params }: Props) {
  const data = getSinglePostData(params.slug);
  return (
    <div className="lg:max-w-4xl mx-auto p-8 bg-white shadow-xl">
      <h1 className="mb-1 text-3xl font-bold">{data.title}</h1>
      <div className="mb-4 ">
        <span className="text-sm ">
          Updated at: <i>{new Date(data.date).toDateString()}</i>
        </span>
      </div>
      <hr className="pb-4" />
      <Markdown>{data.content}</Markdown>
    </div>
  );
}
