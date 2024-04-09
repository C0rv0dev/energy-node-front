import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import CircularProgressWithBackground from '../CircularProgressWithBackground';

interface UsageMeterProps extends CircularProgressProps {
  value: number;
  usage?: number;
  totalconsumptionrange?: number;
}

function UsageMeterComponent({ usage, totalconsumptionrange }: UsageMeterProps) {
  const percentage = ((usage ?? 0) / (totalconsumptionrange ?? 0)) * 100;

  return (
    <UsageMeterComponentNoUse
      value={percentage}
      usage={usage}
      totalconsumptionrange={totalconsumptionrange}
    />
  )
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
            <Typography
              fontSize={24}
              textAlign="center"
            >
              {props?.usage ? (
                <>
                  {props.usage} kWh
                </>
              ) : (
                <>
                  0 kWh
                </>
              )}
            </Typography>

            <Divider />

            <Typography
              fontSize={24}
              textAlign="center"
            >
              {props?.totalconsumptionrange ? (
                <>
                  {props.totalconsumptionrange} kWh
                </>
              ) : (
                <>
                  0 kWh
                </>
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UsageMeterComponent;
