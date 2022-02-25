import { Action, SearchFormDataType } from './types';

const initialState: SearchFormDataType = {
  startDate: '',
  endDate: '',
  category: '',
  keyword: '',
};

export const searchFormData = (state: SearchFormDataType = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA': {
      const [key, value] = Object.entries(action.payload)[0];
      return { ...state, [key]: value };
    }
    default:
      return state;
  }
};
