import { gql } from "@apollo/client";

export const GET_SHOPIFIES = gql`
  {
    shopifies {
      id
      description
      store
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

export const QUERY_SHOPIFY_OAUTH = gql`
  query ShopifyOauth($store: String) {
    url: oauth {
      path: shopify(store: $store)
    }
  }
`;
