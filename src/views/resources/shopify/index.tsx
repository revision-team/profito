import React from "react";

import { useQuery } from "@apollo/client";
import { GET_SHOPIFIES } from "./queries";
import Loading from "components/loading";

export interface Shopify {
  id: string;
  username: string;
  password: string;
  store: string;
  description: string;
}

interface ShopifiesRequest {
  shopifies: Shopify[];
}

export default function Payments() {
  const { data, loading, error } = useQuery<ShopifiesRequest>(GET_SHOPIFIES);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && <></>}
    </React.Fragment>
  );
}
