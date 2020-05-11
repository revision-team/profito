import React from "react";
import { gql } from "@apollo/client";

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
  return <div></div>;
}
