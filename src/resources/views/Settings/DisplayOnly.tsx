import React from "react";
import { Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import EnergyUseContext from "../../../contexts/EnergyUseContext";

interface SettingsDisplayOnlyProps {
  setIsEditing: (isEditing: boolean) => void;
}

function SettingsDisplayOnly({ setIsEditing }: SettingsDisplayOnlyProps) {
  const { totalConsumptionRange } = React.useContext(EnergyUseContext);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Grid
      container
      spacing={2}
      flexDirection="column"
    >
      <Grid item>
        <TableContainer
          component={Paper}
        >
          <Table size="small">
            <TableHead
              sx={{
                backgroundColor: (theme) => theme.palette.grey[300],
              }}
            >
              <TableRow>
                <TableCell>Setting</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Total Consumption Range</TableCell>
                <TableCell>{ totalConsumptionRange } kWh</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid
        item
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  )
}

export default SettingsDisplayOnly;
