import moment from 'moment';

export const diffInMonths = (date1, date2) => {
  const moment1 = moment(date1);
  const moment2 = moment(date2);
  
  return moment1.diff(moment2, 'months');
}