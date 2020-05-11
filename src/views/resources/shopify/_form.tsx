import React, { useState } from "react";
import { Shopify } from "./index";
import { FormProps } from "views/payments/_form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

export interface Currency {
  name: string;
  acronym: string;
}

export default function Form(props: FormProps<Shopify>) {
  const history = useHistory();

  const [element, setElement] = useState({ ...props.data });

  const [submit] = useMutation(props.mutation);
  const [destroy] = useMutation(props.destroy || props.mutation);

  const destroyEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    destroy({ variables: element }).then(() => history.push(props.redirect));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ variables: element }).then(() => history.push(props.redirect));
  };

  return <></>;
}
