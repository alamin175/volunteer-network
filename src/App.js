import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Donation from "./Components/Donation/Donation";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Registration/Login/Login";
import Register from "./Components/Registration/Register/Register";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/donation"
          element={
            <PrivateRoute>
              <Donation></Donation>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
