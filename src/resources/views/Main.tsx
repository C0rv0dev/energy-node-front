import React from "react";
import { Grid } from "@mui/material";
import UsageMeterComponent from "../components/Main/UsageMeterComponent";
import UsageDetails from "../components/Main/UsageDetails";
import CardComponent from "../components/CardComponent";
import EnergyUseContext from "../../contexts/EnergyUseContext";

function Main() {
  const { usage, totalConsumptionRange } = React.useContext(EnergyUseContext);

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
              totalconsumptionrange={totalConsumptionRange}
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
              totalconsumptionrange={totalConsumptionRange}
            />
          </Grid>
        </Grid>
      </CardComponent>
    </>
  );
}

export default Main;
