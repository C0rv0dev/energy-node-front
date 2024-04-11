import { Button, Grid } from '@mui/material';
import React from 'react';
import AuthenticationCardComponent from '../../components/Login/AuthenticationCardComponent';
import config from '../../../config/config';
import InputComponent from '../../components/InputComponent';
import RouteList from '../../../routing/Routes';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <AuthenticationCardComponent
          headerTitle={config.app_name}
        >
          <Grid
            container
            spacing={1}
            flexDirection="column"
            padding={2}
          >
            <Grid item>
              <InputComponent
                type="email"
                placeholder='email@email.com'
                fullWidth
              />
            </Grid>

            <Grid item>
              <InputComponent
                fullWidth
                isPassword
                placeholder='password'
              />
            </Grid>

            <Grid item>
              <Grid
                container
                flexDirection="column"
                spacing={1}
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  sx={{
                    width: '100%',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: '100%',
                      backgroundColor: '#28a745',
                      '&:hover': {
                        backgroundColor: '#218838',
                      },
                      color: 'white',
                    }}
                  >
                    Log in
                  </Button>
                </Grid>

                <Grid
                  item
                  sx={{ width: '100%' }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: '100%' }}
                    onClick={() => navigate(RouteList.PublicRoutes.Register)}
                  >
                    Register
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    variant="text"
                    sx={{ width: '100%' }}
                  >
                    Forgot password?
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AuthenticationCardComponent>
      </Grid>
    </Grid>
  );
}

export default Login;
