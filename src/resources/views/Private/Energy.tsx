import React from 'react';
import CardComponent from '../../components/CardComponent';
import { Box, Button, Divider, Grid } from '@mui/material';
import InputComponent from '../../components/InputComponent';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function Energy() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleAddEnergyRecord = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        <CardComponent
          hasHeader
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
          hasHeader
          headerTitle="Records"
          headerBackgroundColor={(theme) => theme.palette.grey[500]}
          headerFontColor="white"
          headerAlign="right"
        >
          Previous records will be shown here
        </CardComponent>
      </Grid>
    </Grid>
  );
}

export default Energy;
