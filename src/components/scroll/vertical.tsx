import React from "react";
import { useTheme } from "@material-ui/core";

export const boxSize = 3;
export const maxHeight = 60;

export interface ScrollProps {
  style: any;
}

export default function ScrollVertical(props: ScrollProps) {
  const style = {
    ...props.style,
    backgroundColor: "grey",
    right: boxSize,
    bottom: boxSize,
    top: boxSize,
    maxHeight: maxHeight,
    borderRadius: 3,
  };

  return <div style={style} />;
}
