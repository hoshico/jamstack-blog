import Link from 'next/link';

type Props = {
  maxPageValue: number;
  currentPageValue: number;
};

export const Pagination = (props: Props) => {
  const { maxPageValue, currentPageValue } = props;

  const maxPageNumber = Number(maxPageValue);
  const currentPageNumber = Number(currentPageValue);

  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className="flex px-3 py-12">
      {currentPageNumber !== 1 && (
        <div>
          <Link href={`/blog/pages/${prevPage}`}>
            <a>Previous</a>
          </Link>
        </div>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/blog/pages/${nextPage}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
  );
};
