import { valueType } from 'antd/lib/statistic/utils';
import { INPUT_FORM_DATA } from './constants';
export type SearchFormData = {
  startDate: string | undefined;
  endDate: string;
  category: valueType | undefined;
  keyword: string;
  timeUnit: TimeUnit;
  age?: Ages[];
  gender?: Gender;
  device?: Device;
};

export type TimeUnit = keyof typeof INPUT_FORM_DATA.timeUnit.options;
export type Ages = keyof typeof INPUT_FORM_DATA.ages.options;
export type Gender = keyof typeof INPUT_FORM_DATA.gender.options;
export type Device = keyof typeof INPUT_FORM_DATA.device.options;
