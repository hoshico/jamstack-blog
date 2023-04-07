import { format } from 'date-fns';

const Date = ({ dataString }: { dataString: number }) => {
  console.log(format(dataString, 'yyyy-MM-dd'));
};

export default Date;
