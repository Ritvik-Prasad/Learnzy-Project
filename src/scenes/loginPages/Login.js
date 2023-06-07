import React, { useState } from "react";
import { tokens } from "../../theme";
import Lottie from "lottie-react";
import { useLogin } from "../../hooks/useLogin";
import { useTheme } from "@emotion/react";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [email, setEmail] = useState("anushka@learnzyTutor.com");
  const [password, setPassword] = useState("@test@234123fvINDO45(*g");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width={isNonMobileScreens ? "80%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="7px"
        backgroundColor={colors.primary[400]}
        display={"flex"}
        gap={"5rem"}
        sx={{ alignItems: "center" }}
      >
        <Box>
          <Lottie
            animationData={require("../../assets/login.json")}
            loop={true}
            style={{ borderRadius: "20px", width: "25rem" }}
          />
        </Box>
        <Box width="30rem">
          <Typography
            fontSize="200"
            fontWeight="1000"
            variant="h1"
            marginBottom="35px"
            fontFamily="cursive"
          >
            Learnzy
          </Typography>
          <Typography
            fontWeight="500"
            variant="h4"
            sx={{ mb: "1.5rem", color: "#ddd" }}
          >
            Welcome to Learnzy, A friendly tutoring portal
          </Typography>
          <form className="login" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              style={{ marginBottom: "20px" }}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
            <br />
            <TextField
              fullWidth
              style={{ marginBottom: "10px" }}
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
            />
            <br />
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
              sx={{
                fontWeight: 700,
                fontSize: 14,
                m: "1rem 0",
                p: "1rem",
                backgroundColor: colors.blueAccent[600],
                color: colors.blueAccent[100],
                "&:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: colors.blueAccent[800],
                },
              }}
            >
              Login
            </Button>
            <Box>
              <Typography textAlign="center">
                Dont have an account?
                <Link to="/signup" style={{
                        color: colors.blueAccent[300],
                        marginLeft: 3,
                    }}>
                  Register
                </Link>
              </Typography>
            </Box>
            {error && <div className="error">{error}</div>}
          </form>
        </Box>
      </Box>
    </Box>
  );
};
