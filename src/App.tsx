import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
