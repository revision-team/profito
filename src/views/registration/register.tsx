import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, Container, Button, makeStyles, Avatar, CssBaseline, TextField, Link } from "@material-ui/core";

interface UserData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  const history = useHistory();
  const classes = useStyles();

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
      </Typography>
        <Link href="/auth/login" variant="body2">
          {"Already have an account? Login"}
        </Link>

        <form className={classes.form} noValidate onSubmit={submitData}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter your full name"
            name="name"
            autoComplete="name"
            autoFocus
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type='email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password_confirm"
            label="Confirm Password"
            type="password"
            id="password_confirm"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => setData({ ...data, password_confirm: e.target.value })}
          />


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
        </Button>

        </form>
      </div>

    </Container>
  );
}
