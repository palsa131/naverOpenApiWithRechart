import { Wrapper } from './styles';
import { DataSearchForm, TrendDataChart } from '../../components/';
import { useCallback, useState } from 'react';
import getTrendApi from '../../utils/apis/naverTrendSearch';
import { SearchFormDataType } from '../../redux/searchFormData/types';

const DataSearchPage = () => {
  const [responseData, setResponseData] = useState();

  const handleOnFinish = useCallback(async (searchFormData: SearchFormDataType) => {
    const { data } = await getTrendApi(searchFormData);
    setResponseData(data);
  }, []);
  return (
    <Wrapper>
      <DataSearchForm handleOnFinish={handleOnFinish} />
      <TrendDataChart data={responseData}></TrendDataChart>
    </Wrapper>
  );
};
export default DataSearchPage;
