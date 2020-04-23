import React, { useState, ChangeEvent } from "react";
import { Container, Section } from "components/custom";
import PageHeader from "components/PageHeader";
import {
  Input,
  Card,
  Button,
  DatePicker,
  CheckboxToggle,
  Select,
} from "react-rainbow-components";
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
  query: DocumentNode;
  redirect: string;
}

export default function Form(props: FormProps<Payment>) {
  const history = useHistory();

  const [element, setElement] = useState<Payment>({ ...props.data });

  const { data: currencies, loading: loadingCurrencies } = useQuery<{
    currencies: Currency[];
  }>(GET_CURRENCIES);

  const [submit] = useMutation(props.query);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ variables: element }).then(() => history.push(props.redirect));
  };

  const selectCurrency = (e: ChangeEvent<HTMLElement>) =>
    setElement({ ...element, currency: (e.target as HTMLInputElement).value });

  const selectFreqency = (e: ChangeEvent<HTMLElement>) =>
    setElement({ ...element, frequency: (e.target as HTMLInputElement).value });

  return (
    <Container>
      <PageHeader title={props.heading} description={`${props.subheading}`} />

      <Section className='rainbow-p-top_large'>
        <form onSubmit={submitForm}>
          <Card
            footer={
              <Button
                className='rainbow-rainbow-forms_button'
                variant='brand'
                type='submit'
              >
                <span>Submit</span>
              </Button>
            }
          >
            <Container>
              <article className='rainbow-rainbow-forms_inputs-container'>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <CheckboxToggle
                    label='Finalized'
                    name='concluded'
                    disabled={element.frequency !== "recurrent"}
                    value={element.concluded}
                    onChange={(e) =>
                      setElement({ ...element, concluded: !element.concluded })
                    }
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <DatePicker
                    id='start'
                    required
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.start}
                    onChange={(value) =>
                      setElement({ ...element, start: value.toString() })
                    }
                    label='Date'
                    formatStyle='large'
                  />

                  <DatePicker
                    id='end'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.end}
                    disabled={
                      element.frequency !== "recurrent" || !element.concluded
                    }
                    minDate={new Date(Date.parse(element.start))}
                    onChange={(value) =>
                      setElement({ ...element, end: value.toString() })
                    }
                    label='End Date'
                    formatStyle='large'
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <Input
                    label='Amount'
                    name='amount'
                    required={element.amount === undefined}
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    type='number'
                    placeholder={`${element.currency || "USD"} ${
                      element.amount || `0.00`
                    }`}
                    onChange={(e) =>
                      setElement({
                        ...element,
                        amount: JSON.parse(e.target.value),
                      })
                    }
                  />
                  <Select
                    label='Select Label'
                    disabled={!currencies}
                    options={
                      currencies
                        ? currencies.currencies.map((c) => ({
                            value: c.acronym,
                            label: c.acronym,
                          }))
                        : []
                    }
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.currency}
                    onChange={selectCurrency}
                  />

                  <Select
                    label='Frequency'
                    options={[
                      { value: "one-time", label: "One Time" },
                      { value: "recurrent", label: "Recurrent" },
                    ]}
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.frequency}
                    onChange={selectFreqency}
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <Input
                    label='Description'
                    name='description'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.description}
                    onChange={(e) =>
                      setElement({
                        ...element,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </article>
            </Container>
          </Card>
        </form>
      </Section>
    </Container>
  );
}
