import { List } from '@mui/material';
import React, { useContext } from 'react';
import SidebarItem from './SidebarItem';
import RouteList from '../../../routing/Routes';
import UserContext from '../../../contexts/UserContext';

// Icons imports
import HomeIcon from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import Settings from '@mui/icons-material/Settings';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface SidebarListProps {
  open: boolean;
}

function SidebarList({ open }: SidebarListProps) {
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);

  const handleLogout = async () => {
    await logoutUser()
      .then(() => {
        navigate(RouteList.PublicRoutes.Login);
      });
  }

  return (
    <List sx={{ paddingTop: 0 }}>
      <SidebarItem
        open={open}
        path={RouteList.PrivateRoutes.Home}
        icon={<HomeIcon />}
      />

      <SidebarItem
        open={open}
        path={RouteList.PrivateRoutes.Energy}
        icon={<OfflineBoltIcon />}
      />

      <SidebarItem
        open={open}
        path={RouteList.PrivateRoutes.Settings}
        icon={<Settings />}
      />

      <SidebarItem
        open={open}
        path={RouteList.PrivateRoutes.About}
        icon={<Info />}
      />

      <SidebarItem
        open={open}
        path={RouteList.PrivateRoutes.Logout}
        icon={<Logout />}
        clickHandler={handleLogout}
      />
    </List>
  )
}

export default SidebarList;
