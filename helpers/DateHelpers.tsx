import moment, { Moment } from 'moment';

const formatDate = (date: Date | Moment): string => {
  const dateF = moment(date).format('YYYY/MM/DD');
  return dateF;
};

const addDate = (date: Date, days: number): Moment =>
  moment(date).add(days, 'days');

export { formatDate, addDate };
