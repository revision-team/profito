import React from "react";
import { gql } from "@apollo/client";
import { Typography } from "@material-ui/core";

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

export default function Dashboard() {
  return (
    <React.Fragment>
      {[...new Array(100)].map((e) => (
        <Typography key={e}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          possimus odio quo quasi rerum expedita sed! Corrupti in magni earum
          pariatur esse delectus, cupiditate tenetur, maiores ad possimus, vitae
          quo?
        </Typography>
      ))}
    </React.Fragment>
  );
}
