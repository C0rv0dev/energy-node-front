import React from "react";
import { Grid, Button } from "@mui/material";
import EnergyUseContext from "../../../../contexts/EnergyUseContext";

// icons 
import SaveIcon from "@mui/icons-material/Save";

// components
import InputComponent from "../../../components/InputComponent";

interface SettingsEditFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  setIsEditing: (isEditing: boolean) => void;
}

function SettingsEditForm({ formRef, setIsEditing }: SettingsEditFormProps) {
  const { appSettings, updateSettings, isLoading } = React.useContext(EnergyUseContext);

  const handleSave = async () => {
    const formData = new FormData(formRef.current as HTMLFormElement);
    const totalConsumptionRange = Number(formData.get("totalConsumptionRange"));
    const pricePerKwh = Number(formData.get("pricePerKwh"));

    const settings = {
      totalConsumptionRange,
      pricePerKwh,
    };

    // update settings
    updateSettings(settings);
    setIsEditing(false);
  }

  return (
    <Grid
      container
      spacing={2}
      flexDirection="column"
    >
      <Grid
        item
        xs={12}
      >
        {/* prevent default */}
        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          <Grid
            container
            spacing={2}
            flexDirection="column"
          >
            <Grid item>
              <InputComponent
                id="totalConsumptionRange"
                label="Total Consumption Range"
                name="totalConsumptionRange"
                fullWidth
                type="number"
                defaultValue={appSettings.totalConsumptionRange}
                endAdorment="kWh"
              />
            </Grid>

            <Grid item>
              <InputComponent
                id="pricePerKwh"
                label="Price per kWh"
                name="pricePerKwh"
                fullWidth
                type="number"
                defaultValue={appSettings.pricePerKwh}
                endAdorment="¥"
              />
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid
        item
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleSave}
          endIcon={<SaveIcon />}
          disabled={isLoading}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  )
}

export default SettingsEditForm;
