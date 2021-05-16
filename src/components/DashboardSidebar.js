/* eslint-disable */
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  Activity as ActivityIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  Server as ServerIcon,
  UserPlus as UserPlusIcon,
  User as UserIcon,
  AlignJustify as AlignJustifyIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/admin_lock.png',
  jobTitle: 'System Administrator',
  name: 'ADMIN'
};

const items = [
  {
    href: '/app/dashboard',
    icon: ActivityIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/devices',
    icon: ServerIcon,
    title: 'Devices'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/test',
    icon: AlertCircleIcon,
    title: 'Test'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const sideBarCollapsed =  localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sideBarCollapsed ? false : true );

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  const content = (
    
    <Box
      style={{
        backgroundColor: 'white',
        borderRightStyle: 'solid',
        borderRightColor: 'black',
        borderRightWidth: '1px',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 0
        }}
      >
        <AlignJustifyIcon style={{
          marginBottom: 20,
          marginTop: 20,
          width: '1.50em',
          height: '1.50em',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={handleToggler}
        />
        <Divider/>
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 45,
            height: 45
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
          backgroundColor: 'white',
        }}
      >
        <List>
          {items.map((item) => (
            <NavItem
              sx={{
                backgroundColor: 'white',

              }}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  const contentCollapsed = (
    
    <Box
      style={{
        backgroundColor: 'white',
        borderRightStyle: 'solid',
        borderRightColor: 'black',
        borderRightWidth: '1px',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <AlignJustifyIcon style={{
          marginLeft: '0',
          width: '1.50em',
          height: '1.50em',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={handleToggler}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          p: 3,
          backgroundColor: 'white',
        }}
      >
        <List>
          {items.map((item) => (
            <NavItem
              sx={{
                backgroundColor: 'white',

              }}
              href={item.href}
              key={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden lgDown>
        <Drawer
          anchor="left"
          open={isExpanded === true}
          variant="persistent"
          PaperProps={{
            sx: {
              width: 180,
              top: 64,
              height: 'calc(100% - 64px)',
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden lgDown>
        <Drawer
          anchor="left"
          open={isExpanded === false}
          variant="persistent"
          PaperProps={{
            sx: {
              width: 90,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {contentCollapsed}
        </Drawer>
      </Hidden>

    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
