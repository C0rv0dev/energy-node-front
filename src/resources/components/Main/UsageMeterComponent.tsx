import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import CircularProgressWithBackground from '../CircularProgressWithBackground';

interface UsageMeterProps extends CircularProgressProps {
  value: number;
  usage?: number;
  totalusage?: number;
}

function UsageMeterComponentNoUse(props: UsageMeterProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex'
        }}
      >
        <CircularProgressWithBackground
          isdeterminate="true"
          style={{
            width: '300px',
            height: '300px',
          }}
          {...props}
        />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {props?.usage ? (
              <Typography
                fontSize={24}
              >
                {props.usage}kWh
              </Typography>
            ) : (
              <Typography
                fontSize={24}
              >
                0kWh
              </Typography>
            )}

            <Divider />

            {props?.totalusage ? (
              <Typography
                fontSize={24}
              >
                {props.totalusage}kWh
              </Typography>
            ) : (
              <Typography
                fontSize={24}
              >
                0kWh
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function UsageMeterComponent({ usage, totalusage }: UsageMeterProps) {
  return (
    <UsageMeterComponentNoUse
      value={usage ?? 0}
      usage={usage}
      totalusage={totalusage}
    />
  )
}

export default UsageMeterComponent;
