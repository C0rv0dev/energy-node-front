import { Box, Card, CardHeader, Divider } from '@mui/material';
import React from 'react';

interface UsageDetailsProps {
  usage?: number;
  totalusage?: number;
}

interface UsageDetailsRowProps {
  label: string;
  value: string;
}

function UsageDetails({ usage, totalusage }: UsageDetailsProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        height: '100%',
      }}
    >
      <CardHeader
        title="Usage Details"
        sx={{
          backgroundColor: (theme) => theme.palette.warning.light,
          color: 'white',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          padding: '10px',
        }}
      >
        <UsageDetailsRow
          label="Usage"
          value={usage ? `${usage} kWh` : 'N/A'}
        />

        <UsageDetailsRow
          label="Total Usage"
          value={totalusage ? `${totalusage} kWh` : 'N/A'}
        />

        <UsageDetailsRow
          label="Remaining Usage"
          value={usage && totalusage ? `${totalusage - usage} kWh` : `${totalusage} kWh`}
        />

        <Divider 
          sx={{
            marginTop: '10px',
            marginBottom: '10px',
            strokeWidth: '10px',
          }}
          textAlign="right"
        >
          Fees
        </Divider>

        <UsageDetailsRow
          label="Estimated Cost"
          value={usage ? `$${(usage * 0.12).toFixed(2)}` : 'N/A'}
        />
      </Box>
    </Card>
  );
}

function UsageDetailsRow({ label, value }: UsageDetailsRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
      }}
    >
      <strong>{`${label}: `}</strong>
      <span style={{
        marginLeft: '10px',
      }}>
        {value}
      </span>
    </Box>
  );
}

export default UsageDetails;
