import React, { FunctionComponent } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Centered } from "components/styled";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 40,
    textAlign: "center",
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(5),
    overflowY: "auto",
    overflowX: "auto",
  },
  gridContainer: {
    width: '100%', 
    padding: 15,
    overflowY: "auto",
    overflowX: "auto",
  },
  gridItem: {
    color: 'black',
    minHeight: '100vh',
  }
}));



const Registration: FunctionComponent = (props) => {
  const classes = useStyles();

  return <>
  <CssBaseline/>
    <Grid container spacing={0}
      className={classes.gridContainer} direction="column" >
      <Grid item xs={12} className={classes.gridItem}>
        <Centered>
          <Paper className={classes.paper}>
            {props.children}
          </Paper>
        </Centered>
      </Grid>
    </Grid>
  </>;
};

export default Registration;
