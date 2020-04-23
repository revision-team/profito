import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  DefaultOptions,
} from "@apollo/client";

// TODO: Handling chache propertly
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  defaultOptions,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/api/graphql",
  }),
});

export default client;
