import moment from 'moment';

export const stringToMoment = (date: string) => moment(date).endOf('day');

export const warnMessageMaker = (name: string) => `please input ${name}`;
