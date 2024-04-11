import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

interface AuthenticationCardComponentInterface {
  children: React.ReactNode;
  headerTitle: string;
}

function AuthenticationCardComponent({ children, headerTitle }: AuthenticationCardComponentInterface) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      {/* Header!!!! */}
      <CardContent
        sx={{
          boxShadow: 3,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            fontFamily={'monospace'}
            color="white"
          >
            {headerTitle}
          </Typography>

          <FontAwesomeIcon
            icon={faBolt}
            color='yellow'
            size='2x'
          />
        </Box>
      </CardContent>

      {/* Body!!!! */}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default AuthenticationCardComponent;
