import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../libs/client';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import type { Blog } from '../../components/types/Blog';
import { Params } from 'next/dist/server/router';
import BlogDetail from '../../components/blog';

type BlogProps = {
  blog: Blog;
  highlightedBody?: string;
};
export default function Blog({ blog, highlightedBody }: BlogProps) {
  return (
    <BlogDetail
      blog={blog}
      highlightedBody={highlightedBody}
    />
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: 'blog', queries: { limit: 30 } });
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
