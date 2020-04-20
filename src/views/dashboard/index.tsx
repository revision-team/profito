import React from "react";
import DateRange from "components/dateRange";
import PageHeader from "components/PageHeader";
import styled from "styled-components";
import Tile from "components/Tile";
import { ShoppingCartIcon } from "components/icons";
// import { Card as DefaultCard } from "react-rainbow-components";
import InteractiveChart from "components/chart";
const Container = styled.div`
  padding: 16px 40px 24px 40px;
  @media (max-width: 800px) {
    padding: 16px 16px 24px 16px;
  }
`;

const Section = styled.section`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

// const Card = styled(DefaultCard)`
//   width: 100%;
//   flex-wrap: wrap;
// `;

// const CardHead = styled.h1`
//   font-size: 28px;
//   line-height: 1.07;
//   letter-spacing: 1.8px;
// `;

// const CardTitle = styled.p`
//   letter-spacing: 0.2px;
//   text-transform: uppercase;
// `;

const fakeData = {
  successfulyOrders: {
    labels: ["January", "February", "March", "April", "May"],
    value: [23, 45, 123, 56, 100],
  },
};

export default function Dashboard() {
  return (
    <Container>
      <PageHeader
        title='Dashboard'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      />
      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <DateRange />
      </Section>
      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <Tile title='Income' label='123' icon={<ShoppingCartIcon />} />
        <Tile title='Outcome' label='123' icon={<ShoppingCartIcon />} />
        <Tile title='Revenue' label='123' icon={<ShoppingCartIcon />} />
      </Section>
      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <InteractiveChart
          labels={fakeData.successfulyOrders.labels}
          datasets={[
            {
              title: "values",
              backgroundColor: "red",
              borderColor: "blue",
              values: fakeData.successfulyOrders.value,
            },
          ]}
        />
      </Section>
    </Container>
  );
}
