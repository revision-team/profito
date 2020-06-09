import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Form from "./_form";
import { GET_SHOPIFY, SHOPIFY_EDIT, SHOPIFY_DESTROY } from "./queries";
import { SessionRequest } from "..";

export default function Edit() {
  // const { id } = useParams();

  // console.log(data);
  return (
    <React.Fragment>
      {/* {loading && <p>Loading...</p>}
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
      )} */}
    </React.Fragment>
  );
}
