import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Payment } from "./index";
import Form from "./_form";
import { GET_PAYMENT, PAYMENT_EDIT, PAYMENT_DESTROY } from "./queries";
import Loading from "components/loading";

export interface PaymentRequest {
  payment: Payment;
}

export default function Edit() {
  const { id } = useParams();
  const { data, loading, error } = useQuery<PaymentRequest>(GET_PAYMENT, {
    variables: { id },
  });

  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && (
        <Form
          data={data.payment}
          heading='Edit Payment'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          mutation={PAYMENT_EDIT}
          destroy={PAYMENT_DESTROY}
          redirect='/payments'
        />
      )}
    </React.Fragment>
  );
}
