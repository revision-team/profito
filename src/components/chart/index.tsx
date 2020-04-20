import React from "react";
import { Chart, Dataset, Card } from "react-rainbow-components";
import styled from "styled-components";

const ChartHeading = styled.div`
  padding-left: 7px;
  padding-right: 7px;

  @media (max-width: 991px) {
    flex-direction: column;
    :nth-child(1) {
      text-align: center;
    }
  }
`;

const Title = styled.h2`
  font-size: 26px;
`;

const styles = {
  container: { width: "100%" },
  chart: {
    height: "300px",
  },
};

interface InteractiveChartProps {
  labels: string[];
  datasets: {
    title: string;
    values: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

const InteractiveChart = (props: InteractiveChartProps) => (
  <Card
    className='react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small'
    style={styles.container}
  >
    <ChartHeading className='rainbow-align-content_space-between rainbow-flex rainbow-m-bottom_large'>
      <div className='rainbow-m-bottom_medium'>
        <Title>Performance</Title>
      </div>
    </ChartHeading>

    <Chart
      labels={props.labels}
      type={"line"}
      style={styles.chart}
      maintainAspectRatio={false}
    >
      {props.datasets.map((d, k) => (
        <Dataset
          key={k}
          title={d.title}
          values={d.values}
          backgroundColor={d.backgroundColor}
          borderColor={d.borderColor}
        />
      ))}
    </Chart>
  </Card>
);

export default InteractiveChart;
