import React, { FunctionComponent } from "react";
import { Centered } from "components/styled";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
}));

const Session: FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <Centered>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Centered>
  );
};

export default Session;
