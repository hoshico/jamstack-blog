import clsx from "clsx";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

type Props = {
  dateString: string;
  displayFormat?: string;
  className?: string;
};

const FormatDate = ({
  dateString,
  displayFormat = "yyyy-MM-dd",
  className,
}: Props) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  const zonedDate = utcToZonedTime(date, "Asia/Tokyo");

  return (
    <time dateTime={date.toISOString()} className={clsx("text-xs", className)}>
      {format(zonedDate, displayFormat)}
    </time>
  );
};

export default FormatDate;
