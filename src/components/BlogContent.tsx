import parse, { Element } from "html-react-parser";
import CodeBlock from "./CodeBlock";
import { Blog } from "@/libs/api/generated";
import { format } from "date-fns";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  const parsed = parse(blog.body!, {
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
      <div className="m-auto w-full bg-linear-to-b from-primary-content via-info to-neutral-content dark:from-base-content dark:to-base-content">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="mx-auto dark:text-base-100 md:max-w-7xl">
              <div className="px-8 text-center font-extrabold tracking-wider md:text-4xl">
                {blog.title}
              </div>
              <div className="m-auto mt-5 px-8 md:w-28 md:px-0">
                <p className="text-center text-xs text-gray-500 dark:text-base-100">
                  {blog.publishedAt && (
                    <>
                      {format(new Date(blog.publishedAt), "yyyy-MM-dd")}
                      に公開
                    </>
                  )}
                </p>
              </div>
            </div>
            <div>{parsed}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
