import React, { useContext } from "react";
import "./App.css";
import Login from "./Component/login/Login";
import Register from "./Component/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./Component/Context/Auth-Context";
import Dashboard from "./Component/Dashboard/Dashboard";
const App = () => {
  const { UserDATA } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {!UserDATA && <Route path="*" element={<Login />} />}
        {!UserDATA && <Route path="/register" element={<Register />} />}

        {UserDATA && <Route path="/login" element={<Navigate to="/" />} />}
      </Routes>
      <div>
        {UserDATA && (
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
