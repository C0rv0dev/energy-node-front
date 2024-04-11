import { Alert, Button, Grid, Snackbar } from '@mui/material';
import React, { useContext } from 'react';
import AuthenticationCardComponent from '../../components/Login/AuthenticationCardComponent';
import config from '../../../config/config';
import InputComponent from '../../components/InputComponent';
import RouteList from '../../../routing/Routes';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../../interfaces/User';
import UserContext from '../../../contexts/UserContext';

function Login() {
  const navigate = useNavigate();
  const formRef = React.useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const { loginUser } = useContext(UserContext);

  const handleLogin = async () => {
    setIsLoading(true);

    const form = formRef.current as HTMLFormElement;
    const formData = new FormData(form);

    const data: LoginUser = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    await loginUser(data)
      .then(() => {
        navigate(RouteList.PrivateRoutes.Home);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      {errorMessage && (
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          onClose={() => setErrorMessage("")}
        >
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      )}

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
              <form ref={formRef}>
                <Grid
                  container
                  flexDirection="column"
                  spacing={1}
                >
                  <Grid item>
                    <InputComponent
                      type="email"
                      name="email"
                      placeholder='email@email.com'
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <InputComponent
                      fullWidth
                      isPassword
                      name="password"
                      placeholder="password"
                    />
                  </Grid>
                </Grid>
              </form>
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
                    onClick={handleLogin}
                    disabled={isLoading}
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
                    type="button"
                    onClick={() => navigate(RouteList.PublicRoutes.Register)}
                  >
                    Register
                  </Button>
                </Grid>
                {/* <Grid item>
                    <Button
                      variant="text"
                      sx={{ width: '100%' }}
                      type="button"
                    >
                      Forgot password?
                    </Button>
                  </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </AuthenticationCardComponent>
      </Grid>
    </Grid>
  );
}

export default Login;
