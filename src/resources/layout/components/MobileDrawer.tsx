import React from 'react';
import { Box, CssBaseline, Drawer, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import config from '../../../config/config';

// components
import SidebarList from './SidebarList';

// icons 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerHeader from '../../styles/DrawerHeader';
import SidebarBottom from './SidebarBottom';

// const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface MobileDrawerProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void
}

function MobileDrawer({ children, open, setOpen }: MobileDrawerProps) {
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const MobileDrawerList = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <SidebarList
        open
      />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'auto' }}>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {config.app_name}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer}>
        <DrawerHeader />

        <MobileDrawerList />

        <SidebarBottom
          open={open}
        />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default MobileDrawer;
