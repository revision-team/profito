import styled from "styled-components";
import {
  Card as Cardbow,
  Input as Inputbow,
  Button as Buttonbow,
} from "react-rainbow-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 16px 40px 24px 40px;
  @media (max-width: 800px) {
    padding: 16px 16px 24px 16px;
  }
`;

export const Section = styled.section`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Create = styled(Buttonbow)`
  margin-top: 20px;
`;

// const Card = styled(DefaultCard)`
//   width: 100%;
//   flex-wrap: wrap;
// `;

// const CardHead = styled.h1`
//   font-size: 28px;
//   line-height: 1.07;
//   letter-spacing: 1.8px;
// `;

// const CardTitle = styled.p`
//   letter-spacing: 0.2px;
//   text-transform: uppercase;
// `;

// INDEX SECTION

export const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = styled(Cardbow)`
  width: 500px;
  padding: 20px;
  text-align: center;
  flex-wrap: wrap;
`;

export const Input = styled(Inputbow)`
  margin: 20px;
`;

export const CustomLink = styled(Link)`
  color: #01b6f5;
  text-decoration: none;
  &hover: {
    text-decoration: none;
  }
`;
