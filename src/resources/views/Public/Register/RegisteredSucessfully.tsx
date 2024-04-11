import React from "react";
import AuthenticationCardComponent from "../../../components/Login/AuthenticationCardComponent";
import { Button, Grid, Typography } from "@mui/material";
import RouteList from "../../../../routing/Routes";
import { useNavigate } from "react-router-dom";

function RegisteredSucessfully() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={6}
      >
        <AuthenticationCardComponent headerTitle="Registered Sucessfully">
          <Grid
            container
            spacing={2}
            flexDirection="column"
          >
            <Grid item>
              <Typography
                variant="body1"
                textAlign="center"
                gutterBottom
                fontSize="1.3rem"
              >
                You have successfully registered.
                <br />
                Please, click on button below to return to login screen.
              </Typography>
            </Grid>

            <Grid
              item
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(RouteList.PublicRoutes.Login)}
                size="large"
              >
                Return to Login
              </Button>
            </Grid>
          </Grid>
        </AuthenticationCardComponent>
      </Grid>
    </Grid>
  )
}

export default RegisteredSucessfully;
