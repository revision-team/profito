import React, { CSSProperties } from "react";
import classnames from "classnames";
import Card from "react-rainbow-components/components/Card";
import "./styles.css";

interface TileProps {
  icon: JSX.Element;
  title: string;
  label: string | number | JSX.Element;
  variant?: "base" | "inverse";
  className?: string;
  style?: CSSProperties;
}

export default function Tile(props: TileProps) {
  const getContainerClassNames = () =>
    classnames(
      "react-rainbow-admin-tile",
      "rainbow-align-content_space-between",
      "rainbow-p-vertical_medium",
      "rainbow-p-horizontal_small",
      props.className
    );

  const getVariantClassNames = () =>
    classnames("react-rainbow-admin-tile_content rainbow-p-top_small", {
      "react-rainbow-admin-tile_content--inverse": props.variant === "inverse",
    });

  const getTitleClassNames = () =>
    classnames("react-rainbow-admin-tile_title rainbow-font-size-text_medium", {
      "react-rainbow-admin-tile_title--inverse": props.variant === "inverse",
    });

  return (
    <Card className={getContainerClassNames()} style={props.style}>
      {props.icon}
      <div className='rainbow-flex rainbow-flex_column rainbow-align_end'>
        <h2 className={getTitleClassNames()}>{props.title}</h2>
        <h1 className={getVariantClassNames()}>{props.label}</h1>
      </div>
    </Card>
  );
}
