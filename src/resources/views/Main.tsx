import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import UsageMeterComponent from "../components/Main/UsageMeterComponent";
import UsageDetails from "../components/Main/UsageDetails";
import EnergyUseProvider from "../../providers/EnergyUseProvider";

function Main() {
  const [usage, setUsage] = React.useState<number>(0);
  const [totalUsage, setTotalUsage] = React.useState<number>(0);

  React.useEffect(() => {
    setUsage(EnergyUseProvider.usage);
    setTotalUsage(EnergyUseProvider.totalUsage);
  }, []);

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
          <Grid item xs={4}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <UsageMeterComponent
                value={usage}
                usage={usage}
                totalusage={totalUsage}
              />
            </CardContent>
          </Grid>

          <Grid item xs={6}>
            <CardContent
              sx={{
                height: '100%',
              }}
            >
              <UsageDetails
                usage={usage}
                totalusage={totalUsage}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Main;
