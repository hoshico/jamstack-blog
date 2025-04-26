import { renderToc } from '../../libs/render-toc';
import TableOfContents from '../top/TableOfContents';
import { Blog } from '../types/Blog';
import FormatDate from '../FormatDate';

type Props = {
  blog: Blog;
  highlightedBody?: string;
};

const BlogDetail = ({ blog, highlightedBody }: Props) => {
  const toc = renderToc(blog.body);
  return (
    <div data-theme="winter">
      <div className="m-auto w-full bg-linear-to-b from-primary-content via-info to-neutral-content dark:from-base-content dark:to-base-content">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="mx-auto dark:text-base-100 md:max-w-7xl">
              <div className="px-8 text-center font-extrabold tracking-wider md:text-4xl">
                {blog.title}
              </div>
              <div className="m-auto mt-5 px-8 md:w-28 md:px-0">
                <p className="text-center text-xs text-gray-500 dark:text-base-100">
                  <FormatDate dateString={blog.publishedAt} />
                  に公開
                </p>
              </div>
            </div>
            {/*メインコンテンツ*/}
            <div className="mx-auto mt-4  flex max-w-7xl justify-between md:mt-12 md:px-10">
              {/*本文*/}
              <div className="w-full bg-base-100 px-8 py-4 shadow-sm dark:bg-slate-800 dark:text-base-100 md:w-[calc(100%_-_288px)] md:rounded-xl md:p-10">
                <div
                  className="main-text "
                  dangerouslySetInnerHTML={{
                    __html: highlightedBody || '',
                  }}
                ></div>
              </div>
              {/*サイド*/}
              <TableOfContents toc={toc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
