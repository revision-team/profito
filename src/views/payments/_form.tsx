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

  return (
    <Container>
      <PageHeader title={props.heading} description={`${props.subheading}`} />

      <Section className='rainbow-p-top_large'>
        <form onSubmit={submitForm}>
          <Card
            footer={
              <React.Fragment>
                <Button
                  className='rainbow-rainbow-forms_button'
                  variant='brand'
                  type='submit'
                >
                  <span>Submit</span>
                </Button>
                {"  "}
                {props.destroy && (
                  <Button
                    className='rainbow-rainbow-forms_button'
                    variant='destructive'
                    type='submit'
                    onClick={destroyEvent}
                  >
                    <span>Destroy</span>
                  </Button>
                )}
              </React.Fragment>
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
                    value={element.date}
                    onChange={(value) =>
                      setElement((prevElement) => ({
                        ...prevElement,
                        date: value.toString(),
                      }))
                    }
                    label='Date'
                    formatStyle='large'
                  />

                  <DatePicker
                    id='end'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.date_end}
                    disabled={
                      element.frequency !== "recurrent" || !element.concluded
                    }
                    minDate={new Date(Date.parse(element.date))}
                    onChange={(value) =>
                      setElement((prevElement) => ({
                        ...prevElement,
                        date_end: value.toString(),
                      }))
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
                    label='Currency'
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
                    label='Employee Name'
                    name='employee'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={element.employee}
                    onChange={(e) =>
                      setElement({
                        ...element,
                        employee: e.target.value,
                      })
                    }
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
