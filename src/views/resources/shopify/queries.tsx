import { gql } from "@apollo/client";

export const GET_SHOPIFIES = gql`
  {
    shopifies {
      id
      description
      store
      token
    }
  }
`;

export const GET_SHOPIFY = gql`
  query Shopify($id: String) {
    shopify(id: $id) {
      id
      description
      store
      token
    }
  }
`;

export const SHOPIFY_EDIT = gql`
  mutation UpdateShopify($id: String!, $description: String!) {
    shopifiesEdit(id: $id, description: $description) {
      id
      description
      store
      token
    }
  }
`;

export const SHOPIFY_DESTROY = gql`
  mutation DestroyShopify($id: String!) {
    shopifiesDestroy(id: $id) {
      id
      description
      store
      token
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
