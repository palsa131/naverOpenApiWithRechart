import { INPUT_FORM_DATA } from './constants';

export type TimeUnit = keyof typeof INPUT_FORM_DATA.timeUnit.options;
export type Ages = keyof typeof INPUT_FORM_DATA.ages.options;
export type Gender = keyof typeof INPUT_FORM_DATA.gender.options;
export type Device = keyof typeof INPUT_FORM_DATA.device.options;
