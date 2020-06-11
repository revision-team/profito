import React, { useState } from "react";
import NavIcon from "components/navigation/icon";

import { makeStyles, Theme } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import PaymentIcon from "@material-ui/icons/Payment";

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
      <NavIcon text="Payments" route="/app/payments">
        <PaymentIcon />
      </NavIcon>
      <NavIcon text="Integrations" route="/app/integrations">
        <SettingsInputCompositeIcon />
      </NavIcon>
    </div>
  );
}
