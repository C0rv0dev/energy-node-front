import React from "react";
import { Grid, TextField, InputAdornment, Button } from "@mui/material";
import EnergyUseContext from "../../../contexts/EnergyUseContext";

interface SettingsEditFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  setIsEditing: (isEditing: boolean) => void;
}

function SettingsEditForm({ formRef, setIsEditing }: SettingsEditFormProps) {
  const { totalConsumptionRange, updateTotalConsumptionRange } = React.useContext(EnergyUseContext);

  const handleSave = () => {
    const formData = new FormData(formRef.current as HTMLFormElement);
    const totalConsumptionRange = Number(formData.get("totalConsumptionRange"));
    updateTotalConsumptionRange(totalConsumptionRange);
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
          <TextField
            id="total-consumption-range-input"
            label="Total Consumption Range"
            name="totalConsumptionRange"
            fullWidth
            type="number"
            defaultValue={totalConsumptionRange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  kWh
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
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
        >
          Save
        </Button>
      </Grid>
    </Grid>
  )
}

export default SettingsEditForm;
