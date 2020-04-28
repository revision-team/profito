import React, { useContext } from "react";
import DateRange from "components/dateRange";
import PageHeader from "components/PageHeader";
import Tile from "components/Tile";
import { ShoppingCartIcon } from "components/icons";
import InteractiveChart from "components/chart";

import { Container, Section } from "components/custom";
import { Store } from "store";
import { SetNotification } from "store/actions";

const fakeData = {
  successfulyOrders: {
    labels: ["January", "February", "March", "April", "May"],
    value: [23, 45, 123, 56, 100],
  },
};

export default function Dashboard() {
  const { state, dispatch } = useContext(Store);
  const { theme } = state;
  return (
    <Container>
      <PageHeader
        title={`Dashboard theme ${theme}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      />
      <button
        onClick={() => {
          dispatch(SetNotification("This is a notification"));
          console.log("submited notification");
        }}
      >
        Default notification
      </button>
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
