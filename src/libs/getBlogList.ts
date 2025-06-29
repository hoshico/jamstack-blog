import { getBlogs } from "./api/generated";
import { API_KEY } from "./config";

export const getBlogList = async () => {
  const blogData = await getBlogs(
    { limit: 40 },
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    }
  );

  return blogData.data.contents;
};
