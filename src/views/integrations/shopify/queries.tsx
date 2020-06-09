import { gql } from "@apollo/client";

export const GET_OAUTH_SESSIONS = gql`
  query Shopify($source: String) {
    sessions: oauth_sessions(source: $source) {
      id: key
      role
      description
      edges {
        session {
          id: key
        }
      }
    }
  }
`;

export const GET_SHOPIFY = gql`
  query Shopify($id: String) {
    shopify(id: $id) {
      id
      description
      store
    }
  }
`;

export const SHOPIFY_EDIT = gql`
  mutation UpdateShopify($id: String!, $description: String!) {
    shopifiesEdit(id: $id, description: $description) {
      id
      description
    }
  }
`;

export const SHOPIFY_DESTROY = gql`
  mutation DestroyShopify($id: String!) {
    shopifiesDestroy(id: $id) {
      id
      description
    }
  }
`;

export const QUERY_SHOPIFY_OAUTH = gql`
  query ShopifyOauth($store: String) {
    url: oauth {
      path: shopify(store: $store)
    }
  }
`;
