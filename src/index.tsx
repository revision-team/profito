import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import StoreProvider from "store";

import App from "App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
