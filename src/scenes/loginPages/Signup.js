import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { tokens } from "../../theme";
import Lottie from "lottie-react";
import { useSignup } from "../../hooks/useSignup";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [name, setName] = useState("gayatri");
  // const [gender, setGender] = useState("F");
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState(null);
  const [exp, setExp] = useState(null);
  const [subject, setSubject] = useState(null);
  const [location, setLocation] = useState(null);
  const [password, setPassword] = useState("@test@234123fvINDO45(*g");
  const { signup, error, isLoading } = useSignup();
  const [gender, setGender] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, dob, gender, email, subject, exp, location);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const categories = ["male", "female", "others"];

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
            animationData={require("../../assets/signup.json")}
            loop={true}
            style={{ borderRadius: "20px", width: "25rem" }}
          />
        </Box>
        <Box width="30rem">
          <Typography
            fontSize="200"
            fontWeight="1000"
            variant="h1"
            marginBottom="40px"
            fontFamily="cursive"
          >
            Sign Up to Teach
          </Typography>
          {/* <Typography
            fontWeight="500"
            variant="h4"
            sx={{ mb: "1.5rem", color: "#ddd" }}
          >
            Welcome to Learnzy, A friendly tutoring portal
          </Typography> */}
          <form className="signup" onSubmit={handleSubmit}>
            <Box>
              <TextField
                style={{
                  //marginBottom: "0px",
                  width: "14rem",
                  marginRight: "1rem",
                }}
                label="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                maxLength={50}
                required
              />
              {/* <Select
                style={{
                  // marginBottom: "5px",
                  width: "14rem",
                  marginRight: "1rem",
                }}
                label="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
              >
                <MenuItem value="">Select gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select> */}

              <FormControl
                //fullWidth
                //size="small"
                style={{
                  // marginBottom: "5px",
                  width: "14rem",
                  marginRight: "1rem",
                }}
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <br />
            <Box>
              <TextField
                //width="50%"
                style={{ width: "14rem", marginRight: "1rem" }}
                label="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                name="location"
                maxLength={50}
                required
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "14rem" }}
                  label="DOB"
                  value={dob}
                  onChange={(newValue) => setDob(newValue)}
                />
              </LocalizationProvider>
            </Box>
            <br />
            <Box>
              <TextField
                style={{
                  //marginBottom: "5px",
                  width: "14rem",
                  marginRight: "1rem",
                }}
                label="Experience(yrs)"
                onChange={(e) => setExp(e.target.value)}
                type="number"
                value={exp}
                name="exp"
                required
              />
              <TextField
                //width="50%"
                style={{ width: "14rem" }}
                label="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                name="subject"
                required
              />
            </Box>
            <br />
            <TextField
              style={{ width: "29rem", marginBottom: "1rem" }}
              label="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
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
              Sign Up!
            </Button>

            {error && <div className="error">Please fill all the fields</div>}
          </form>
        </Box>
      </Box>
    </Box>
  );
};
