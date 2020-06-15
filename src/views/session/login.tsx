import React, { useState, useContext } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Typography,
  FormControl,
  IconButton,
} from "@material-ui/core";
import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";

import { IconInput } from "components/session/Inputs";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

interface UserData {
  email: string;
  password: string;
}

export const useStyles = makeStyles((theme) => ({
  inputs: {
    marginTop: theme.spacing(4),
  },
  forgot: {
    textAlign: "right",
  },
  submit: {
    marginTop: theme.spacing(4),
  },
  signup: {
    marginTop: theme.spacing(8),
  },
  signupLink: {
    marginTop: theme.spacing(8),
  },
}));

export default function Login() {
  const { dispatch } = useContext(Store);

  const history = useHistory();
  const classes = useStyles();

  const { redirect } = useParams();

  const [data, setData] = useState<UserData>({} as UserData);

  const handleSubmit = () => {
    fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        localStorage.setItem("session", "active");
        // dispatch(SetSession(response as UserSession));
        history.push(redirect ? redirect : "/app/dashboard");
      })
      .catch((error) => console.log(error));
  };

  // Todo build
  return (
    <React.Fragment>
      <Typography variant='h4'>Login</Typography>

      <FormControl className={classes.inputs}>
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
        <div className={classes.forgot}>
          <Link to='/auth/forgot'>
            <Typography variant='subtitle2'>Forgot password?</Typography>
          </Link>
        </div>
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >
          Login
        </Button>

        <div className={classes.signup}>
          <Typography variant='subtitle1'>Or Sign Up Using</Typography>
          <IconButton size='medium' color='primary'>
            <FacebookIcon />
          </IconButton>
          <IconButton size='medium' color='primary'>
            <TwitterIcon />
          </IconButton>
          <IconButton size='medium' color='primary'>
            <PinterestIcon />
          </IconButton>
        </div>

        <div className={classes.signupLink}>
          <Typography variant='subtitle1'>Or Sign Up Using</Typography>
          <Link to='/session/register'>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </FormControl>
    </React.Fragment>
  );
}
