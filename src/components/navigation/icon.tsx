import React, { FunctionComponent } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "5px 0px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 0,
    cursor: "pointer",
    flexDirection: "column",
  },
  icon: {
    marginTop: 10,
    height: 45,
    width: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .1)",
    },
  },
  activeIcon: {
    backgroundColor: "rgba(255, 255, 255, .1)",
  },
  caption: {
    fontSize: 13,
    letterSpacing: "-0.3px",
    textAlign: "center",
    color: "#a4a7b5",
    marginBottom: 10,
  },
  active: {
    marginTop: theme.spacing(1),
    width: "0.25rem",
    height: 68,
    left: 0,
    position: "absolute",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8,
    borderRadius: 100,
  },
}));

type NavIconProps = {
  route: string;
  text: string;
};

const NavIcon: FunctionComponent<NavIconProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const redirect = () => history.push(props.route);

  const active = _.includes(history.location.pathname, props.route);

  return (
    <div className={classes.container} onClick={redirect}>
      <div className={clsx(classes.icon, { [classes.activeIcon]: active })}>
        {props.children}
      </div>
      <Typography variant="caption" className={classes.caption}>
        {props.text}
      </Typography>
      {active && <div className={classes.active} />}
    </div>
  );
};

export default NavIcon;
