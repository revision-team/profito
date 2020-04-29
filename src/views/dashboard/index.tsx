import React, { useContext, useState, useEffect } from "react";
import DateRange from "components/dateRange";
import PageHeader from "components/PageHeader";
import Tile from "components/Tile";
import { ShoppingCartIcon } from "components/icons";
import InteractiveChart from "components/chart";

import { Container, Section } from "components/custom";
import { Store } from "store";
import { useQuery, gql } from "@apollo/client";
import _ from "lodash";
import { Button } from "react-rainbow-components";
import Loading from "components/loading";
import { DateRange as DateRangeType } from "store/types";

const GET_PAYMENTS = gql`
  {
    payments {
      amount
      currency
      date
      date_end
      concluded
      frequency
    }
  }
`;

interface Payment {
  amount: number;
  currency: string;
  date: string;
  date_end: string;
  concluded: boolean;
  frequency: string;
}

interface PaymentQuery {
  payments: Payment[];
}

const fakeData = {
  successfulyOrders: {
    labels: ["January", "February", "March", "April", "May"],
    value: [23, 45, 123, 56, 100],
  },
};

function inRange(p: Payment, range: DateRangeType) {
  const date = Date.parse(p.date);
  const date_form = Date.parse(range.startDate.toDateString());
  const date_to = Date.parse(range.endDate.toDateString());

  return date >= date_form && date <= date_to;
}

export default function Dashboard() {
  const {
    state: { selectedRange: range },
  } = useContext(Store);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  const { data, loading, refetch } = useQuery<PaymentQuery>(GET_PAYMENTS);

  useEffect(() => {
    if (data) {
      setPayments(data.payments.filter((p) => inRange(p, range)));
    }
  }, [data, range]);

  useEffect(() => {
    let outcome = _.sum(payments.map((p) => p.amount));
    setOutcome(outcome);
  }, [payments]);

  // const chartData = () => {
  //   const labels;
  //   return {
  //     labels,
  //     values,
  //   };
  // };

  if (loading) return <Loading />;

  return (
    <Container>
      <PageHeader
        title={`Dashboard`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      />

      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <DateRange />
        <Button onClick={() => refetch()}>Refresh</Button>
      </Section>
      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <Tile title='Income' label={income} icon={<ShoppingCartIcon />} />
        <Tile title='Outcome' label={outcome} icon={<ShoppingCartIcon />} />
        <Tile
          title='Revenue'
          label={income - outcome}
          icon={<ShoppingCartIcon />}
        />
      </Section>
      <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
        <InteractiveChart
          labels={fakeData.successfulyOrders.labels}
          datasets={[
            {
              title: "income",
              backgroundColor: "#5DD18D",
              borderColor: "#34B271",
              values: fakeData.successfulyOrders.value,
            },
            {
              title: "outcome",
              backgroundColor: "#F7076A",
              borderColor: "#F7076A",
              values: _.reverse(fakeData.successfulyOrders.value),
            },
            {
              title: "revenue",
              backgroundColor: "#6860DB",
              borderColor: "#6860DB",
              values: fakeData.successfulyOrders.value,
            },
          ]}
        />
      </Section>
    </Container>
  );
}
