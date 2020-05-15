import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GoogleIcon, FacebookIcon, LinkedinIcon } from "components/icons";
import { Input, Button, Link } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import Lock from '@material-ui/icons/Lock';

import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";
import { loginStyles } from './styles';

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const { dispatch } = useContext(Store);

  const history = useHistory();
  const classes = loginStyles();

  const { redirect } = useParams();

  const [data, setData] = useState<UserData>({ email: '', password: '' } as UserData);

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

  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
          title={
            <Typography gutterBottom variant="h1" component="h1" align="center" className={classes.cardTitle}>
              Login
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>

          <FormControl className={classes.formcontrol}>
            <InputLabel className={classes.inputlabel} color="primary" htmlFor="input-with-icon-adornment">Username:</InputLabel>
            <Input
              className={classes.textField}
              fullWidth={true}
              required
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleOutlined color="disabled" style={{ backgroundColor: 'transparent' }} />
                </InputAdornment>
              }
            />
          </FormControl>


          <FormControl className={classes.formcontrol}>
            <InputLabel className={classes.inputlabel} htmlFor="input-with-icon-adornment">Password:</InputLabel>
            <Input
              required
              fullWidth
              type='password' id="pwdinput" aria-describedby="Enter Password"
              className={classes.textField}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <Lock color="disabled" />
                </InputAdornment>
              }
            />
          </FormControl>
          <Link href="#" style={{ float: 'right' }} >
            Forgot password?
            </Link>

          <br />

          <Button className={classes.loginButton} onClick={handleSubmit}>Login</Button>

          <CardActions classes={{ root: classes.root }}>
            <Grid container spacing={0} className={classes.center}
              direction="column" >
              <Grid item xs={12}  >
                <Typography classes={{ root: classes.root }}>Or Sign Up Using</Typography>
                <IconButton aria-label="add to favorites">
                  <GoogleIcon />
                </IconButton>

                <IconButton aria-label="add to favorites">
                  <GoogleIcon />
                </IconButton>

                <IconButton aria-label="add to favorites">
                  <GoogleIcon />
                </IconButton>
              </Grid>

              <Grid item xs={6}  >
                <Typography classes={{ root: classes.root }}>Or Sign Up Using&nbsp;                <Link href="/auth/register" style={{ display: 'inline' }} >
                    Register
                </Link>
                </Typography>
              </Grid>

            </Grid>
          </CardActions>

        </CardContent>

      </Card>


    </>
  );
}
