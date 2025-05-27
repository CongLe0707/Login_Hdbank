// app/contact/page.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
const ContactPage: React.FC = () => {
  return (
    
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Liên hệ
      </Typography>
      <Typography>
        Bạn có thể liên hệ với chúng tôi qua email: contact@example.com
      </Typography>
    </Box>
  );
}
export default ContactPage;
