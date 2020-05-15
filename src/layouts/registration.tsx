import React, { FunctionComponent } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Centered } from "components/styled";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow1: 1,
  },
  paper: {
    borderStyle: 'solid', borderWidth: '0px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(4),
    overflowY: "auto",
    overflowX: "auto",
  },
  gridContainer: {
    backgroundImage: `url(${"/assets/images/bg-01.jpg"})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '15px',
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
