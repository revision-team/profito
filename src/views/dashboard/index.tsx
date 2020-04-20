import React from "react";
import DateRange from "components/dateRange";
import PageHeader from "components/PageHeader";
import styled from "styled-components";

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
    </Container>
  );
}
