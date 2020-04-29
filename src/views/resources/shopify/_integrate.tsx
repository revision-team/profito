import React, { useState, ChangeEvent } from "react";
import { Centered } from "components/custom";
import { Input } from "react-rainbow-components";
import { SHOPIFY_SYSTEM } from "./queries";
import { useQuery } from "@apollo/client";
import Loading from "components/loading";

interface ShopApplication {
  redirect: string;
  api_key: string;
  nonce: number;
  scopes: string;
  access_mode: string;
}

export default function Integrate() {
  const [store, setStore] = useState("");

  const { data, loading, error } = useQuery<{
    shopify_system: ShopApplication;
  }>(SHOPIFY_SYSTEM);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleSubmit = () => {
    if (data) {
      const {
        api_key,
        scopes,
        redirect,
        nonce,
        access_mode,
      } = data.shopify_system;

      window.open(
        `https://${store}.myshopify.com/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect}&state=${nonce}&grant_options[]=${access_mode}`,
        "Data",
        "height=600,width=700"
      );
    }
  };

  return (
    <Centered>
      {error && <p>{error.message}</p>}
      {loading && <Loading />}
      {data && (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder='input shopify store'
            value={store}
            onChange={handleChange}
          />
        </form>
      )}
    </Centered>
  );
}
