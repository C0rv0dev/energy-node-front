import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import config from '../../../config/config';

interface SidebarBottomProps {
  open: boolean;
}

function SidebarBottom({ open }: SidebarBottomProps) {
  const actualYear = new Date().getFullYear();

  return (
    <>
      <Box sx={{ flexGrow: 1 }} />

      <Divider />

      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          {config.app_version}
        </Typography>

        {open && (
          <Typography variant="body2" color="textSecondary" align="center">
            {`© ${actualYear} ${config.app_name}`}
          </Typography>
        )}
      </Box>
    </>
  )
}

export default SidebarBottom;
