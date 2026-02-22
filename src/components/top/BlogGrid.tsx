import Link from "next/link";

import FormatDate from "../FormatDate";
import type { Blog } from "@/src/libs/api/generated";

type BlogGridProps = {
  blogs: Blog[];
};

const createExcerpt = (body?: string, limit = 120) => {
  if (!body) {
    return "記事本文の準備中です。";
  }

  const plainText = body
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!plainText) {
    return "記事本文の準備中です。";
  }

  return plainText.length > limit
    ? `${plainText.slice(0, limit)}...`
    : plainText;
};

export default function BlogGrid({ blogs }: BlogGridProps) {
  console.log("🔥", blogs);
  if (!blogs?.length) {
    return (
      <p className="rounded-[28px] border border-dashed border-gray-300 bg-white/60 py-16 text-center text-lg font-semibold text-gray-500">
        まだ投稿はありません
      </p>
    );
  }

  return (
    <section className="space-y-6">
      {blogs.map((blog) => {
        if (!blog.id || !blog.title) {
          return null;
        }

        const excerpt = createExcerpt(blog.body ?? undefined);

        return (
          <article
            key={blog.id}
            className="group rounded-[28px] border border-gray-100 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-gray-300 sm:p-8"
          >
            <Link
              href={`/blog/${blog.id}`}
              className="block space-y-4 outline-none focus-visible:outline-none"
            >
              {blog.publishedAt && (
                <FormatDate
                  dateString={blog.publishedAt}
                  displayFormat="yyyy.MM.dd"
                  className="text-xs tracking-[0.35em] text-gray-400"
                />
              )}
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 transition group-hover:text-gray-950 sm:text-[2rem]">
                {blog.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
                {excerpt}
              </p>
            </Link>
            {blog.category && blog.category.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {blog.category.map((category, index) => (
                  <span
                    key={category?.id ?? `${blog.id}-${category?.name ?? index}`}
                    className="rounded-full border border-gray-200 bg-white px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-gray-500"
                  >
                    {category?.name ?? "CATEGORY"}
                  </span>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
