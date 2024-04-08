import { List } from '@mui/material';
import React from 'react';
import SidebarItem from './SidebarItem';

// Icons imports
import HomeIcon from '@mui/icons-material/Home';
import ErrorIcon from '@mui/icons-material/Error';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

interface SidebarListProps {
  open: boolean;
}

function SidebarList({ open }: SidebarListProps) {
  return (
    <List sx={{ paddingTop: 0 }}>
      <SidebarItem
        open={open}
        path="home"
        icon={<HomeIcon />}
      />

      <SidebarItem
        open={open}
        path="energy"
        icon={<OfflineBoltIcon />}
      />

      <SidebarItem
        open={open}
        path='about'
        icon={<ErrorIcon />}
      />
    </List>
  )
}

export default SidebarList;
