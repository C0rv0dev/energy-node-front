import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularProgressWithBackgroundProps {
  value: number;
  isdeterminate?: string;
  totalconsumptionrange?: number;
}

function CircularProgressWithBackground(props: CircularProgressWithBackgroundProps) {
  if (props.value > 100) {

  }

  return (
    <Box sx={{ position: 'relative' }}>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="100%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f50057', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#3f51b5', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <svg width={0} height={0}>
        <defs>
          <linearGradient id="overlaping" x1="100%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'red', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#193A9A', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/*  if value is greater than 100, fill with red */}
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => (props.value > 100 ? 'red' : theme.palette.grey[300]),
          'svg circle': {
            stroke: props.value > 100 ? 'url(#overlaping)' : '',
          },
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />

      <CircularProgress
        variant={props.isdeterminate ? 'determinate' : 'indeterminate'}
        sx={{
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          'svg circle': {
            stroke: 'url(#my_gradient)',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default CircularProgressWithBackground;
