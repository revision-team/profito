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
import { GET_SHOPIFIES } from "./queries";
import Loading from "components/loading";

export interface Shopify {
  id: string;
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
        <Column width={60} field='id' component={Actions} value='id' />
      </TableWithBrowserPagination>
    </div>
  );
}

interface ShopifiesRequest {
  shopifies: Shopify[];
}

export default function Payments() {
  const { data, loading, error } = useQuery<ShopifiesRequest>(GET_SHOPIFIES);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && (
        <Container>
          <PageHeader
            title={`Shopify Stores`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />
          <Create>
            <CustomLink to='/resources/shopify/create'>Create</CustomLink>
          </Create>
          <Section className='rainbow-align-content_space-between rainbow-p-top_large'>
            <Table elements={data.shopifies} />
          </Section>
        </Container>
      )}
    </React.Fragment>
  );
}
