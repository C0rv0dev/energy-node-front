import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import CircularProgressWithBackground from '../CircularProgressWithBackground';
import EnergyUseProvider from '../../../providers/EnergyUseProvider';

interface UsageMeterProps extends CircularProgressProps {
  value: number;
  usage?: number;
  totalUsage?: number;
}

function UsageMeterComponentNoUse(props: UsageMeterProps) {

  React.useEffect(() => {
    EnergyUseProvider.setTotalUsage();
    EnergyUseProvider.setUsage();
  }, [])

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
          isDeterminate
          style={{
            width: '150px',
            height: '150px',
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
              <span>{props.usage}kWh</span>
            ) : (
              <span>0kWh</span>
            )}

            <Divider />

            {props?.totalUsage ? (
              <span>{props.totalUsage}kWh</span>
            ) : (
              <span>0kWh</span>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function UsageMeterComponent() {
  const usage = EnergyUseProvider.usage;
  const totalUsage = EnergyUseProvider.totalUsage;

  return (
    <UsageMeterComponentNoUse
      value={usage}
      usage={usage}
      totalUsage={totalUsage}
    />
  )
}

export default UsageMeterComponent;
