import { gql } from "@apollo/client";

export const GET_PAYMENTS = gql`
  {
    payments {
      amount
      currency
      date
      date_end
      concluded
      frequency
      description
      employee
      id
    }
  }
`;

export const GET_PAYMENT = gql`
  query Payment($id: String) {
    payment(id: $id) {
      amount
      currency
      date
      date_end
      concluded
      frequency
      description
      employee
      id
    }
  }
`;

export const GET_CURRENCIES = gql`
  {
    currencies {
      name
      acronym
    }
  }
`;

export const PAYMENT_EDIT = gql`
  mutation UpdatePayment(
    $id: String!
    $employee: String!
    $description: String!
    $amount: Float!
    $concluded: Boolean!
    $currency: String!
    $date_end: String!
    $frequency: String!
    $date: String!
  ) {
    paymentsEdit(
      id: $id
      description: $description
      employee: $employee
      amount: $amount
      concluded: $concluded
      currency: $currency
      date_end: $date_end
      frequency: $frequency
      date: $date
    ) {
      amount
      currency
      date
      date_end
      concluded
      frequency
      description
      employee
      id
    }
  }
`;

export const PAYMENT_CREATE = gql`
  mutation CreatePayment(
    $description: String!
    $employee: String!
    $amount: Float!
    $concluded: Boolean!
    $currency: String!
    $date_end: String!
    $frequency: String!
    $date: String!
  ) {
    paymentsCreate(
      description: $description
      employee: $employee
      amount: $amount
      concluded: $concluded
      currency: $currency
      date_end: $date_end
      frequency: $frequency
      date: $date
    ) {
      amount
      currency
      date
      date_end
      concluded
      frequency
      description
      employee
      id
    }
  }
`;

export const PAYMENT_DESTROY = gql`
  mutation DestroyPayment($id: String!) {
    paymentsDestroy(id: $id) {
      amount
      currency
      date
      date_end
      concluded
      frequency
      description
      employee
      id
    }
  }
`;
