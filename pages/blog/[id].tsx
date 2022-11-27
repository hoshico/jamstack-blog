/* eslint-disable tailwindcss/no-custom-classname */
import { GetStaticPaths, GetStaticProps } from 'next';
import Moment from 'react-moment';
import { client } from '../../libs/client';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import { renderToc } from '../../libs/render-toc';
import TableOfContents from '../../components/TableOfContents';
import type { Blog } from '../../components/types/Blog';
import { Params } from 'next/dist/server/router';
import { ReactNode } from 'react';

type BlogProps = {
  blog: Blog;
  highlightedBody?: string;
};
export default function Blog({ blog, highlightedBody }: BlogProps) {
  const toc = renderToc(blog.body);
  return (
    <div data-theme="winter">
      <div className="m-auto w-full bg-gradient-to-b from-primary-content via-info to-neutral-content dark:from-base-content dark:to-base-content">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="md:max-w-7xl mx-auto dark:text-base-100">
              <div className="px-8 text-md md:text-4xl font-extrabold tracking-wider dark:">
                {blog.title}
              </div>
              <div className="flex m-auto mt-5 px-8 md:px-0 md:w-28">
                <Moment className="text-xs text-gray-500 dark:text-base-100" format="YYYY.MM.DD">
                  {blog.publishedAt}
                </Moment>
                <p className="text-xs text-gray-500 dark:text-base-100">に公開</p>
              </div>
            </div>
            {/*メインコンテンツ*/}
            <div className="flex justify-between  md:px-10 mx-auto mt-4 md:mt-12 max-w-7xl">
              {/*本文*/}
              <div className="px-8 py-4 md:p-10 w-full md:rounded-xl shadow md:w-[calc(100%_-_288px)] bg-base-100">
                <div
                  className="main-text"
                  dangerouslySetInnerHTML={{
                    __html: highlightedBody || '',
                  }}></div>
              </div>
              {/*サイド*/}
              <TableOfContents toc={toc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};
