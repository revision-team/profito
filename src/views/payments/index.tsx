import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PAYMENTS } from "./queries";
import Loading from "components/loading";
import SortedTable from "components/tables/sortedTable";
import { TableRow, TableCell, Button } from "@material-ui/core";
import _ from "lodash";
import { Link } from "react-router-dom";

export interface Payment {
  amount: number;
  currency: string;
  date: string;
  date_end: string;
  concluded: boolean;
  frequency: string;
  description: string;
  employee: string;
  id: string;
}

export interface PaymentsRequest {
  payments: Payment[];
}

export default function Payments() {
  const { data, loading, error } = useQuery<PaymentsRequest>(GET_PAYMENTS);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && (
        <React.Fragment>
          <Link to='/app/payments/create'>
            <Button variant='contained' color='primary'>
              Add Payment
            </Button>
          </Link>
          <SortedTable
            data={data.payments}
            thead={[]}
            tbody={(e, key) => (
              <TableRow hover tabIndex={key} key={key}>
                <TableCell component='th' scope='row' key={key}>
                  {e.amount}
                </TableCell>
                <TableCell component='th' scope='row' key={key}>
                  {e.employee}
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
