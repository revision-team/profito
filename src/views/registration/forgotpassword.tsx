import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Input, Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Lock from '@material-ui/icons/Lock';

//import { Store } from "store";
import { loginStyles } from './styles';

interface UserData {
  email: string;
}

export default function Login() {
  //const { dispatch } = useContext(Store);

  const history = useHistory();
  const classes = loginStyles();

  const { redirect } = useParams();

  const [data, setData] = useState<UserData>({ email: '' } as UserData);

  const handleSubmit = () => {
    fetch(`/auth/restore/:token`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        //localStorage.setItem("session", "active");
        //dispatch(SetSession(response as UserSession));
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
              Forgot Password?
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>

        <Typography align="center">
          Recover your password: Enter your email below:
        </Typography>


          <FormControl className={classes.formcontrol}>
            <Input
              className={classes.textField}
              fullWidth={true}
              required
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <Lock color="disabled" style={{ backgroundColor: 'transparent' }} />
                </InputAdornment>
              }
            />
          </FormControl>




          <Button className={classes.loginButton} onClick={handleSubmit}>Restore My Password</Button>

        </CardContent>

      </Card>

    </>
  );
}
