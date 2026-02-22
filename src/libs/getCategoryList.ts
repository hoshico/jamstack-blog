import { getCategories } from "./api/generated";
import { API_KEY } from "./config";

export const getCategoryList = async () => {
  const categories = await getCategories({
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
  });
  return categories.data;
};
