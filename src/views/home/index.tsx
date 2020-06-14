import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();

  return <div>Home</div>;
}
