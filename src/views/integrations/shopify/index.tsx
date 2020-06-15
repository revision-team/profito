import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SHOPIFY_SESSIONS } from "./queries";
import Loading from "components/loading";
import SortedTable from "components/tables/sortedTable";
import { SessionRequest } from "views/integrations";
import _ from "lodash";
import {
  TableRow,
  TableCell,
  Button,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { HorizontalCentered } from "components/styled";

export const useStyles = makeStyles((theme) => ({
  textRight: {
    textAlign: "right",
  },
  tableContainer: {
    paddingRight: theme.spacing(1),
  },
}));

interface ShopifyLink {
  children: string;
}

function ShopifyLink(props: ShopifyLink) {
  const { children } = props;

  const name = children.split(".")[0];

  return <a href={`https://${children}`}>{name}</a>;
}

function Invitations() {
  const classes = useStyles();

  const { data, loading } = useQuery<SessionRequest>(GET_SHOPIFY_SESSIONS, {
    variables: { active: false },
  });

  if (loading) return <div>Loading invitations</div>;

  if (data && data.sessions.length > 0)
    return (
      <SortedTable
        style={{ maxWidth: 900 }}
        data={data.sessions.filter((s) => s.role !== "owner")}
        thead={[{ key: "store" }, { key: "role", sorted: true }, { key: "" }]}
        tbody={(e, key) => (
          <TableRow hover tabIndex={key} key={key}>
            <TableCell component='th' scope='row' key={key}>
              <ShopifyLink>{e.edges.session.description}</ShopifyLink>
            </TableCell>
            <TableCell component='th' scope='row' key={key}>
              {e.role}
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
    );

  return <React.Fragment />;
}

export default function Sessions() {
  const classes = useStyles();

  const { data, loading, error } = useQuery<SessionRequest>(
    GET_SHOPIFY_SESSIONS,
    {
      variables: { active: false },
    }
  );

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <Link to='/app/integrations/shopify/create'>
        <Button variant='contained' color='primary'>
          Add Store
        </Button>
      </Link>

      {error && <p>{error.message}</p>}
      {data && data.sessions.length > 0 && (
        <Grid container>
          <SortedTable
            data={data.sessions}
            thead={[
              { label: "Store", key: "store" },
              { key: "description" },
              { key: "" },
            ]}
            tbody={(e, key) => (
              <TableRow hover tabIndex={key} key={key}>
                <TableCell component='th' scope='row' key={key}>
                  <ShopifyLink>{e.edges.session.description}</ShopifyLink>
                </TableCell>
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
          <HorizontalCentered>
            <Invitations />
          </HorizontalCentered>
        </Grid>
      )}
    </React.Fragment>
  );
}
