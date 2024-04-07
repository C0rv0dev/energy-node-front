import React from "react";
import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import UsageMeterComponent from "../components/Main/UsageMeterComponent";
import UsageDetails from "../components/Main/UsageDetails";

function Main() {
  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title="Monthly Usage Avg. (kWh)"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: 'white',
          }}
        />

        <Grid
          container
          spacing={1}
          justifyContent="space-between"
        >
          <Grid item xs={5.5}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <UsageMeterComponent />
            </CardContent>
          </Grid>

          <Grid item>
            <Divider
              orientation="vertical"
            />
          </Grid>

          <Grid item xs={5.5}>
            <CardContent>
              <UsageDetails />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Main;
