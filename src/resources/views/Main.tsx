import React from "react";
import { Grid } from "@mui/material";
import UsageMeterComponent from "../components/Main/UsageMeterComponent";
import UsageDetails from "../components/Main/UsageDetails";
import EnergyUseProvider from "../../providers/EnergyUseProvider";
import CardComponent from "../components/CardComponent";

function Main() {
  const [usage, setUsage] = React.useState<number>(0);
  const [totalUsage, setTotalUsage] = React.useState<number>(0);

  // use a timer to call backend API every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      EnergyUseProvider.getEnergyUse()
        .then(() => {
          setUsage(EnergyUseProvider.usage);
          setTotalUsage(EnergyUseProvider.totalConsumptionRange);
        });
    }, (10 * 1000));

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CardComponent
        hasHeader
        headerTitle="Monthly Usage Avg. (kWh)"
        headerBackgroundColor={(theme) => theme.palette.primary.main}
        headerFontColor="white"
      >
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          sx={{
            height: '100%'
          }}
        >
          <Grid item xs={12} md={6}>
            <UsageMeterComponent
              value={usage}
              usage={usage}
              totalusage={totalUsage}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%"
            }}
          >
            <UsageDetails
              usage={usage}
              totalusage={totalUsage}
            />
          </Grid>
        </Grid>
      </CardComponent>
    </>
  );
}

export default Main;
