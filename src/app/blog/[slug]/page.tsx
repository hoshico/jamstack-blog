import type { Blog } from "@/src/libs/api/generated";
import BlogContent from "@/src/components/BlogContent";
import { getBlogDataById } from "@/src/libs/getBlogDataById";
import { getBlogList } from "@/src/libs/getBlogList";

// 動的ルートの生成（ISRのため）
export async function generateStaticParams() {
  // ブログ一覧を取得してslugのリストを生成
  const data = await getBlogList();

  return (
    data?.map((blog: Blog) => ({
      slug: blog.id || "",
    })) || []
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogDataById(slug);

  return <BlogContent blog={blog} />;
}
