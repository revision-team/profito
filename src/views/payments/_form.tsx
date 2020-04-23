import React, { useState, ChangeEvent } from "react";
import { Payment } from "./index";
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
import { gql, useQuery } from "@apollo/client";

export interface Currency {
  name: string;
  acronym: string;
}

export interface FormProps<T> {
  data: T;
  heading: string;
  subheading?: string;
}

export default function Form(props: FormProps<Payment>) {
  const [payment, setPayment] = useState({ ...props.data });
  const { data: currencies, loading: loadingCurrencies } = useQuery<{
    currencies: Currency[];
  }>(gql`
    {
      currencies {
        name
        acronym
      }
    }
  `);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(payment);
  };

  const selectCurrency = (e: ChangeEvent<HTMLElement>) =>
    setPayment({ ...payment, currency: (e.target as HTMLInputElement).value });

  const selectFreqency = (e: ChangeEvent<HTMLElement>) =>
    setPayment({ ...payment, frequency: (e.target as HTMLInputElement).value });

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
                    value={payment.concluded}
                    onChange={(e) =>
                      setPayment({ ...payment, concluded: !payment.concluded })
                    }
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <DatePicker
                    id='start'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={payment.start}
                    onChange={(value) =>
                      setPayment({ ...payment, start: value.toString() })
                    }
                    label='Start Date'
                    formatStyle='large'
                  />

                  <DatePicker
                    id='end'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={payment.end}
                    disabled={!payment.concluded}
                    onChange={(value) =>
                      setPayment({ ...payment, end: value.toString() })
                    }
                    label='End Date'
                    formatStyle='large'
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <Input
                    label='Amount'
                    name='amount'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    type='number'
                    placeholder={`${payment.currency || "USD"} ${
                      payment.amount || `0.00`
                    }`}
                    onChange={(e) =>
                      setPayment({
                        ...payment,
                        amount: JSON.parse(e.target.value),
                      })
                    }
                  />
                  <Select
                    label='Select Label'
                    disabled={loadingCurrencies}
                    options={
                      currencies
                        ? currencies.currencies.map((c) => ({
                            value: c.acronym,
                            label: c.acronym,
                          }))
                        : []
                    }
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={payment.currency}
                    onChange={selectCurrency}
                  />
                  ;
                  <Select
                    label='Frequency'
                    options={[
                      { value: "recurrent", label: "Recurrent" },
                      { value: "one-time", label: "One Time" },
                    ]}
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={payment.frequency}
                    onChange={selectFreqency}
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <Input
                    label='Description'
                    name='description'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={payment.description}
                    onChange={(e) =>
                      setPayment({
                        ...payment,
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
