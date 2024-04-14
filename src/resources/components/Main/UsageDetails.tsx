import { Box, Card, CardHeader, Divider } from '@mui/material';
import React from 'react';

interface UsageDetailsProps {
  usage?: number;
  totalconsumptionrange?: number;
  estimatedCost?: number;
}

interface UsageDetailsRowProps {
  label: string;
  value: string;
}

function UsageDetails({ usage, totalconsumptionrange, estimatedCost }: UsageDetailsProps) {
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
          label="Remaining Usage"
          value={usage && totalconsumptionrange ? `${totalconsumptionrange - usage} kWh` : `${totalconsumptionrange} kWh`}
        />

        <UsageDetailsRow
          label="Total Consumption Range"
          value={totalconsumptionrange ? `${totalconsumptionrange} kWh` : 'N/A'}
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
          value={estimatedCost ? `${estimatedCost} ¥` : 'N/A'}
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
