import { getBlogById } from "./api/generated";
import { API_KEY } from "./config";

export const getBlogDataById = async (id: string) => {
  const blogData = await getBlogById(id, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
  });
  return blogData.data;
};
