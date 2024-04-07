import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
  path: string;
  open: boolean;
  icon: JSX.Element;
}

function SideBarItem({ open, path, icon }: Props) {
  const navigate = () => {
    console.log('navigate to:', path);
  }

  return (
    <>
      <ListItem
        key={path}
        disablePadding sx={{ display: 'block' }}
        onClick={navigate}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
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
          <ListItemText primary={path} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default SideBarItem;