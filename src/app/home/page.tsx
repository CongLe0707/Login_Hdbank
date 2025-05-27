// app/home/page.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Trang Chủ
      </Typography>
      <Typography>
        Chào mừng bạn đến với trang chủ của ứng dụng!
      </Typography>
    </Box>
  );
}
export default HomePage;