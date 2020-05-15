import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Input, Button, Link } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { loginStyles } from './styles';

interface UserData {
  email: string;
}

export default function Login() {
  
  const history = useHistory();
  const classes = loginStyles();

  const { redirect } = useParams();
 
 

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

        <Typography align="center">
          A reset password email has been sent. Please check your email inbox.
        </Typography>


     
        </CardContent>

      </Card>

    </>
  );
}
