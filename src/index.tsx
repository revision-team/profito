import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "./apollo";

interface User {
  email: string;
  firstname: string;
  lastname: string;
}

interface UserData {
  users: User[];
}

const App = () => {
  const { data, loading, error } = useQuery<UserData>(gql`
    {
      users {
        email
        firstname
        lastname
      }
    }
  `);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.users.map((u, k) => (
            <li key={k}>
              {u.email} {u.firstname} {u.lastname}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
