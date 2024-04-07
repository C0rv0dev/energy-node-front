import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

interface Props {
  path: string;
  open: boolean;
  icon: JSX.Element;
}

function SideBarItem({ open, path, icon }: Props) {
  const navigateTo = useNavigate();

  const formatToDisplay = (path: string) => {
    // set first letter to uppercase
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  const handleNavigate = () => {
    // navigate to path
    navigateTo(path);
  }

  return (
    <>
      <ListItem
        key={path}
        disablePadding sx={{ display: 'block' }}
        onClick={handleNavigate}
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