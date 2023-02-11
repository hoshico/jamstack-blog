export type Category = {
  createdAt: string;
  id: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  name: categoryName;
  publishedAt: string;
  revisedAt: string;
  updatedAt?: string;
};

export type categoryName = 'JavaScript' | 'TypeScript' | 'Next.js' | 'React';
