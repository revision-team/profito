import React from "react";
import {
  Column,
  TableWithBrowserPagination,
  ButtonIcon,
} from "react-rainbow-components";
import { useQuery, gql } from "@apollo/client";
import { Container, Section } from "components/custom";
import PageHeader from "components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export interface Payment {
  key: string;
  start: string;
  concluded: boolean;
  end: string;
  amount: number;
  currency: string;
  frequency: string;
  description: string;
}

const Actions = ({ value }: { value: string }) => {
  const history = useHistory();
  return (
    <ButtonIcon
      variant='base'
      size='medium'
      onClick={() => history.push(`/payments/${value}/edit`)}
      icon={<FontAwesomeIcon icon={faPencilAlt} />}
    />
  );
};

export function Table(props: { elements: object[] }) {
  return (
    <div className='rainbow-m-bottom_xx-large'>
      <TableWithBrowserPagination
        pageSize={9}
        data={props.elements}
        keyField='id'
      >
        <Column sortable header='Date' field='date' />
        <Column sortable header='Amount' field='amount' />
        <Column header='Currency' field='currency' />
        <Column sortable header='Frequency' field='frequency' />
        <Column header='Description' field='description' />
        <Column width={60} field='key' component={Actions} value='key' />
      </TableWithBrowserPagination>
    </div>
  );
}

export default function Payments() {
  const { data, loading, error } = useQuery<{ payments: Payment[] }>(gql`
    {
      payments {
        key
        start
        concluded
        end
        amount
        currency
        frequency
        description
      }
    }
  `);

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <Container>
          <PageHeader
            title={`Payments`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />

          <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
            <Table elements={data.payments} />
          </Section>
        </Container>
      )}
    </React.Fragment>
  );
}
