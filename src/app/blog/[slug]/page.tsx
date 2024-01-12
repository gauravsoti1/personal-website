import { getSinglePostData } from "@/lib/posts";
import Markdown from "react-markdown";

type Props = {
  params: { slug: string };
};
export default function Page({ params }: Props) {
  const data = getSinglePostData(params.slug);
  console.log("single post", data);
  return (
    <div>
      <Markdown>{data.content}</Markdown>
    </div>
  );
}
