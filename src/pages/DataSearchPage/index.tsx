import { Wrapper } from './styles';
import { DataSearchForm } from '../../components/';
import { useCallback } from 'react';
import getTrendApi from '../../utils/apis/naverTrendSearch';
import { SearchFormDataType } from '../../redux/searchFormData/types';

const DataSearchPage = () => {
  const handleOnFinish = useCallback(async (searchFormData: SearchFormDataType) => {
    const { data } = await getTrendApi(searchFormData);
    console.log(data);
  }, []);
  return (
    <Wrapper>
      <DataSearchForm handleOnFinish={handleOnFinish} />
    </Wrapper>
  );
};
export default DataSearchPage;
