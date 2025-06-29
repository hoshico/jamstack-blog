import BlogGrid from "../components/top/BlogGrid";
import { getBlogList } from "../libs/getBlogList";

export default async function HomePage() {
  const blogs = await getBlogList();

  return (
    <div className="min-h-screen py-6 sm:px-10">
      <BlogGrid blogs={blogs || []} />
    </div>
  );
}
