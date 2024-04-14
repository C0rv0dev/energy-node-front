import React from 'react';
import CardComponent from '../../components/CardComponent';
import { Box, Button, Divider, FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, Typography } from '@mui/material';
import InputComponent from '../../components/InputComponent';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import EnergyUseContext from '../../../contexts/EnergyUseContext';
import { CreateEnergyRecord } from '../../../interfaces/EnergyUse';
import SettingsContext from '../../../contexts/SettingsContext';

function Energy() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const { appSettings } = React.useContext(SettingsContext);
  const { recordsCollection, uniqueDates, filterRecords, createEnergyRecord, clearRecords } = React.useContext(EnergyUseContext);
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

    await createEnergyRecord(data, selectedDate);
  };

  const handleDateChange = (event: SelectChangeEvent<typeof selectedDate>) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterRecords(date);
  }

  const handleClearRecords = async () => {
    clearRecords();
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
      <FormControl>
        <Select
          open={open}
          value={selectedDate}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleDateChange}
          sx={{
            color: 'white',
            '& .MuiSelect-icon': {
              color: 'white',
            },
            border: '1px solid white',
          }}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: (theme: Theme) => theme.palette.primary.main,
                  color: 'white',
                }
              }              
            }
          }}
        >
          <MenuItem
            value="none"
            disabled
          >
            <Typography color="white">Select Date</Typography>
          </MenuItem>

          <MenuItem
            value="all"
          >
            Show All
          </MenuItem>

          {uniqueDates.map((date, index) => (
            <MenuItem
              key={index}
              value={date.parseToMonth()}
            >
              {date.parseToReadable()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
          headerAlign="left"
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
          headerBackgroundColor={(theme) => theme.palette.primary.dark}
          headerFontColor="white"
          headerAlign="left"
          headerActions={
            <>
              {selectOptions()}

              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: (theme) => theme.palette.error.main,
                }}
                onClick={handleClearRecords}
              >
                <Typography
                  color="white"
                >
                  Clear
                </Typography>
              </Button>
            </>
          }
        >
          {recordsCollection.map((recordCollection, index) => (
            <>
              <Divider
                sx={{
                  marginBottom: 1,
                }}
              >
                {recordCollection.year}
              </Divider>

              <TableContainer
                component={Paper}
                key={recordCollection.year + index}
                sx={{
                  marginBottom: 2,
                }}
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
                    {recordCollection.records.map((record, index) => (
                      <TableRow key={record._id}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.meter_reading}</TableCell>
                        <TableCell>{record.price_on_the_day} ¥</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ))}
        </CardComponent>
      </Grid>
    </Grid>
  );
}

export default Energy;
