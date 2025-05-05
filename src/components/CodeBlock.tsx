"use client";

import { BundledLanguage, codeToHtml } from "shiki";

interface Props {
  children: string;
  lang?: BundledLanguage;
}

export default async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang || "tsx",
    theme: "github-dark",
  });

  return (
    <div className="not-prose" dangerouslySetInnerHTML={{ __html: out }}></div>
  );
}
