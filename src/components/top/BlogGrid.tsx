import ArticleCard from "../ArticleCard";
import type { Blog } from "@/libs/api/generated";

type BlogGridProps = {
  blogs: Blog[];
  generatedAt: string;
};

export default function BlogGrid({ blogs, generatedAt }: BlogGridProps) {
  return (
    <>
      <p>検証用: 🕰️{generatedAt}</p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {blogs?.length ? (
          blogs.map((blog) => (
            <li key={blog.id}>
              <ArticleCard blog={blog} />
            </li>
          ))
        ) : (
          <p className="m-auto text-center text-xl font-bold">
            まだ投稿はありません
          </p>
        )}
      </ul>
    </>
  );
}
