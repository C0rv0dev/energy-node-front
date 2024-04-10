import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// icons

// components
import ComputerDrawer from './components/ComputerDrawer';
import MobileDrawer from './components/MobileDrawer';

interface Props {
  children: React.ReactNode;
}

function Sidebar({ children }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);

  React.useEffect(() => {
    const resize = () => {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    // check if the window is mobile when the component is mounted
    resize();

    window.addEventListener('resize', () => {
      resize()
    });
  }, [theme.breakpoints.values.sm]);

  if (isMobile) {
    return (
      <MobileDrawer
        open={openMobile}
        setOpen={setOpenMobile}
      >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </MobileDrawer>
    )
  }

  return (
    <ComputerDrawer
      open={open}
      setOpen={setOpen}
    >
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </ComputerDrawer>
  );
}

export default Sidebar;
