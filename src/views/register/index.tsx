import React, { useState } from "react";

import { Email, Lock, User } from "components/icons";
import { Button } from "react-rainbow-components";
import { Centered, Card, CustomLink, Input } from "components/custom";
import { useHistory } from "react-router-dom";

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
            <h1>Create Account</h1>
            <div className='rainbow-flex rainbow-align_center'>
              Already have an account?{" "}
              <CustomLink to='/auth/login'>Login instead</CustomLink>
            </div>
          </div>
          <article className='rainbow-rainbow-forms_inputs-container'>
            <Input
              className='rainbow-m-top_small'
              icon={<User />}
              placeholder='Enter your full name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
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
            <Input
              className='rainbow-m-top_small'
              icon={<Lock />}
              placeholder='Re-type your password'
              type='password'
              value={data.password_confirm}
              onChange={(e) =>
                setData({ ...data, password_confirm: e.target.value })
              }
            />
          </article>
          <Button
            className='rainbow-m-top_medium'
            type='submit'
            variant='brand'
          >
            <span>Register</span>
          </Button>
        </form>
      </Card>
    </Centered>
  );
}
