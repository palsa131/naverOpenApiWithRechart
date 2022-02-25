import { Action } from './types';

export const setSearchFormData = (data: any): Action => {
  return {
    type: 'SET_SEARCH_DATA',
    payload: data,
  };
};
