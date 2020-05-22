import React, { useState, ChangeEvent } from "react";
import { Centered } from "components/styled";
import { QUERY_SHOPIFY_OAUTH } from "./queries";
import { useQuery } from "@apollo/client";
import Loading from "components/loading";
import { Oauth, openOauthWindow } from "..";
import { Input } from "@material-ui/core";

export default function Integrate() {
  const [store, setStore] = useState("");

  const { data } = useQuery<Oauth>(QUERY_SHOPIFY_OAUTH, {
    variables: { store },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleSubmit = () => {
    if (data) openOauthWindow(data.url.path);
  };

  return (
    <Centered>
      {data && (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder='Type store name'
            value={store}
            onChange={handleChange}
          />
        </form>
      )}
    </Centered>
  );
}
