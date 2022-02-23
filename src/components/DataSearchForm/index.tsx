import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import moment, { Moment } from 'moment';
import React, { useCallback, useState } from 'react';
import { INPUT_FORM_DATA } from './constants';
import { SearchFormData, TimeUnit } from './types';

const { Option } = Select;

const DataSearchForm = () => {
  const [formData, setFormData] = useState<SearchFormData>({
    startDate: '',
    endDate: '',
    category: '',
    keyword: '',
    timeUnit: 'month',
  });

  const handleFormData = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value.length < 1) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleOptionChange = useCallback((value: TimeUnit, option: any) => {
    let data = '';
    !option.length ? (data = option.listname) : (data = option[0].listname);
    setFormData((prev) => ({ ...prev, [data]: value }));
  }, []);

  const handleCategoryChange = useCallback((value: valueType) => {
    setFormData((prev) => ({ ...prev, category: value }));
  }, []);

  const warnMessage = useCallback((name: string) => {
    return `please input ${name}`;
  }, []);

  const disabledDate = useCallback((current: Moment) => {
    return current && current < moment(formData.startDate).endOf('day');
  }, []);

  const onFinish = () => {
    console.log(formData);
  };

  return (
    <Form name="searchForm" layout="inline" onFinish={onFinish}>
      <Input.Group>
        <Row>
          <Form.Item
            label={INPUT_FORM_DATA.startDate.label}
            name={INPUT_FORM_DATA.startDate.name}
            rules={[{ required: true, message: warnMessage(INPUT_FORM_DATA.startDate.name) }]}
          >
            <DatePicker
              name={INPUT_FORM_DATA.startDate.name}
              placeholder={INPUT_FORM_DATA.startDate.name}
              onBlur={handleFormData}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.endDate.label}
            name={INPUT_FORM_DATA.endDate.name}
            rules={[{ required: true, message: warnMessage(INPUT_FORM_DATA.endDate.name) }]}
          >
            <DatePicker
              disabledDate={disabledDate}
              name={INPUT_FORM_DATA.endDate.name}
              placeholder={INPUT_FORM_DATA.endDate.name}
              onBlur={handleFormData}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.category.label}
            name={INPUT_FORM_DATA.category.name}
            rules={[{ required: true, message: warnMessage(INPUT_FORM_DATA.category.name) }]}
          >
            <InputNumber
              type={'number'}
              controls={false}
              placeholder={INPUT_FORM_DATA.category.name}
              name={INPUT_FORM_DATA.category.name}
              value={formData.category}
              onChange={handleCategoryChange}
            />
          </Form.Item>
          <Form.Item
            label={INPUT_FORM_DATA.keyword.label}
            name={INPUT_FORM_DATA.keyword.name}
            rules={[{ required: true, message: warnMessage(INPUT_FORM_DATA.keyword.name) }]}
          >
            <Input placeholder={INPUT_FORM_DATA.keyword.name} onBlur={handleFormData} />
          </Form.Item>
        </Row>
        <br />
        <Row justify="center">
          <Col span={3}>
            <Form.Item
              name={INPUT_FORM_DATA.timeUnit.name}
              rules={[{ required: true, message: warnMessage(INPUT_FORM_DATA.timeUnit.name) }]}
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
