import React from "react";
import { Payment } from "./index";
import Form from "./_form";
import { PAYMENT_CREATE } from "./queries";

export default function Edit() {
  return (
    <React.Fragment>
      <Form
        data={
          {
            currency: "USD",
            frequency: "one-time",
            concluded: false,
            end: "",
            description: "",
          } as Payment
        }
        heading='Create Payment'
        subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        mutation={PAYMENT_CREATE}
        redirect='/payments'
      />
    </React.Fragment>
  );
}
