import React from "react";
import { Button } from "@material-ui/core";
import { Oauth, openOauthWindow } from "..";
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

  const handleOauthIntegration = () => {
    if (data) openOauthWindow(data.url.path);
  };

  return (
    <div>
      <Button onClick={handleOauthIntegration}>Integrate</Button>
    </div>
  );
}
