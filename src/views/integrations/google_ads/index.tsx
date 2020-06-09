import React from "react";
import { Button } from "@material-ui/core";
import { Oauth } from "..";
import { useQuery, gql } from "@apollo/client";

const QUERY_GOOGLE_OAUTH = gql`
  {
    url: oauth {
      path: google
    }
  }
`;

export default function GoogleAds() {
  const { data } = useQuery<Oauth>(QUERY_GOOGLE_OAUTH);

  return (
    <div>
      <Button variant='contained' color='primary'>
        Add Store
      </Button>
    </div>
  );
}
