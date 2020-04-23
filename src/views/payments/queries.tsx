import { gql } from "@apollo/client";

export const GET_PAYMENTS = gql`
  {
    payments {
      id
      start
      concluded
      end
      amount
      currency
      frequency
      description
    }
  }
`;

export const GET_PAYMENT = gql`
  query Payment($id: String) {
    payment(id: $id) {
      id
      start
      concluded
      end
      amount
      currency
      frequency
      description
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
    $description: String!
    $amount: Float!
    $concluded: Boolean!
    $currency: String!
    $end: String!
    $frequency: String!
    $start: String!
  ) {
    paymentsEdit(
      id: $id
      description: $description
      amount: $amount
      concluded: $concluded
      currency: $currency
      end: $end
      frequency: $frequency
      start: $start
    ) {
      id
      amount
      concluded
      currency
      description
      end
      frequency
      start
    }
  }
`;

export const PAYMENT_CREATE = gql`
  mutation CreatePayment(
    $description: String!
    $amount: Float!
    $concluded: Boolean!
    $currency: String!
    $end: String!
    $frequency: String!
    $start: String!
  ) {
    paymentsCreate(
      description: $description
      amount: $amount
      concluded: $concluded
      currency: $currency
      end: $end
      frequency: $frequency
      start: $start
    ) {
      id
      amount
      concluded
      currency
      description
      end
      frequency
      start
    }
  }
`;
