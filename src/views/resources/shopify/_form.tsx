import React, { useState } from "react";
import { Shopify } from "./index";
import { Container, Section } from "components/custom";
import PageHeader from "components/PageHeader";
import { Input, Card, Button } from "react-rainbow-components";
import { FormProps } from "views/payments/_form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

export interface Currency {
  name: string;
  acronym: string;
}

export default function Form(props: FormProps<Shopify>) {
  const history = useHistory();

  const [store, setStore] = useState({ ...props.data });

  const [submit] = useMutation(props.mutation);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ variables: store }).then(() => history.push(props.redirect));
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
                    required
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
                    label='Key'
                    name='username'
                    required
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
                    required
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
                    required
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
