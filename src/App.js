import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Forgot from "./pages/Forgot";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/useraccount" element={<UserAccount />} />
    
      </Routes>
    </Router>
  );
}

export default App;
