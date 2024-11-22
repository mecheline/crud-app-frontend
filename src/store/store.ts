import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { courseReducer } from "../features/CourseSlice";
import { authReducer } from "../features/AuthSlice";
import { authSlice } from "../api/authService";

// Step 1: Configure persist settings
const persistConfig = {
  key: "root", // key for local storage
  version: 1,
  storage, // using local storage

  whitelist: ["course", "auth"], // Specify which reducers to persist
};

const rootReducer = combineReducers({
  course: courseReducer,
  auth: authReducer,
});

// Step 2: Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Step 3: Configure the store
const store = configureStore({
  reducer: {
    root: persistedReducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(authSlice.middleware),
});

// Step 4: Create a persistor
const persistor = persistStore(store);

export { store, persistor };

// Step 6: Define RootState Type with PersistPartial for persisted state
// export type RootState = ReturnType<typeof store.getState> & {

//   courses: PersistPartial & {
//     courses: GoalProps[];
//   };
//   auth: PersistPartial & {
//     user: UserProps | null;
//   };
// };
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
