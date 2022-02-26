import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setSearchFormData } from '../../redux/searchFormData';
import { TimeUnit } from '../../redux/searchFormData/types';
import { Moment } from 'moment';
import { stringToMoment } from './utils';

const useSearchFormData = () => {
  const dispatch = useDispatch();
  const searchFormData = useSelector((store: RootState) => store.searchFormData);

  const handleFormData = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value.length < 1) return;
    dispatch(setSearchFormData({ [name]: value }));
  }, []);

  const handleOptionChange = useCallback((value: TimeUnit | string, option: any) => {
    let data = '';
    !option.length ? (data = option.listname) : (data = option[0].listname);
    dispatch(setSearchFormData({ [data]: value }));
  }, []);

  const handleAgesChange = useCallback((value: string) => {
    dispatch(setSearchFormData({ ages: value }));
  }, []);

  const handleStartDateChange = useCallback((value: Moment | null) => {
    const valueToString = value?.format('YYYY-MM-DD');
    dispatch(setSearchFormData({ startDate: valueToString }));
  }, []);

  const disabledDate = useCallback(
    (current: Moment) => {
      return current && current < stringToMoment(searchFormData.startDate);
    },
    [searchFormData.startDate],
  );
  return [
    searchFormData,
    handleFormData,
    handleOptionChange,
    handleStartDateChange,
    disabledDate,
    handleAgesChange,
  ] as const;
};
export default useSearchFormData;
