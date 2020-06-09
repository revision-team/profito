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

import shopify from "images/shopify.png";
import google from "images/googleads2.png";

// POPUP PROPS
const windowFeatures = {
  width: 500,
  height: 500,
} as IWindowFeatures;

export interface Session {
  description: string;
  id: string;
  role: string;
  edges: {
    session: {
      id: string;
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

interface OauthWindowProps {
  open?: boolean;
  url: string;
}

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
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
