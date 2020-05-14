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
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <IntegrationCard image={shopify} route='/integrations/shopify' />
        <IntegrationCard image={google} route='/integrations/google_ads' />
      </Grid>
    </div>
  );
}
