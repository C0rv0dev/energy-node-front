import React from "react";
import EnergyUseContext from "../../../../contexts/EnergyUseContext";
import { Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

// icons
import EditIcon from "@mui/icons-material/Edit";

interface SettingsDisplayOnlyProps {
  setIsEditing: (isEditing: boolean) => void;
}

function SettingsDisplayOnly({ setIsEditing }: SettingsDisplayOnlyProps) {
  const { appSettings } = React.useContext(EnergyUseContext);

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
                <TableCell>{appSettings.totalConsumptionRange} kWh</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price per kWh</TableCell>
                <TableCell>{appSettings.pricePerKwh} ¥</TableCell>
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
          color="warning"
          onClick={handleEdit}
          endIcon={<EditIcon />}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  )
}

export default SettingsDisplayOnly;
