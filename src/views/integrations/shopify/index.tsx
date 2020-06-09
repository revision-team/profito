import React from "react";
import { useQuery } from "@apollo/client";
import { GET_OAUTH_SESSIONS } from "./queries";
import Loading from "components/loading";
import SortedTable from "components/tables/sortedTable";
import { SessionRequest } from "views/integrations";
import _ from "lodash";
import { TableRow, TableCell, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

export const useStyles = makeStyles({
  textRight: {
    textAlign: "right",
  },
});

export default function Payments() {
  const classes = useStyles();

  const { data, loading, error } = useQuery<SessionRequest>(
    GET_OAUTH_SESSIONS,
    {
      variables: { source: "shopify" },
    }
  );

  console.log(data);

  return (
    <React.Fragment>
      <Link to='/app/integrations/shopify/create'>
        <Button variant='contained' color='primary'>
          Add Store
        </Button>
      </Link>

      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && (
        <React.Fragment>
          <SortedTable
            data={data.sessions}
            thead={[{ label: "Store", key: "description" }, { key: "" }]}
            tbody={(e, key) => (
              <TableRow hover tabIndex={key} key={key}>
                <TableCell component='th' scope='row' key={key}>
                  {e.description}
                </TableCell>
                <TableCell
                  component='th'
                  scope='row'
                  key={key}
                  className={classes.textRight}
                >
                  Actions
                </TableCell>
              </TableRow>
            )}
            sort={(data, order, key) => _.orderBy(data, [key], [order])}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
