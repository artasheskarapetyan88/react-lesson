import React  from "react";
import { Outlet,Navigate } from "react-router-dom";
import Cookies from 'js-cookie'
const ProtectedRout = () => {
  const isAuthenticated = Cookies.get("authToken")
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRout;