import Link from "next/link";
import { getCategoryList } from "../../libs/getCategoryList";
type HeroSectionProps = {
  activeCategoryId?: string;
  showClearFilter?: boolean;
};

export default async function HeroSection({
  activeCategoryId,
  showClearFilter,
}: HeroSectionProps = {}) {
  const categories = await getCategoryList();

  return (
    <section className="bg-white/80 px-6 py-8 sm:px-10 sm:py-12">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-gray-400">
          ようこそ
        </p>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
          Hoshico Notes
        </h1>
        <p className="text-lg leading-8 text-gray-500 sm:text-xl">
          日々の開発で学んだことや技術的な備忘録を綴っています。
        </p>
      </div>

      {/* TODO: 検索欄実装     */}
      {/* <div className="mt-8 space-y-3">
        <label className="flex items-center gap-3 rounded-[999px] border border-transparent bg-gray-100/90 px-5 py-4 text-gray-500 shadow-inner ring-1 ring-gray-200">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="記事を検索..."
            disabled
            aria-disabled="true"
            className="flex-1 border-0 bg-transparent text-base font-medium text-gray-600 placeholder:text-gray-400 focus:outline-none"
          />
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            mock
          </span>
        </label>
        <p className="text-xs text-gray-400">※ 検索機能はモックです</p>
      </div> */}

      {/* TODO: カテゴリーページへのリンク実装(idでなくcategoryのnameでリンクする) */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {categories.contents?.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide shadow-sm transition ${
                isActive
                  ? "border-black bg-black text-white ring-2 ring-black/70"
                  : "border-gray-200 bg-white/90 text-gray-600 hover:border-gray-300 hover:text-gray-800"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
        {showClearFilter && (
          <Link
            href="/"
            className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 transition hover:text-blue-500"
          >
            クリア
          </Link>
        )}
      </div>
    </section>
  );
}
