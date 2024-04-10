import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import InputComponent from '../InputComponent';
import config from '../../../config/config';

function LoginCardComponent() {
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
            {config.app_name}
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
        <Grid
          container
          spacing={1}
          flexDirection="column"
          padding={2}
        >
          <Grid item>
            <InputComponent
              type='email'
              placeholder='email@email.com'
              fullWidth
            />
          </Grid>

          <Grid item>
            <InputComponent
              type='password'
              placeholder='password'
              fullWidth
            />
          </Grid>

          <Grid item>
            <Grid
              container
              flexDirection="column"
              spacing={1}
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid
                item
                sx={{
                  width: '100%',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    backgroundColor: '#28a745',
                    '&:hover': {
                      backgroundColor: '#218838',
                    },
                    color: 'white',
                  }}
                >
                  Log in
                </Button>
              </Grid>

              <Grid
                item
                sx={{ width: '100%' }}
              >
                <Button
                  variant="contained"
                  sx={{ width: '100%' }}
                >
                  Register
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="text"
                  sx={{ width: '100%' }}
                >
                  Forgot password?
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default LoginCardComponent;
