import React, { useContext } from "react";
import { Store } from "store";
import { ClsSession } from "store/actions";
import { Redirect } from "react-router-dom";

export default function Navigation() {
  const { state, dispatch } = useContext(Store);

  if (!state.session.email) {
    return <Redirect to='/auth/login' />;
  }

  const handleLogout = () => {
    dispatch(ClsSession());
  };

  return (
    <nav>
      Email: {state.session.email}
      Name: {state.session.name}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
