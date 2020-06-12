import React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 50,
    width: 50,
    margin: theme.spacing(3),
  },
}));

interface NotificationsProps {
  count: number;
}

export default function Notifications(props: NotificationsProps) {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="show notifications"
      color="inherit"
      className={classes.root}
    >
      <Badge badgeContent={props.count} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
