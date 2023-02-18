import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./Components/auth/Dashbord";
import Store from "./Components/auth/Store";
import Log from "./Components/login/Log";
import Login from "./Components/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/log" element={<Log />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
