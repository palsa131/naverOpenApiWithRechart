import axios from 'axios';
import { interceptor } from './interceptor';

const createInstance = () => {
  const instance = axios.create();
  interceptor(instance);
  return instance;
};

export const instance = createInstance();
