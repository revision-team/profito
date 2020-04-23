import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Payment } from "./index";
import Form from "./_form";

export default function Edit() {
  const { key } = useParams();
  const { data, loading, error } = useQuery<Payment>(
    gql`
      query Payment($key: String) {
        payment(key: $key) {
          key
          start
          concluded
          end
          amount
          currency
          frequency
          description
        }
      }
    `,
    { variables: { key } }
  );

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <Form
          data={data}
          heading='Edit Payment'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      )}
    </React.Fragment>
  );
}
