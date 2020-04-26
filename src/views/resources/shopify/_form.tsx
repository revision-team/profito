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
                  <Input
                    label='Description'
                    name='description'
                    required
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
