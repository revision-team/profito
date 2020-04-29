import React from "react";
import { Spinner } from "react-rainbow-components";
import { Centered } from "components/custom";

export default function Loading() {
  return (
    <Centered>
      <Spinner size='large' />
    </Centered>
  );
}
