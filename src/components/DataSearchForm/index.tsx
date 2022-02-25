import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import { Moment } from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setSearchFormData } from '../../redux/searchFormData';
import { INPUT_FORM_DATA, WARN_MESSAGE } from './constants';
import { TimeUnit } from './types';
import { stringToMoment } from './utils';

const { Option } = Select;

const DataSearchForm = () => {
  const [endDateDisabled, setEndDateDisabled] = useState(true);
  const dispatch = useDispatch();
  const searchFormData = useSelector((store: RootState) => store.searchFormData);

  const handleFormData = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value.length < 1) return;
    dispatch(setSearchFormData({ [name]: value }));
  }, []);

  const handleOptionChange = useCallback((value: TimeUnit, option: any) => {
    let data = '';
    !option.length ? (data = option.listname) : (data = option[0].listname);
    dispatch(setSearchFormData({ [data]: value }));
  }, []);

  const handleCategoryChange = useCallback((value: valueType) => {
    dispatch(setSearchFormData({ category: value.toString() }));
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

  useEffect(() => {
    searchFormData.startDate ? setEndDateDisabled(false) : setEndDateDisabled(true);
  }, [searchFormData.startDate]);

  useEffect(() => {
    console.log(searchFormData);
  }, [searchFormData]);

  const onFinish = () => {
    console.log(searchFormData);
  };

  return (
    <Form name="searchForm" layout="inline" onFinish={onFinish}>
      <Input.Group>
        <Row>
          <Form.Item
            label={INPUT_FORM_DATA.startDate.label}
            name={INPUT_FORM_DATA.startDate.name}
            rules={[{ required: true, message: WARN_MESSAGE.startDate }]}
          >
            <DatePicker
              value={stringToMoment(searchFormData.startDate)}
              name={INPUT_FORM_DATA.startDate.name}
              placeholder={INPUT_FORM_DATA.startDate.name}
              onChange={handleStartDateChange}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.endDate.label}
            name={INPUT_FORM_DATA.endDate.name}
            rules={[{ required: true, message: WARN_MESSAGE.endDate }]}
          >
            <DatePicker
              value={stringToMoment(searchFormData.endDate)}
              disabled={endDateDisabled}
              disabledDate={disabledDate}
              name={INPUT_FORM_DATA.endDate.name}
              placeholder={INPUT_FORM_DATA.endDate.name}
              onBlur={handleFormData}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.category.label}
            name={INPUT_FORM_DATA.category.name}
            rules={[{ required: true, message: WARN_MESSAGE.category }]}
          >
            <InputNumber
              type="number"
              controls={false}
              placeholder={INPUT_FORM_DATA.category.name}
              name={INPUT_FORM_DATA.category.name}
              value={searchFormData.category}
              onChange={handleCategoryChange}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.keyword.label}
            name={INPUT_FORM_DATA.keyword.name}
            rules={[{ required: true, message: WARN_MESSAGE.keyword }]}
          >
            <Input
              placeholder={INPUT_FORM_DATA.keyword.name}
              value={searchFormData.keyword}
              onBlur={handleFormData}
            />
          </Form.Item>
        </Row>
        <br />
        <Row justify="center">
          <Col span={3}>
            <Form.Item
              name={INPUT_FORM_DATA.timeUnit.name}
              rules={[{ required: true, message: WARN_MESSAGE.timeUnit }]}
            >
              <Select placeholder="timeUnit" onChange={handleOptionChange}>
                {Object.entries(INPUT_FORM_DATA.timeUnit.options).map((item) => (
                  <Option listname={INPUT_FORM_DATA.timeUnit.name} key={item[0]} value={item[0]}>
                    {item[1]}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Select
              style={{ minWidth: '100px' }}
              mode="multiple"
              placeholder="age"
              onChange={handleOptionChange}
            >
              {Object.entries(INPUT_FORM_DATA.ages.options).map((item) => (
                <Option listname={INPUT_FORM_DATA.ages.name} key={item[0]} value={item[0]}>
                  {item[1]}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={3}>
            <Select placeholder="gender" onChange={handleOptionChange}>
              {Object.entries(INPUT_FORM_DATA.gender.options).map((item) => (
                <Option listname={INPUT_FORM_DATA.gender.name} key={item[0]} value={item[0]}>
                  {item[1]}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={3}>
            <Select placeholder="device" onChange={handleOptionChange}>
              {Object.entries(INPUT_FORM_DATA.device.options).map((item) => (
                <Option listname={INPUT_FORM_DATA.device.name} key={item[0]} value={item[0]}>
                  {item[1]}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={3}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                조회
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Input.Group>
    </Form>
  );
};
export default DataSearchForm;
