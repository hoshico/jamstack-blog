import { notFound } from "next/navigation";

import BlogGrid from "@/src/components/top/BlogGrid";
import HeroSection from "@/src/components/top/HeroSection";
import { getBlogListByCategory } from "@/src/libs/getBlogListByCategory";

type CategoryPageProps = {
  params: {
    "category-id"?: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = params["category-id"];

  if (!categoryId) {
    notFound();
  }

  const blogs = await getBlogListByCategory({ categoryId });

  return (
    <div className="space-y-10 pb-16 pt-8 sm:pt-10">
      <HeroSection activeCategoryId={categoryId} showClearFilter />
      <h3 className="animate-bounce text-2xl font-bold">#{categoryId} 👇</h3>
      <BlogGrid blogs={blogs || []} categoryId={categoryId} />
    </div>
  );
}
