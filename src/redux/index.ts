import { combineReducers, createStore } from 'redux';
import { searchFormData } from './searchFormData';

const rootReducer = combineReducers({ searchFormData });

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
