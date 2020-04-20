import React from "react";
import "./styles.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #061c3f;
`;

const Description = styled.p`
  font-size: 12px;
  color: #a4a7b5;
`;

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader(props: PageHeaderProps) {
  return (
    <div className={props.className}>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
  );
}
