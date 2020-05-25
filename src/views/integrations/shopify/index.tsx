import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SHOPIFIES } from "./queries";
import Loading from "components/loading";
import SortedTable from "components/tables/sortedTable";

import _ from "lodash";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export interface Shopify {
  id: string;
  store: string;
  description: string;
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
        <React.Fragment>
          <Link to='/app/integrations/shopify/create'>
            <Button variant='contained' color='primary'>
              Add Store
            </Button>
          </Link>
          <SortedTable
            data={data.shopifies}
            thead={[
              { label: "Store", key: "store", sorted: true },
              { label: "Description", key: "description" },
              { key: "" },
            ]}
            tbody={(e, key) => (
              <TableRow hover tabIndex={key} key={key}>
                <TableCell component='th' scope='row' key={key}>
                  {e.store}
                </TableCell>
                <TableCell component='th' scope='row' key={key}>
                  {e.description}
                </TableCell>
                <TableCell component='th' scope='row' key={key}></TableCell>
              </TableRow>
            )}
            sort={(data, order, key) => _.orderBy(data, [key], [order])}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
