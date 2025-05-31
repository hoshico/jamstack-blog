"use client";

import { renderToc } from "@/src/libs/render-toc";

export default function TableOfContents({ body }: any) {
  const toc = renderToc(body);

  return (
    <div className="top-10 mt-2 h-[fit-content] w-full rounded-xl bg-gray-100 px-2 py-10 md:block xl:sticky xl:w-[250px] xl:bg-white xl:shadow-xl">
      <p className="mb-5 px-2 font-bold">目次</p>
      <ul className="list-disc px-6">
        {toc.map((data) => (
          <li
            className="mb-2 list-none font-bold opacity-70 hover:opacity-100"
            key={data.id}
          >
            <a href={`#${data.id}`}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
