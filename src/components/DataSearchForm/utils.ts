import moment from 'moment';

export const stringToMoment = (date: string) => moment(date).endOf('day');
