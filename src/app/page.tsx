import BlogGrid from "../components/top/BlogGrid";
import HeroSection from "../components/top/HeroSection";
import PageTransition from "../components/PageTransition";
import { getBlogList } from "../libs/getBlogList";
import { ViewTransition } from "react";

export default async function HomePage() {
  const blogs = await getBlogList();

  return (
    <PageTransition>
      <div className="space-y-10 pb-16 pt-8 sm:pt-10">
        <HeroSection />
        <ViewTransition
          key="all"
          name="blog-list"
          share="auto"
          enter="auto"
          default="none"
        >
          <BlogGrid blogs={blogs || []} />
        </ViewTransition>
      </div>
    </PageTransition>
  );
}
