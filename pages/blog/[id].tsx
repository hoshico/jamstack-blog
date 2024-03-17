import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { client } from '../../libs/client';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import type { Blog } from '../../components/types/Blog';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog', queries: { limit: 30 } });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params!.id as string;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  // TODO: データをテンプレートに受け渡す部分の処理
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
