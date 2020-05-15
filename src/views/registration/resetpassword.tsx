import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
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
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import Lock from '@material-ui/icons/Lock';

import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";
import { loginStyles } from './styles';

interface UserData {
  password: string;
  password_confirm: string;
}


export default function Login() {
  const { dispatch } = useContext(Store);

  const history = useHistory();
  const classes = loginStyles();

  const { redirect } = useParams();

  const [data, setData] = useState<UserData>({ password: '', password_confirm: '' } as UserData);

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`/api/resetpwd`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      history.push("/auth/dashboard");
    });
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
          title={
            <Typography gutterBottom variant="h1" component="h1" align="center" className={classes.cardTitle}>
              Reset Password
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>
          <form className={classes.form} noValidate onSubmit={submitData}>
       

            {/* Passsword Form Controls */}
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

            {/* Confirm Passsword Form Controls */}
            <FormControl className={classes.formcontrol}>
              <InputLabel className={classes.inputlabel} htmlFor="input-with-icon-adornment">Confirm Password:</InputLabel>
              <Input
                required
                fullWidth
                type='password' id="pwdinput" aria-describedby="Confirm Password"
                className={classes.textField}
                value={data.password_confirm}
                onChange={(e) => setData({ ...data, password_confirm: e.target.value })}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock color="disabled" />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button className={classes.loginButton} >Reset Password</Button>
          </form> 
        </CardContent>

      </Card>


    </>
  );
}
