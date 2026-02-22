import BlogGrid from "../components/top/BlogGrid";
import HeroSection from "../components/top/HeroSection";
import { getBlogList } from "../libs/getBlogList";

export default async function HomePage() {
  const blogs = await getBlogList();

  return (
    <div className="space-y-10 pb-16 pt-8 sm:pt-10">
      <HeroSection />
      <BlogGrid blogs={blogs || []} />
    </div>
  );
}
