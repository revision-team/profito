import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Centered } from "components/styled";
import { Paper, Input, Button, makeStyles } from "@material-ui/core";
import { UserSession } from "models/users";
import { Store } from "store";
import { SetSession } from "store/actions";

interface UserData {
  email: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
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
        history.push(redirect ? redirect : "/app/dashboard");
      })
      .catch((error) => console.log(error));
  };

  // Todo build
  return (
    <Centered>
      <Paper className={classes.paper}>
        <Input
          type='email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br />
        <Input
          type='password'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button onClick={handleSubmit}>Login</Button>
      </Paper>
    </Centered>
  );
}
