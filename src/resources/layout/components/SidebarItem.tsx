import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import RouteList from '../../../routing/Routes';

interface Props {
  path: string;
  open: boolean;
  icon: JSX.Element;
}

function SideBarItem({ open, path, icon }: Props) {
  // variables
  const navigateTo = useNavigate();
  const selected = window.location.pathname === path;

  // functions 
  const formatToDisplay = (path: string) => {
    // create a swtich case to format the path for each route in RouteList programatically
    switch (path) {
      case RouteList.PrivateRoutes.Home:
        return 'Home';
      case RouteList.PrivateRoutes.Energy:
        return 'Energy';
      case RouteList.PrivateRoutes.Settings:
        return 'Settings';
      case RouteList.PrivateRoutes.About:
        return 'About';
      default:
        return path.replace('/', '');
    }

  };

  const handleNavigate = () => {
    // navigate to path
    navigateTo(path);
  }

  return (
    <>
      <ListItem
        key={path}
        disablePadding
        onClick={handleNavigate}
        sx={{
          display: 'block',
          background: selected ? (theme) => theme.palette.primary.main : 'transparent',
        }}
      >
        <ListItemButton
          sx={{
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            minHeight: 48,
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              ...(selected && { color: 'white' }),
            }}
          >
            {icon}
          </ListItemIcon>

          <ListItemText
            primary={formatToDisplay(path)}
            sx={{
              display: open ? 'block' : 'none',
              opacity: open ? 1 : 0,
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default SideBarItem;