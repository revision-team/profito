import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import { Typography, FormControl, Button } from "@material-ui/core";

import { IconInput } from "components/session/Inputs";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

import { useStyles } from "./login";

interface UserData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export default function Register() {
  const history = useHistory();
  const classes = useStyles();

  const [data, setData] = useState<UserData>({} as UserData);

  const handleSubmit = () => {
    fetch(`/api/register`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      history.push("/auth/login");
    });
  };

  return (
    <React.Fragment>
      <Typography variant='h4'>Register</Typography>

      <FormControl className={classes.inputs}>
        <IconInput
          label='Username'
          placeholder='Type your username'
          id='username-input'
          value={data.name}
          onChange={(s) => setData({ ...data, name: s })}
        >
          <PersonIcon />
        </IconInput>
        <IconInput
          label='Email'
          placeholder='Type your email address'
          id='email-input'
          value={data.email}
          onChange={(s) => setData({ ...data, email: s })}
        >
          <EmailIcon />
        </IconInput>
        <IconInput
          label='Password'
          placeholder='Type your password'
          id='password-input'
          type='password'
          value={data.password}
          onChange={(s) => setData({ ...data, password: s })}
        >
          <LockIcon />
        </IconInput>
        <IconInput
          label='Repeat Password'
          placeholder='Type your password again'
          id='password-confirm-input'
          type='password'
          value={data.password_confirm}
          onChange={(s) => setData({ ...data, password_confirm: s })}
        >
          <LockIcon />
        </IconInput>

        <Link to='/auth/login' className={classes.inputs}>
          <Typography variant='subtitle2'>
            Already have an account? Login
          </Typography>
        </Link>

        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </FormControl>
    </React.Fragment>
  );
}
