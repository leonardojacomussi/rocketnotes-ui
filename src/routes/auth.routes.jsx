import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

export default function AuthRoutes() {
  const user = localStorage.getItem("@RocketNotes:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SingUp />} />
      {
        !user && <Route path="*" element={<Navigate to="/"/>} />
      }
    </Routes>
  );
}