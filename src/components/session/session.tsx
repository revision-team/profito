import React from "react";
import { FunctionComponent, useContext } from "react";
import { Store } from "store";
import { Redirect, useHistory } from "react-router-dom";
import Loading from "components/loading";
import { SetSession, ClsSession } from "store/actions";
import { UserSession } from "models/users";
import { StoreType } from "store/types";

export type SessionQueryType = {
  data: {
    session: UserSession;
  };
};

export const SESSION_QUERY = `
{
  session: user_current {
    email
    name
  }
}
`;

const INACTIVE_SESSION = "inactive";
const ACTIVE_SESSION = "active";
const SESSION_KEY = "session";

export function LoginSession() {
  localStorage.setItem(SESSION_KEY, ACTIVE_SESSION);
}

export function LogoutSession(context: StoreType) {
  context.dispatch(ClsSession());
  localStorage.setItem(SESSION_KEY, INACTIVE_SESSION);
}

interface WithSessionProps {
  redirect: string;
}

const WithSession: FunctionComponent<WithSessionProps> = (props) => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const session = localStorage.getItem(SESSION_KEY);

  if (session === INACTIVE_SESSION) {
    return <Redirect to={props.redirect} />;
  }

  const sessionLoaded = state.session.email !== undefined;

  if (!sessionLoaded) {
    fetch(`/api/graphql?query=${SESSION_QUERY}`)
      .then((r) => r.json())
      .then((r: SessionQueryType) => {
        dispatch(SetSession(r.data.session));
        LoginSession();
      })
      .catch(() => history.push(props.redirect));
  }

  return <>{sessionLoaded ? props.children : <Loading />}</>;
};

export default WithSession;
