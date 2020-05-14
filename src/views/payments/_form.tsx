import React, { useState, ChangeEvent } from "react";
import { useQuery, useMutation, DocumentNode } from "@apollo/client";
import { GET_CURRENCIES } from "./queries";
import { useHistory } from "react-router-dom";
import { Payment } from ".";

export interface Currency {
  name: string;
  acronym: string;
}

export interface FormProps<T> {
  data: T;
  heading: string;
  subheading?: string;
  mutation: DocumentNode;
  destroy?: DocumentNode;
  redirect: string;
}

export default function Form(props: FormProps<Payment>) {
  const history = useHistory();

  const [element, setElement] = useState<Payment>({ ...props.data });

  const { data: currencies, loading: loadingCurrencies } = useQuery<{
    currencies: Currency[];
  }>(GET_CURRENCIES);

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

  const selectCurrency = (e: ChangeEvent<HTMLElement>) =>
    setElement({ ...element, currency: (e.target as HTMLInputElement).value });

  const selectFreqency = (e: ChangeEvent<HTMLElement>) =>
    setElement({ ...element, frequency: (e.target as HTMLInputElement).value });

  return <></>;
}
