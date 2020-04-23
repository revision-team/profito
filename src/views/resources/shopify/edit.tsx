import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Shopify } from "./index";
import Form from "./_form";

export default function Edit() {
  const { key } = useParams();
  const { data, loading, error } = useQuery<Shopify>(
    gql`
      query Shopify($key: String) {
        shopify(key: $key) {
          key
          username
          password
          store
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
          heading='Edit Store'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      )}
    </React.Fragment>
  );
}
