import { getBlogs } from "./api/generated";
import { API_KEY } from "./config";

type GetBlogListByCategoryArgs = {
  categoryId: string;
  limit?: number;
};

export const getBlogListByCategory = async ({
  categoryId,
  limit = 40,
}: GetBlogListByCategoryArgs) => {
  const filters = `category[contains]${categoryId}`;

  const blogData = await getBlogs(
    { limit, filters },
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    }
  );

  return blogData.data.contents;
};
