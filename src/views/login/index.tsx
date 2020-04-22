import React, { useState } from "react";
import { Email, Lock } from "components/icons";
import styled from "styled-components";
import {
  Card as Cardbow,
  Button,
  Input as Inputbow,
} from "react-rainbow-components";
import { Link, useHistory, useParams } from "react-router-dom";

export const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = styled(Cardbow)`
  width: 500px;
  padding: 20px;
  text-align: center;
  flex-wrap: wrap;
`;

export const Input = styled(Inputbow)`
  margin: 20px;
`;

export const CustomLink = styled(Link)`
  color: #01b6f5;
  text-decoration: none;
`;

interface UserData {
  email: string;
  password: string;
}

interface UserResponse {
  email: string;
  name: string;
  token: string;
}

export default function Login() {
  const history = useHistory();
  const { redirect } = useParams();

  const [data, setData] = useState<UserData>({} as UserData);

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        const res = response as UserResponse;
        console.log(res, response);
        localStorage.setItem("name", res.name);
        localStorage.setItem("email", res.email);

        history.push(redirect ? redirect : "/dashboard");
      });
  };

  return (
    <Centered>
      <Card className='rainbow-p-top_large'>
        <form noValidate onSubmit={submitData}>
          <div className='react-rainbow-admin-forms_header'>
            <img
              src='/assets/images/profit_logo.png'
              alt='rainbow logo'
              className='react-rainbow-admin-forms_logo'
            />
            <h1>Sign in</h1>
            <div className='rainbow-flex rainbow-align_center'>
              Don’t have an account?{" "}
              <CustomLink to='/auth/register'>Create Account</CustomLink>
            </div>
          </div>
          <article className='rainbow-rainbow-forms_inputs-container'>
            <Input
              className='rainbow-m-top_small'
              icon={<Email />}
              placeholder='Enter your email'
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
              className='rainbow-m-top_small'
              icon={<Lock />}
              placeholder='Enter your password'
              type='password'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button
              className='rainbow-m-top_medium'
              type='submit'
              variant='brand'
            >
              <span>Login</span>
            </Button>
          </article>
        </form>
      </Card>
    </Centered>
  );
}
