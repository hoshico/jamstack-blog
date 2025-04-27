import BlogGrid from "../components/top/BlogGrid";
import { getBlogs } from "../libs/api/generated";

export default async function HomePage() {
  const blogData = await getBlogs(
    { limit: 40 },
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
      },
    }
  );
  const blogs = blogData.data?.contents;

  return (
    <div className="min-h-screen py-6 sm:px-10">
      <BlogGrid blogs={blogs || []} />
    </div>
  );
}
