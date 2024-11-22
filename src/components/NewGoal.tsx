import { type FormEvent, useState } from "react";

import { addGoal, editGoal } from "../features/CourseSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CourseGoals from "./CourseGoals";
import { RootState } from "../store/store";

type GoalProps = {
  title: string;
  description: string;
  category: "Frontend" | "Backend";
};

const NewGoal = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.root.course.courses);
  const [newgoal, setNewgoal] = useState<GoalProps>({
    title: "",
    description: "",
    category: "" as "Frontend",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentID, setCurrentID] = useState<number>(0);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(
        editGoal({
          id: currentID,
          title: newgoal.title,
          description: newgoal.description,
          category: newgoal.category,
        })
      );
      setIsEditing(false);
      setNewgoal({ title: "", description: "", category: "Frontend" });
      return;
    }
    console.log("Second >>>>>>>>");

    dispatch(
      addGoal({
        id: Math.random(),
        title: newgoal.title,
        description: newgoal.description,
        category: newgoal.category,
      })
    );
    setNewgoal({ title: "", description: "", category: "" as "Frontend" });
  };

  const editHandler = (id: number) => {
    console.log(id);
    setCurrentID(id);
    setIsEditing(true);
    const courseToEdit = courses.filter((course) => course.id === id);
    console.log(courseToEdit);
    setNewgoal({
      title: courseToEdit[0].title,
      description: courseToEdit[0].description,
      category: courseToEdit[0].category,
    });
  };

  const cancelHandler = () => {
    setIsEditing(false);
    setNewgoal({ title: "", description: "", category: "" as "Frontend" });
  };

  return (
    <Box>
      <Card
        sx={{
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography sx={{ my: 2, fontWeight: 700 }}>
            {isEditing ? "Edit Course Goal" : "New Course Goal"}
          </Typography>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              columnGap: 2,
            }}
            onSubmit={submitHandler}
          >
            <Box
              sx={{
                width: 400,
                mx: "auto",
              }}
            >
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Goal title"
                variant="outlined"
                value={newgoal.title}
                onChange={(e) =>
                  setNewgoal({ ...newgoal, title: e.target.value })
                }
              />
            </Box>
            <Box
              sx={{
                width: 500,
                mx: "auto",
              }}
            >
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Goal description"
                variant="outlined"
                value={newgoal.description}
                onChange={(e) =>
                  setNewgoal({ ...newgoal, description: e.target.value })
                }
              />
            </Box>
            <Box
              sx={{
                width: 300,
                mx: "auto",
              }}
            >
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newgoal.category}
                  label="Category"
                  onChange={(e) =>
                    setNewgoal({
                      ...newgoal,
                      category: e.target.value as "Frontend" | "Backend",
                    })
                  }
                >
                  <MenuItem value={"Frontend"}>Frontend</MenuItem>
                  <MenuItem value={"Backend"}>Backend</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 200, display: "flex", columnGap: 1 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#6C5DD3" }}
              >
                {isEditing ? "Update" : "Add Goal"}
              </Button>
              {isEditing && (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#6C5DD3" }}
                  onClick={cancelHandler}
                >
                  Cancel
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
      <CourseGoals editHandler={editHandler} />
    </Box>
  );
};

export default NewGoal;
