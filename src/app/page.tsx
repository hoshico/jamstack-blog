import CategoryTable from "../components/category";
import BlogCard from "../components/top/BlogCard";
import { getBlogs } from "../libs/api/generated";

export default async function HomePage() {
  // TODO: ラップした関数を作成する
  const blogData = await getBlogs(
    { limit: 40 },
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
      },
    }
  );
  const blogs = blogData.data?.contents;

  if (!blogs) {
    return <div>データがありません</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary py-6 dark:from-base-content dark:to-base-content sm:px-10">
      <div className="mx-auto flex w-11/12 justify-between 2xl:w-8/12">
        {/*記事エリア*/}
        <div className="w-full rounded-xl bg-base-200 p-1 lg:w-[calc(100%_-_288px)]">
          <div className="m-4 md:m-10">
            <div className="py-1">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {!blogData.data?.contents?.length ? (
                  <p className="m-auto text-center text-xl font-bold">
                    まだ投稿はありません
                  </p>
                ) : (
                  blogs.map((blog) => (
                    <li key={blog.id}>
                      <BlogCard blog={blog} />
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          {/*<Pagination
              currentPageValue={1}
              maxPageValue={Math.ceil(totalCount / 6)}
            />*/}
        </div>
        {/*カテゴリー*/}
        {/* <CategoryTable
          blogs={blogs}
          category={category}
          setShowBlogs={setShowBlogs}
        /> */}
      </div>
    </div>
  );
}
