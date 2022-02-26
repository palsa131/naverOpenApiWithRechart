import { AxiosInstance } from 'axios';

const interceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    config.headers = {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID as string,
      'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET as string,
      ...config.headers,
    };
    return config;
  });
};

export { interceptor };
