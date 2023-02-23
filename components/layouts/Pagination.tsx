import Link from 'next';

type Props = {
  totalCount: number;
};

export const Pagination = (props: Props) => {
  const { totalCount } = props;
  const per_page = 6;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  return (
    <div className="btn-group">
      {range(1, Math.ceil(totalCount / per_page)).map((number, index) => (
        <button
          key={index}
          className="btn btn-xs"
        >
          {number}
        </button>
      ))}
    </div>
  );
};
