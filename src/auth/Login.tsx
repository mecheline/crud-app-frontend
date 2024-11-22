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
import { type ChangeEvent, useEffect, useState } from "react";
import { LoginProps } from "../models/types.models";
import { useLoginMutation, useSignupMutation } from "../api/authService";
import { Password } from "@mui/icons-material";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [login, { data, isError, error, isLoading, isSuccess }] =
    useLoginMutation();
  const signupHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      email: user.email,
      password: user.password,
    };
    await login(payload);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong, Try again later");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(loggedIn(data));
      navigate("/addcourse");
    }
  }, [isSuccess]);

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
          Login
        </Typography>
        <Box component="form" onSubmit={signupHandler}>
          <Stack spacing={2} sx={{ width: 275 }}>
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
              variant="outlined"
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
                "Login"
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
              Don't have an account?
              <Link style={{ color: "#6C5DD3" }} to={"/signup"}>
                Signup
              </Link>
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
