import { UserSession } from "models/users";
import { gql, useQuery } from "@apollo/client";
import { Store } from "store";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { SetSession } from "store/actions";
import Loading from "components/loading";

type QueryType = {
  session: UserSession;
};

const QUERY_USER = gql`
  {
    session: user_current {
      email
      name
    }
  }
`;

export default function TrySession() {
  const { dispatch } = useContext(Store);
  const { data, loading, error } = useQuery<QueryType>(QUERY_USER);

  const session = localStorage.getItem("session");
  if (session) return <Redirect to='/auth/login' />;

  if (error) return <Redirect to='/auth/login' />;

  if (data) {
    localStorage.setItem("session", "active");
    dispatch(SetSession(data.session));
  }

  return <React.Fragment>{loading && <Loading />}</React.Fragment>;
}
