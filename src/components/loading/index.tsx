import React from "react";
import { Centered } from "components/styled";
import { CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Centered>
      <CircularProgress />
    </Centered>
  );
}
