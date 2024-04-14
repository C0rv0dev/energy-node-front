import React from "react";
import { Grid } from "@mui/material";
import UsageMeterComponent from "../../components/Main/UsageMeterComponent";
import UsageDetails from "../../components/Main/UsageDetails";
import CardComponent from "../../components/CardComponent";
import EnergyUseContext from "../../../contexts/EnergyUseContext";
import SettingsContext from "../../../contexts/SettingsContext";
import dayjs from "dayjs";

function Main() {
  const { usage } = React.useContext(EnergyUseContext);
  const { appSettings } = React.useContext(SettingsContext);

  return (
    <CardComponent
      headerTitle={`Monthly Usage Avg. (kWh) | ${dayjs().format("MMMM YYYY")}`}
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
            totalconsumptionrange={appSettings.totalConsumptionRange}
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
            totalconsumptionrange={appSettings.totalConsumptionRange}
            estimatedCost={appSettings.estimatedCost}
          />
        </Grid>
      </Grid>
    </CardComponent>
  );
}

export default Main;
