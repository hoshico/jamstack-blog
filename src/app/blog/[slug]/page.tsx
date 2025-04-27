import { getBlogById } from "@/libs/api/generated";
import parse, { Element } from "html-react-parser";
import { BundledLanguage, codeToHtml } from "shiki";
import "highlight.js/styles/hybrid.css";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const response = await getBlogById(slug, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
    },
  });

  if (response.status !== 200) {
    return <div>Blog not found</div>;
  }

  const blog = response.data;

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
                      {blog.publishedAt}
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

interface Props {
  children: string;
  lang?: BundledLanguage;
}

async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang || "tsx",
    theme: "github-dark",
  });

  return (
    <div className="not-prose" dangerouslySetInnerHTML={{ __html: out }}></div>
  );
}
