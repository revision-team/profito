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

export interface Shopify {
  key: string;
  username: string;
  password: string;
  store: string;
  description: string;
}

const Actions = ({ value }: { value: string }) => {
  const history = useHistory();
  return (
    <ButtonIcon
      variant='base'
      size='medium'
      onClick={() => history.push(`/resources/shopify/${value}/edit`)}
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
        <Column sortable header='Store' field='store' />
        <Column header='Description' field='description' />
        <Column width={60} field='key' component={Actions} value='key' />
      </TableWithBrowserPagination>
    </div>
  );
}

export default function Payments() {
  const { data, loading, error } = useQuery<{ shopifies: Shopify[] }>(gql`
    {
      shopifies {
        key
        username
        password
        store
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
            title={`Shopify`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />

          <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
            <Table elements={data.shopifies} />
          </Section>
        </Container>
      )}
    </React.Fragment>
  );
}
