import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

type Props = {
  dateString: string;
};

const FormatDate = (props: Props) => {
  const { dateString } = props;
  return (
    <time className="text-xs">
      {format(utcToZonedTime(new Date(dateString), 'Asia/Tokyo'), 'yyyy-MM-dd')}
    </time>
  );
};

export default FormatDate;
