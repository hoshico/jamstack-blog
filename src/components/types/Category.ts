export type Category = {
  createdAt: string;
  id: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt?: string;
};
