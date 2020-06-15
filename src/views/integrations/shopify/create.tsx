import React, { useState, ChangeEvent } from "react";
import { Centered } from "components/styled";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { QUERY_SHOPIFY_OAUTH } from "./queries";
import { Oauth, OauthWindow } from "views/integrations";

function DataLink(props: { store: string }) {
  const { store } = props;

  const { data, error } = useQuery<Oauth>(QUERY_SHOPIFY_OAUTH, {
    variables: { store: `${store}.myshopify.com` },
  });

  return (
    <React.Fragment>
      {data && !error && <OauthWindow open url={data.url.path} />}
    </React.Fragment>
  );
}

export default function Create() {
  const [store, setStore] = useState("uprofitodev");
  const [connectStore, setConnectStore] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConnectStore(store);
  };

  return (
    <Centered>
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          endAdornment={
            <InputAdornment position='end'>.myshopify.com</InputAdornment>
          }
          value={store}
          onChange={handleChange}
          autoFocus
        />
      </form>
      {connectStore && <DataLink store={connectStore} />}
    </Centered>
  );
}
