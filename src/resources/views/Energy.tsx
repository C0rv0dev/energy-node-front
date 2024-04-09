import React from 'react';
import CardComponent from '../components/CardComponent';
import { Grid } from '@mui/material';

function Energy() {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        <CardComponent
          hasHeader
          headerTitle="Energy"
          headerBackgroundColor={(theme) => theme.palette.warning.light}
          headerFontColor="white"
          headerAlign="right"
        >
          Add energy info here
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
