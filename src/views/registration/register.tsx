import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Centered } from "components/styled";

interface UserData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export default function Register() {
  const history = useHistory();
  const [data, setData] = useState<UserData>({} as UserData);

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`/api/register`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      history.push("/auth/login");
    });
  };

  // TODO: Build
  return <Centered></Centered>;
}
