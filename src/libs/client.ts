export async function microcmsFetch<T>(
  fetcher: (options: {
    limit: number;
    headers: Record<string, string>;
    next: { revalidate: number };
  }) => Promise<T>,
  limit: number
): Promise<T> {
  return fetcher({
    limit,
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
    },
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  });
}
