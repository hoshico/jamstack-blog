import { format } from 'date-fns';

type Props = {
  dateString: string;
};
const FormatDate = (props: Props) => {
  const { dateString } = props;
  console.log(format(new Date(dateString), 'yyyy-MM-dd'));
};

export default FormatDate;
