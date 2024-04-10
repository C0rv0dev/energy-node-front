import { Grid } from '@mui/material';
import React from 'react';
import LoginCardComponent from '../../components/Login/LoginCardComponent';

function Login() {
  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <LoginCardComponent />
      </Grid>
    </Grid>
  );
}

export default Login;
