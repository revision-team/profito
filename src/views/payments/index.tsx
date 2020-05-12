import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PAYMENTS } from "./queries";
import Loading from "components/loading";

export interface Payment {
  amount: number;
  currency: string;
  date: string;
  date_end: string;
  concluded: boolean;
  frequency: string;
  description: string;
  employee: string;
  id: string;
}

export interface PaymentsRequest {
  payments: Payment[];
}

export default function Payments() {
  const { data, loading, error } = useQuery<PaymentsRequest>(GET_PAYMENTS);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && <></>}
    </React.Fragment>
  );
}
