import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface GoalProps {
  id: number;
  title: string;
  description: string;
  category: "Frontend" | "Backend";
}

export interface InitalStateProps {
  courses: GoalProps[];
}

const initialState: InitalStateProps = {
  courses: [],
};

const courseSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<GoalProps>) => {
      state.courses.push(action.payload);
    },
    editGoal: (state, action: PayloadAction<GoalProps>) => {
      state.courses = state.courses.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
    },
    removeGoal: (state, action: PayloadAction<number>) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const courseReducer = courseSlice.reducer;

export const { addGoal, removeGoal, editGoal } = courseSlice.actions;
