import React from 'react';
import CardComponent from '../../components/CardComponent';
import { Box, Button, Divider, Grid, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import InputComponent from '../../components/InputComponent';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import EnergyUseContext from '../../../contexts/EnergyUseContext';
import { CreateEnergyRecord } from '../../../interfaces/EnergyUse';
import SettingsContext from '../../../contexts/SettingsContext';

function Energy() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const { appSettings } = React.useContext(SettingsContext);
  const { records, uniqueDates, filterRecords, createEnergyRecord } = React.useContext(EnergyUseContext);

  const [selectedDate, setSelectedDate] = React.useState<string>('none');

  const handleAddEnergyRecord = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current as HTMLFormElement);

    // get the form data
    const meter_reading = Number(formData.get('energyUse'));
    const date = String(formData.get('energyDate'));
    const pricePerKwh = appSettings.pricePerKwh;

    const data: CreateEnergyRecord = {
      meter_reading,
      date,
      price_per_kwh: pricePerKwh,
    }

    await createEnergyRecord(data);
  };

  const handleDateChange = (event: SelectChangeEvent<typeof selectedDate>) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterRecords(date);
  }

  const handleClearRecords = () => {
    console.log('clearing records');
  };

  // render
  const selectOptions = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <Select
        open={open}
        value={selectedDate}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleDateChange}
      >
        <MenuItem
          value="none"
          disabled
        >
          Select Date
        </MenuItem>

        <MenuItem
          value="all"
        >
          Show All
        </MenuItem>

        {uniqueDates.map((date, index) => (
          <MenuItem key={index} value={date}>{date}</MenuItem>
        ))}
      </Select>
    )
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        <CardComponent
          headerTitle="Residential Energy Use"
          headerBackgroundColor={(theme) => theme.palette.warning.light}
          headerFontColor="white"
          headerAlign="right"
        >
          <form ref={formRef}>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Box
                display="flex"
                flexDirection="row"
                gap={2}
              >
                <DatePicker
                  name="energyDate"
                  label="Date"
                  defaultValue={dayjs(new Date())}
                  sx={{ width: '100%' }}
                />

                <InputComponent
                  placeholder="Energy Use| 0000000 kWh"
                  fullWidth
                  type="number"
                  name="energyUse"
                  label="Energy Use"
                  defaultValue={0}
                />
              </Box>

              <Divider />

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                gap={2}
              >
                <p>
                  Register your energy use here based on your meter readings.
                </p>
              </Box>

              <Divider />

              <Box
                display="flex"
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={handleAddEnergyRecord}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </form>
        </CardComponent>
      </Grid>

      <Grid item>
        <CardComponent
          headerTitle="Records"
          headerBackgroundColor={(theme) => theme.palette.grey[500]}
          headerFontColor="white"
          headerAlign="space-between"
          headerActions={
            <>
              <Button
                variant="outlined"
                size="small"
                onClick={handleClearRecords}
              >
                <Typography
                  variant="button"
                  color="white"
                >
                  Clear
                </Typography>
              </Button>

              {selectOptions()}
            </>
          }
        >
          <TableContainer
            component={Paper}
          >
            <Table>
              <TableHead
                sx={{
                  backgroundColor: (theme) => theme.palette.grey[200],
                }}
              >
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Meter Reading</TableCell>
                  <TableCell>Price on the day</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={record._id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.meter_reading}</TableCell>
                    <TableCell>{record.price_on_the_day} ¥</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardComponent>
      </Grid>
    </Grid>
  );
}

export default Energy;
