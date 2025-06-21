// import { getBlogById } from "@/libs/api/generated";
import { getBlogById } from "@/libs/api/generated";
import BlogContent from "@/src/components/BlogContent";
import { API_KEY } from "@/src/libs/config";

export const revalidate = 3600;

// 動的ルートの生成（ISRのため）
export async function generateStaticParams() {
  // ブログ一覧を取得してslugのリストを生成
  const response = await fetch(
    "https://2525hoshi.microcms.io/api/v1/blog?limit=100",
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return (
    data.contents?.map((blog: { id: string }) => ({
      slug: blog.id,
    })) || []
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getBlogById(slug, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    next: {
      revalidate: false,
    },
  });

  // Next.jsのfetchを直接使用
  // const response = await fetch(
  //   `https://2525hoshi.microcms.io/api/v1/blog/${slug}`,
  //   {
  //     headers: {
  //       "X-MICROCMS-API-KEY": API_KEY,
  //     },
  //     next: {
  //       revalidate: 3600,
  //     },
  //   }
  // );

  // if (!response.ok) {
  //   return <div>Blog not found</div>;
  // }
  // const blog = await response.json();
  if (response.status !== 200) {
    return <div>Blog not found</div>;
  }

  const blog = response.data;

  // NOTE:検証用
  const generatedAt = new Date().toISOString();

  return <BlogContent blog={blog} generatedAt={generatedAt} />;
}
