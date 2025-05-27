'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    router.push('/login');
    setDrawerOpen(false);
  };
  const handleHome = () => {
    router.push('/home');
    setDrawerOpen(false);
  };
  const handleContact = () => {
    router.push('/contact');
    setDrawerOpen(false);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Trang chủ', onClick: handleHome },
    { label: 'Liên hệ', onClick: handleContact },
    { label: 'Logout', onClick: handleLogout },
  ];

  return (
    <>
      {/* Nav bar full width */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          left: 0,
          right: 0,
          width: '100%',
          bgcolor: '#fff',
          py: 1,
          px: { xs: 1, sm: 3, md: 4 }, // padding vừa phải, tránh tràn
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #ddd',
          height: { xs: 56, sm: 80 },
          zIndex: 1100,
          boxSizing: 'border-box', // chắc chắn padding không làm tràn
          overflow: 'hidden', // phòng trường hợp nội dung quá rộng
        }}
      >
        {/* Logo bên trái */}
        <Box
          component="img"
          src="/images/logo-hdbank.png"
          alt="Logo"
          sx={{
            width: { xs: 120, sm: 160, md: 220, lg: 280 },
            flexShrink: 1,
            cursor: 'pointer',
            userSelect: 'none',
            display: 'block',
          }}
          onClick={handleHome}
        />

        {/* Nav items bên phải */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              size="large"
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List sx={{ width: 250 }}>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={item.onClick}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="text"
                color="inherit"
                onClick={item.onClick}
                sx={{ whiteSpace: 'nowrap' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
