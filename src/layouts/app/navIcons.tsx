import React from "react";

import NavIcon from "components/navigation/icon";

import { makeStyles, Theme } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
}));

export default function NavIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavIcon text="Dashboard" route="/app/dashboard">
        <DashboardIcon />
      </NavIcon>
      <NavIcon text="Schedule" route="/scheduler">
        <CalendarTodayIcon />
      </NavIcon>
      <NavIcon text="Users" route="/app/payments">
        <PeopleIcon />
      </NavIcon>
      <NavIcon text="Integrations" route="/app/integrations">
        <SettingsInputCompositeIcon />
      </NavIcon>
    </div>
  );
}
