import React, { useState, ChangeEvent } from "react";
import { Centered } from "components/styled";
import { Input } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Integrate() {
  const history = useHistory();
  const [store, setStore] = useState("stonesdev");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/app/integrations/shopify/${store}/oauth`);
  };

  return (
    <Centered>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Type store name'
          value={store}
          onChange={handleChange}
        />
      </form>
    </Centered>
  );
}
