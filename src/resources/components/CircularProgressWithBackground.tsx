import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularProgressWithBackgroundProps {
  isdeterminate?: string;
}

function CircularProgressWithBackground(props: CircularProgressWithBackgroundProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />

      <CircularProgress
        variant={props.isdeterminate ? 'determinate' : 'indeterminate'}
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default CircularProgressWithBackground;
