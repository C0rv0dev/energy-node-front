import React from "react";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../../interfaces/User";
import UserContext from "../../../../contexts/UserContext";

// components 
import AuthenticationCardComponent from "../../../components/Login/AuthenticationCardComponent";
import InputComponent from "../../../components/InputComponent";
import RegisteredSucessfully from "./RegisteredSucessfully";

function Register() {
  const navigate = useNavigate();
  const formRef = React.useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [registeredSucessfully, setRegisteredSucessfully] = React.useState<boolean>(false);

  const { registerUser } = React.useContext(UserContext);

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    const form = formRef.current as HTMLFormElement;

    const formData: RegisterUser = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      password: form.password.value,
      passwordConfirm: form.passwordConfirm.value,
    };

    await registerUser(formData)
      .then(() => {
        setRegisteredSucessfully(true);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCancel = () => {
    formRef.current?.reset();
    navigate(-1);
  };

  // render
  if (registeredSucessfully) {
    return (
      <RegisteredSucessfully />
    );
  }

  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <AuthenticationCardComponent headerTitle="Register">
          <form ref={formRef}>
            <Grid
              container
              spacing={2}
              flexDirection="column"
            >
              <Grid item>
                <Grid
                  container
                  spacing={1}
                >
                  <Grid item xs={6}>
                    <InputComponent
                      id="first-name-input"
                      name="firstName"
                      fullWidth
                      placeholder="First Name"
                      type="text"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <InputComponent
                      id="last-name-input"
                      name="lastName"
                      fullWidth
                      placeholder="Last Name"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <InputComponent
                  id="email-input"
                  name="email"
                  fullWidth
                  placeholder="email@email.com"
                  type="email"
                />
              </Grid>

              <Grid item>
                <InputComponent
                  id="password-input"
                  name="password"
                  fullWidth
                  placeholder="password"
                  isPassword
                />
              </Grid>

              <Grid item>
                <InputComponent
                  id="password-confirm-input"
                  name="passwordConfirm"
                  fullWidth
                  placeholder="confirm your password"
                  isPassword
                />
              </Grid>

              {errorMessage && (
                <Snackbar
                  open={!!errorMessage}
                  autoHideDuration={4000}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  onClose={() => setErrorMessage("")}
                >
                  <Alert
                    severity="error"
                  >
                    {errorMessage}
                  </Alert>
                </Snackbar>
              )}

              <Grid
                item
                marginTop={2}
              >
                <Grid
                  container
                  justifyContent="space-around"
                  alignContent="center"
                >
                  <Grid item>
                    <Button
                      size="large"
                      variant="outlined"
                      onClick={handleCancel}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={handleRegister}
                      disabled={isLoading}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </AuthenticationCardComponent>
      </Grid>
    </Grid>
  );
}

export default Register;
