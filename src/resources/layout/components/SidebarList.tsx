import { List } from '@mui/material';
import React from 'react';
import SidebarItem from './SidebarItem';

// Icons imports
import HomeIcon from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import RouteList from '../../../routing/Routes';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import Settings from '@mui/icons-material/Settings';

interface SidebarListProps {
  open: boolean;
}

function SidebarList({ open }: SidebarListProps) {
  return (
    <List sx={{ paddingTop: 0 }}>
      <SidebarItem
        open={open}
        path={RouteList.Home}
        icon={<HomeIcon />}
      />

      <SidebarItem
        open={open}
        path={RouteList.Energy}
        icon={<OfflineBoltIcon />}
      />

      <SidebarItem
        open={open}
        path={RouteList.Settings}
        icon={<Settings />}
      />

      <SidebarItem
        open={open}
        path={RouteList.About}
        icon={<Info />}
      />
    </List>
  )
}

export default SidebarList;
