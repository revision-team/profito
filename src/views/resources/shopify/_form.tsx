import React, { useState } from "react";
import { Shopify } from "./index";
import { Container, Section } from "components/custom";
import PageHeader from "components/PageHeader";
import { Input, Card, Button } from "react-rainbow-components";

export interface Currency {
  name: string;
  acronym: string;
}

export interface FormProps<T> {
  data: T;
  heading: string;
  subheading?: string;
}

export default function Form(props: FormProps<Shopify>) {
  const [store, setStore] = useState({ ...props.data });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(store);
  };

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
                  <Input
                    label='Store'
                    name='store'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={store.store}
                    onChange={(e) =>
                      setStore({
                        ...store,
                        store: e.target.value,
                      })
                    }
                  />
                  <Input
                    label='Username'
                    name='username'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={store.username}
                    onChange={(e) =>
                      setStore({
                        ...store,
                        username: e.target.value,
                      })
                    }
                  />
                  <Input
                    label='Password'
                    name='password'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    type='password'
                    value={store.password}
                    onChange={(e) =>
                      setStore({
                        ...store,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='rainbow-flex rainbow-justify rainbow-p-horizontal_small'>
                  <Input
                    label='Description'
                    name='description'
                    className='rainbow-m-top_small rainbow-rainbow-forms_inputs-field'
                    value={store.description}
                    onChange={(e) =>
                      setStore({
                        ...store,
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
