import { useMemo } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { LINE_COLOR } from './constants';

const TrendDataChart = ({ data }: any) => {
  const normalizeData = useMemo(() => {
    if (!data) return;
    const initialData = data.results[0].data;
    const normalizeData: { [key: string]: any } = {};
    for (const item of initialData) {
      normalizeData[item.period] = {
        ...normalizeData[item.period],
        period: item.period,
        [item.group]: item.ratio,
      };
    }
    return Object.entries(normalizeData).map((v) => v[1]);
  }, [data]);

  const ages = useMemo(
    () => normalizeData && Object.keys(normalizeData[0]).filter((v) => v !== 'period'),
    [normalizeData],
  );

  return (
    <LineChart width={800} height={600} data={normalizeData && normalizeData}>
      <XAxis dataKey="period" />
      <YAxis />
      <Legend verticalAlign="top" height={36} />
      <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} />
      {ages?.map((v: string) => (
        <Line key={v} name={`${v}대`} type="monotone" dataKey={v} stroke={`${LINE_COLOR[v]}`} />
      ))}
    </LineChart>
  );
};
export default TrendDataChart;
