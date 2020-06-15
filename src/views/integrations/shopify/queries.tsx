import { gql } from "@apollo/client";

export const GET_SHOPIFY_SESSIONS = gql`
  query Sessions($active: Boolean) {
    sessions: oauth_sessions(source: "shopify", active: $active) {
      id: key
      role
      description
      edges {
        session {
          id: key
          description
        }
      }
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
