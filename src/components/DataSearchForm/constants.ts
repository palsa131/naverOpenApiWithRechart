export const INPUT_FORM_DATA = {
  startDate: {
    name: 'startDate',
    label: '시작일자',
  },
  endDate: {
    name: 'endDate',
    label: '종료일자',
  },
  category: {
    name: 'category',
    label: '카테고리',
  },
  keyword: {
    name: 'keyword',
    label: '키워드',
  },
  timeUnit: {
    name: 'timeUnit',
    label: '',
    options: {
      date: '일간',
      week: '주간',
      month: '월간',
    },
  },
  device: {
    name: 'device',
    label: '',
    options: { pc: 'PC', mo: '모바일' },
  },
  gender: {
    name: 'gender',
    label: '',
    options: { m: '남성', f: '여성' },
  },
  ages: {
    name: 'ages',
    label: '',
    options: {
      10: '10대',
      20: '20대',
      30: '30대',
      40: '40대',
      50: '50대',
      60: '60대 이상',
    },
  },
};
