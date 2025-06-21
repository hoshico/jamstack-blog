import parse, { Element } from "html-react-parser";
import CodeBlock from "./CodeBlock";
import type { Blog } from "@/libs/api/generated";
import { format } from "date-fns";
import TableOfContents from "./blog/TableOfContents";

interface BlogContentProps {
  blog: Blog;
  generatedAt: string;
}

export default function BlogContent({ blog, generatedAt }: BlogContentProps) {
  const parsed = parse(blog.body || "", {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "pre") {
        const codeElement = domNode.children[0] as Element;
        if (codeElement && codeElement.name === "code") {
          const code =
            codeElement.children[0]?.type === "text"
              ? codeElement.children[0].data
              : "";
          return <CodeBlock>{code}</CodeBlock>;
        }
      }
    },
  });

  return (
    <div data-theme="winter">
      <p>検証用: 🕰️{generatedAt}</p>
      <div className="bg-linear-to-b from-primary-content via-info to-neutral-content dark:from-base-content dark:to-base-content m-auto w-full">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="dark:text-base-100 mx-auto md:max-w-7xl">
              <div className="px-8 text-center font-extrabold tracking-wider md:text-4xl">
                {blog.title}
              </div>
              <div className="m-auto mt-5 px-8 md:w-32 md:px-0">
                <p className="dark:text-base-100 text-center text-sm text-gray-500">
                  {blog.publishedAt && (
                    <>
                      {format(new Date(blog.publishedAt), "yyyy-MM-dd")}
                      に公開
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-between gap-4 xl:flex-row-reverse">
              <TableOfContents body={blog.body} />
              <div className="blog-content max-w-4xl p-8 shadow-xl">
                {parsed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
