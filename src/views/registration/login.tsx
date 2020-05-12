import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Centered } from "components/styled";
import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography ,Container, Button, makeStyles, Avatar ,CssBaseline ,TextField ,FormControlLabel ,Checkbox ,Link ,Grid   } from "@material-ui/core";




interface UserData {
  email: string;
  password: string;
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
        localStorage.setItem("session", "active");
        dispatch(SetSession(response as UserSession));
        history.push(redirect ? redirect : "/dashboard");
      })
      .catch((error) => console.log(error));
  };

  // Todo build
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/register" variant="body2">
              {"Don't have an account? Register"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
   
  </Container>
  );
}
