import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import NewGoal from "./components/NewGoal";
import ResponsiveAppBar from "./components/Navbar";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/addcourse" element={<NewGoal />}></Route>
      </Routes>
      <Toaster richColors={true} position="top-center" />
    </Router>
  );
};

export default App;
