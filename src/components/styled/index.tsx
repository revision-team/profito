import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenteredHorizontal = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const CenteredVertical = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
`;