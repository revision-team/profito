import React from "react";
import {
  Column,
  TableWithBrowserPagination,
  ButtonIcon,
} from "react-rainbow-components";
import { useQuery } from "@apollo/client";
import { Container, Section, Create, CustomLink } from "components/custom";
import PageHeader from "components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { GET_PAYMENTS } from "./queries";

export interface Payment {
  id: string;
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
        <Column sortable header='Date' field='start' />
        <Column width={120} sortable header='Amount' field='amount' />
        <Column width={120} header='Currency' field='currency' />
        <Column width={150} sortable header='Frequency' field='frequency' />
        <Column header='Description' field='description' />
        <Column width={60} field='id' component={Actions} value='id' />
      </TableWithBrowserPagination>
    </div>
  );
}

export interface PaymentsRequest {
  payments: Payment[];
}

export default function Payments() {
  const { data, loading, error } = useQuery<PaymentsRequest>(GET_PAYMENTS);

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
          <Create>
            <CustomLink to='/payments/create'>Create</CustomLink>
          </Create>
          <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
            <Table elements={data.payments} />
          </Section>
        </Container>
      )}
    </React.Fragment>
  );
}
