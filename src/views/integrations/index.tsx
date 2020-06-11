import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import NewWindow, { IWindowFeatures } from "react-new-window";
import { gql } from "@apollo/client";

import shopify from "images/shopify logo vector.png";
import google from "images/googleads.png";

// COMMON CODES
export const GET_OAUTH_SESSIONS = gql`
  query Sessions($source: String, $active: Boolean) {
    sessions: oauth_sessions(source: $source, active: $active) {
      id: key
      role
      description
      edges {
        session {
          id: key
        }
      }
    }
  }
`;

export interface Session {
  description: string;
  id: string;
  role: string;
  edges: {
    session: {
      id: string;
      description: string;
    };
  };
}

export interface SessionRequest {
  sessions: Session[];
}

export type Oauth = {
  url: {
    path: string;
  };
};

// NEW WINDOW
interface OauthWindowProps {
  open?: boolean;
  url: string;
}

const windowFeatures = {
  width: 500,
  height: 500,
} as IWindowFeatures;

export function OauthWindow(props: OauthWindowProps) {
  const history = useHistory();
  const { open, url } = props;

  const handleUnload = () => history.push("/app/integrations/shopify");

  return (
    <>
      {open && (
        <NewWindow
          url={url}
          onUnload={handleUnload}
          features={windowFeatures}
          center='screen'
        />
      )}
    </>
  );
}

// LIST VIEW
const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 200,
  },
  media: {
    height: 200,
  },
}));

interface IntegrationCardProps {
  image: string;
  route: string;
}

function IntegrationCard(props: IntegrationCardProps) {
  const classes = useStyles();
  return (
    <Grid item md={2} xs={6}>
      <Link to={props.route}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia image={props.image} className={classes.media} />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default function Integrations() {
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <IntegrationCard image={shopify} route='/app/integrations/shopify' />
        <IntegrationCard image={google} route='/app/integrations/google_ads' />
      </Grid>
    </div>
  );
}
