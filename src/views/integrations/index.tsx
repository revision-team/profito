import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import shopify from "images/shopify.png";
import google from "images/googleads2.png";

export type Oauth = {
  url: {
    path: string;
  };
};

export function openOauthWindow(path: string) {
  window.open(path, "Integration", "height=600,width=700");
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
