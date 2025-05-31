import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  maxPageValue: number;
  currentPageValue: number;
};

export const Pagination = (props: Props) => {
  const router = useRouter();
  const { maxPageValue, currentPageValue } = props;

  const maxPageNumber = Number(maxPageValue);
  const currentPageNumber = Number(currentPageValue);

  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  const movePreviousPage = () => {
    router.push(`/blog/pages/${prevPage}`);
  };

  const moveNextPage = () => {
    router.push(`/blog/pages/${nextPage}`);
  };

  return (
    <div className="mx-auto w-5/12">
      <div className="btn-group grid grid-cols-2">
        <button
          className="btn btn-outline"
          disabled={currentPageNumber === 1}
          onClick={movePreviousPage}
        >
          <a>Previous</a>
        </button>
        <button
          className="btn btn-outline"
          disabled={currentPageNumber === maxPageNumber}
          onClick={moveNextPage}
        >
          <a>Next</a>
        </button>
      </div>
    </div>
  );
};
