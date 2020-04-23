import React from "react";
import { Shopify } from "./index";
import Form from "./_form";
import { SHOPIFY_CREATE } from "./queries";

export default function Edit() {
  return (
    <React.Fragment>
      <Form
        data={{} as Shopify}
        heading='Create Payment'
        subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        mutation={SHOPIFY_CREATE}
        redirect='/resources/shopify'
      />
    </React.Fragment>
  );
}
