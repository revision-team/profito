import { gql } from "@apollo/client";

export const GET_SHOPIFIES = gql`
  {
    shopifies {
      id
      username
      password
      store
      description
    }
  }
`;

export const GET_SHOPIFY = gql`
  query Shopify($id: String) {
    shopify(id: $id) {
      id
      username
      password
      store
      description
    }
  }
`;

export const SHOPIFY_EDIT = gql`
  mutation UpdateShopify(
    $id: String!
    $description: String!
    $username: String!
    $password: String!
    $store: String!
  ) {
    shopifiesEdit(
      id: $id
      username: $username
      password: $password
      store: $store
      description: $description
    ) {
      id
      username
      password
      store
      description
    }
  }
`;

export const SHOPIFY_CREATE = gql`
  mutation CreateShopify(
    $description: String!
    $username: String!
    $password: String!
    $store: String!
  ) {
    shopifiesCreate(
      username: $username
      password: $password
      store: $store
      description: $description
    ) {
      id
      username
      password
      store
      description
    }
  }
`;

export const SHOPIFY_DESTROY = gql`
  mutation DestroyShopify($id: String!) {
    shopifiesDestroy(id: $id) {
      id
      username
      password
      store
      description
    }
  }
`;

export const SHOPIFY_SYSTEM = gql`
  {
    shopify_system {
      access_mode
      api_key
      nonce
      redirect
      scopes
    }
  }
`;
