import { memo } from "react";
import { Col, Row, Statistic as AntStatistic } from "antd";
import type { StatisticProps } from "antd";
import CountUp from "react-countup";

const UsersSta = () => {
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp end={value as number} separator="," />
  );
  return (
    <Row gutter={16}>
      <Col span={12}>
        <AntStatistic title="Active Users" value={12} formatter={formatter} />
      </Col>
      <Col span={12}>
        <AntStatistic
          title="Account Balance USD"
          value={1012}
          precision={2}
          formatter={formatter}
        />
      </Col>
    </Row>
  );
};

export default memo(UsersSta);
