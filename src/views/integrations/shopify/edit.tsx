import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Shopify } from "./index";
import Form from "./_form";
import { GET_SHOPIFY, SHOPIFY_EDIT, SHOPIFY_DESTROY } from "./queries";

interface ShopifyRequest {
  shopify: Shopify;
}

export default function Edit() {
  const { id } = useParams();
  const { data, loading, error } = useQuery<ShopifyRequest>(GET_SHOPIFY, {
    variables: { id },
  });
  console.log(data);
  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <Form
          data={data.shopify}
          heading='Edit Store'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          redirect='/resources/shopify'
          mutation={SHOPIFY_EDIT}
          destroy={SHOPIFY_DESTROY}
        />
      )}
    </React.Fragment>
  );
}
