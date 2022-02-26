import { instance } from '../config/createInstance';

const getTrendApi = async (formData: any) => {
  return instance.post(`v1/datalab/shopping/category/keyword/age`, formData);
};

export default getTrendApi;
