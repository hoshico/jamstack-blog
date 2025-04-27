import { Category } from "./Category";

export type Blog = {
  body: string;
  category: Array<Category>;
  createdAt: string;
  id: string;
  photo: {
    height: number;
    url: string;
    width: number;
  }
  publishedAt: string;
  title: string;
  updatedAt?: string;
  revisedAt?: string;
}