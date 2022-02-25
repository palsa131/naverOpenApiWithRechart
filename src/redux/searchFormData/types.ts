import { valueType } from 'antd/lib/statistic/utils';
import { INPUT_FORM_DATA } from '../../components/DataSearchForm/constants';

export interface SearchFormDataType {
  startDate: string;
  endDate: string;
  category: valueType | undefined;
  keyword: string;
  timeUnit?: TimeUnit;
  age?: Ages[];
  gender?: Gender;
  device?: Device;
}

export type ActionType = 'SET_SEARCH_DATA';
export type Action = { type: ActionType; payload: SearchFormDataType };
export type TimeUnit = keyof typeof INPUT_FORM_DATA.timeUnit.options;
export type Ages = keyof typeof INPUT_FORM_DATA.ages.options;
export type Gender = keyof typeof INPUT_FORM_DATA.gender.options;
export type Device = keyof typeof INPUT_FORM_DATA.device.options;
