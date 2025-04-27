export type Profile = {
  createdAt: string;
  id: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  main: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt?: string;
};