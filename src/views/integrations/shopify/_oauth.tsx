import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Oauth, openOauthWindow } from "..";
import { QUERY_SHOPIFY_OAUTH } from "./queries";
import Loading from "components/loading";
import { Centered } from "components/styled";
import { Button } from "@material-ui/core";

export default function ShopifyOauthWindow() {
  const { store } = useParams();
  const { data, loading, error } = useQuery<Oauth>(QUERY_SHOPIFY_OAUTH, {
    variables: {
      store: `${store}.myshopify.com`,
    },
  });

  useEffect(() => {
    if (data) openOauthWindow(data.url.path);
  }, [data]);

  return (
    <React.Fragment>
      {error && <p>{error.message}</p>}
      {loading && <Loading />}
      {data && (
        <Centered>
          <Link to='/app/integrations/shopify'>
            <Button color='primary' variant='contained'>
              Checkout stores
            </Button>
          </Link>
        </Centered>
      )}
    </React.Fragment>
  );
}
