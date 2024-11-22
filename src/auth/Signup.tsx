import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { type ChangeEvent, useState } from "react";
import { UserProps } from "../models/types.models";
import { useSignupMutation } from "../api/authService";
import { Password } from "@mui/icons-material";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signup, { data, isError, error, isLoading, isSuccess }] =
    useSignupMutation();
  const signupHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    console.log(payload);
    await signup(payload);
  };
  if (isError) {
    toast.error("Something went wrong, Try again later");
  }
  if (isSuccess) {
    toast.success("Signup success");
    navigate("/login");
  }
  return (
    <Card sx={{ width: 300, p: 2, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          textAlign={"center"}
          mb={2}
          color="#6C5DD3"
        >
          Signup
        </Typography>
        <Box component="form" onSubmit={signupHandler}>
          <Stack spacing={2} sx={{ width: 275 }}>
            <TextField
              size="small"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              sx={{
                // Border color when focused or not
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6C5DD3", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6C5DD3", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6C5DD3", // Border color when focused
                  },
                },
                // Placeholder color
                "& .MuiInputBase-input::placeholder": {
                  color: "#6C5DD3", // Change placeholder color
                },
              }}
              InputLabelProps={{
                sx: {
                  // Label color when focused or not
                  color: "#6C5DD3",
                  "&.Mui-focused": {
                    color: "#6C5DD3",
                  },
                },
              }}
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              sx={{
                // Border color when focused or not
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6C5DD3", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6C5DD3", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6C5DD3", // Border color when focused
                  },
                },
                // Placeholder color
                "& .MuiInputBase-input::placeholder": {
                  color: "#6C5DD3", // Change placeholder color
                },
              }}
              InputLabelProps={{
                sx: {
                  // Label color when focused or not
                  color: "#6C5DD3",
                  "&.Mui-focused": {
                    color: "#6C5DD3",
                  },
                },
              }}
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              sx={{
                // Border color when focused or not
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6C5DD3", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6C5DD3", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6C5DD3", // Border color when focused
                  },
                },
                // Placeholder color
                "& .MuiInputBase-input::placeholder": {
                  color: "#6C5DD3", // Change placeholder color
                },
              }}
              InputLabelProps={{
                sx: {
                  // Label color when focused or not
                  color: "#6C5DD3",
                  "&.Mui-focused": {
                    color: "#6C5DD3",
                  },
                },
              }}
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              sx={{
                // Border color when focused or not
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6C5DD3", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6C5DD3", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6C5DD3", // Border color when focused
                  },
                },
                // Placeholder color
                "& .MuiInputBase-input::placeholder": {
                  color: "#6C5DD3", // Change placeholder color
                },
              }}
              InputLabelProps={{
                sx: {
                  // Label color when focused or not
                  color: "#6C5DD3",
                  "&.Mui-focused": {
                    color: "#6C5DD3",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#6C5DD3",
                color: "white",
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? (
                <>
                  <CircularProgress sx={{ color: "white" }} size={20} />
                </>
              ) : (
                "Signup"
              )}
            </Button>
            <Typography
              sx={{
                textAlign: "center",
                textDecoration: "none",
                fontWeight: 400,
                fontSize: "14px",
                color: "#718096",
              }}
            >
              Already have an account?
              <Link style={{ color: "#6C5DD3" }} to={"/login"}>
                Login
              </Link>
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Signup;
