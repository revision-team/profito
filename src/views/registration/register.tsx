import React, { useState, useContext, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
//import { UserSession } from "models/users";
//import { Store } from "store";
//import { SetSession } from "store/actions";
import {
  FormTitle, LoginLink, FormControlwithInput
} from "../../components/login/logincomponents";
import { loginStyles } from '../../components/login/styles';

interface UserData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}


export default function Login() {
  //const { dispatch } = useContext(Store);

  const history = useHistory();
    const { redirect } = useParams();
  const loginButtonStyle = loginStyles().loginButton;

  let fieldAttributes = {
    name: { label: "Name", fieldName: "name", fieldType: "text", required: true, errorFlag: false },
    email: { label: "Username", fieldName: "email", fieldType: "email", required: true, errorFlag: false },
    password: { label: "Password", fieldName: "password", fieldType: "password", required: true, errorFlag: false },
    password_confirm: { label: "Confirm Password", fieldName: "password_confirm", fieldType: "password", required: true, errorFlag: false }
  };
  const [data, setData] = useState<UserData>({ name: '', email: '', password: '', password_confirm: '' } as UserData);
  const getChildChange = useCallback((updatedData: any) => {
    setData(updatedData);
  }, []);

  const submitData = (event: any) => {
    if (event.currentTarget.form.reportValidity()) {
      event.preventDefault();
      fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(data),
      }).then(() => {
        history.push("/auth/login");
      });
    }
  };

  return (
    <>
      <FormTitle title="Register" />
      <form>
        <FormControlwithInput fieldAttributes={fieldAttributes.name} data={data} getChildChange={getChildChange} />
        <FormControlwithInput fieldAttributes={fieldAttributes.email} data={data} getChildChange={getChildChange} />
        <FormControlwithInput fieldAttributes={fieldAttributes.password} data={data} getChildChange={getChildChange} />
        <FormControlwithInput fieldAttributes={fieldAttributes.password_confirm} data={data} getChildChange={getChildChange} />
        <Button className={loginButtonStyle} onClick={submitData}>Register</Button>
      </form>
      <LoginLink />
    </>
  );
}
