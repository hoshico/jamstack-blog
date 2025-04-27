import { Blog } from "@/src/libs/api/generated";
import BlogCard from "./BlogCard";
import { Card } from "../ui/card";
import ArticleCard from "../ArticleCard";

type BlogGridProps = {
  blogs: Blog[];
};

export default function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {blogs?.length ? (
        blogs.map((blog) => (
          <li key={blog.id}>
            <ArticleCard blog={blog} />
            {/* <BlogCard blog={blog} /> */}
          </li>
        ))
      ) : (
        <p className="m-auto text-center text-xl font-bold">
          まだ投稿はありません
        </p>
      )}
    </ul>
  );
}
