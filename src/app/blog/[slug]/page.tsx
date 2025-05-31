import { getBlogById } from "@/libs/api/generated";
import BlogContent from "@/src/components/BlogContent";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await getBlogById(slug, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
    },
    next: {
      revalidate: false,
    },
  });

  if (response.status !== 200) {
    return <div>Blog not found</div>;
  }

  const blog = response.data;

  return <BlogContent blog={blog} />;
}
