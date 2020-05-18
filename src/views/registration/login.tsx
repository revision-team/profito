import React, { useState, useContext, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";

import {
  FormTitle, ForgotPassword, 
  Registrations, FormControlwithInput} from "../../components/login/logincomponents";
import { loginStyles } from '../../components/login/styles';

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const { dispatch } = useContext(Store);
  const history = useHistory();
  const classes = loginStyles();
  const { redirect } = useParams();
  let fieldAttributes = {
    email: { label: "Username", fieldName: "email", fieldType: "email", required: true, errorFlag: false },
    password: { label: "Password", fieldName: "password", fieldType: "password", required: true, errorFlag: false }
  };

  const [data, setData] = useState<UserData>({ email: '', password: '' } as UserData);
  const getChildChange = useCallback((updatedData: any) => {
    setData(updatedData);
  }, []);
  
  const handleSubmit = (event: any) => {
    if (event.currentTarget.form.reportValidity()) {
      fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("session", "active");
          dispatch(SetSession(response as UserSession));
          history.push(redirect ? redirect : "/dashboard");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <FormTitle title="Login" />
      <form className={classes.form} autoComplete="new-off" >
        <FormControlwithInput fieldAttributes={fieldAttributes.email} data={data} getChildChange={getChildChange} />
        <FormControlwithInput fieldAttributes={fieldAttributes.password} data={data} getChildChange={getChildChange} />
        <ForgotPassword />
        <br />
        <Button className={classes.loginButton} onClick={handleSubmit}>Login</Button>
      </form>
      <Registrations />
    </>
  );
}
