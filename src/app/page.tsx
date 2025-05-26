import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Divider,
} from "@mui/material";
import { FaUser, FaLock } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";

const Login = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#E8E8E8", p: 2, position: "relative" }}>
      {/* Logo */}
      <Box
        component="img"
        src="/images/logo-hdbank.png"
        alt="HDBank Logo"
        sx={{
          position: "fixed",
          top: 8,
          left: 0,
          width: { xs: 200, sm: 220, lg: 280 },
          zIndex: 10,
        }}
      />

      {/* Centered content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            maxWidth: "1200px",
            width: "100%",
            px: 2,
          }}
        >
          {/* Illustration */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "60%",
              justifyContent: "flex-end",
              pr: 5,
            }}
          >
            <Box
              component="img"
              src="/images/login-bg2.png"
              alt="Illustration"
              sx={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Login Form */}
          <Paper
            elevation={6}
            sx={{
              width: "100%",
              maxWidth: 300,
              bgcolor: "#AA0000",
              color: "#fff",
              borderRadius: 2,
              p: 2,
              zIndex: 2,
              ml: { xs: 0, md: 6 },
            }}
          >
            <Box mb={1}>
              <Typography align="center" variant="body2" fontWeight="500" fontSize="0.8rem">
                Chào mừng bạn đến với
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <Divider sx={{ flex: 2, borderColor: "#fff",  mt: -1, borderBottomWidth: "2px" }} />
                <Typography
                  sx={{ mx: 2, whiteSpace: "nowrap", fontWeight: "bold", fontSize: "1.1rem" , }}
                  variant="h4"
                >
                  Tài khoản sinh lời
                </Typography>
                <Divider sx={{ flex: 2, borderColor: "#fff",  mt: -1 ,borderBottomWidth: "2px" }} />
              </Box>
            </Box>

            <form>
              {/* Username */}
              <Box mb={1.5}>
                <Typography variant="body2" fontWeight="500" mb={0.5} fontSize="0.7rem">
                  Tên đăng nhập
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập Username / Email"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUser color="gray" size={14} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: 1,
                      fontSize: "0.8rem",
                      height: 36,
                      '& fieldset': {
                        borderColor: '#ccc',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ccc',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ccc',
                      },
                    },
                  }}
                />
              </Box>

              {/* Password */}
              <Box mb={1.5}>
                <Typography variant="body2" fontWeight="500" mb={0.5} fontSize="0.7rem">
                  Mật khẩu
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="Nhập mật khẩu"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock color="gray" size={14} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" size="small">
                          <FiEyeOff color="gray" size={14} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: 1,
                      fontSize: "0.8rem",
                      height: 36,
                      '& fieldset': {
                        borderColor: '#ccc',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ccc',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ccc',
                      },
                    },
                  }}
                />
              </Box>

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: "#ffcb05",
                  color: "#000",
             
                  fontSize: "0.7rem",
                  height: 36,
                  "&:hover": {
                    bgcolor: "#f1c40f",
                  },
                }}
                startIcon={<TbLogin size={18} />}
              >
                Đăng Nhập
              </Button>

              {/* Footer text */}
              <Typography
                variant="body2"
                align="right"
                sx={{ mt: 1.5, cursor: "pointer", color: "#fff", fontSize: "0.75rem" }}
              >
                Hướng Dẫn Xác Thực Vân Tay
              </Typography>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
