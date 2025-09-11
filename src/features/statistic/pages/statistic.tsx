import { memo } from "react";
import InnerBack from "../../../shared/components/ui/innerBack/innerBack";
import type { StatisticProps } from "antd";
import { Col, Row, Statistic as AntStatistic } from "antd";
import CountUp from "react-countup";

const Statistic = () => {
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp end={value as number} separator="," />
  );
  return (
    <>
      <title>Dashboard | Statistic</title>
      <InnerBack>
        <Row gutter={16}>
          <Col span={12}>
            <AntStatistic
              title="Active Users"
              value={1000000}
              formatter={formatter}
            />
          </Col>
          <Col span={12}>
            <AntStatistic
              title="Account Balance USD"
              value={1000000}
              precision={2}
              formatter={formatter}
            />
          </Col>
        </Row>
      </InnerBack>
    </>
  );
};

export default memo(Statistic);
