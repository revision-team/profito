import React, { useState, ChangeEvent } from "react";
import { Centered } from "components/styled";
import { InputAdornment, OutlinedInput, makeStyles } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { QUERY_SHOPIFY_OAUTH } from "./queries";
import { Oauth, OauthWindow } from "views/integrations";

export default function Integrate() {
  const [store, setStore] = useState("stonesdev");
  const [openWindow, setOpenWindow] = useState(false);

  const { data } = useQuery<Oauth>(QUERY_SHOPIFY_OAUTH, {
    variables: { store: `${store}.myshopify.com` },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenWindow(true);
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
      {data && <OauthWindow open={openWindow} url={data.url.path} />}
    </Centered>
  );
}
