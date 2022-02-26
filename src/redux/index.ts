import { combineReducers, createStore } from 'redux';
import { searchFormData } from './searchFormData';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ searchFormData });

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
