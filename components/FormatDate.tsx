import { format } from 'date-fns';

type Props = {
  dateString: string;
};

const FormatDate = (props: Props) => {
  const { dateString } = props;
  return (
    <time className="text-xs">
      {format(new Date(dateString), 'yyyy-MM-dd')}
    </time>
  );
};

export default FormatDate;
