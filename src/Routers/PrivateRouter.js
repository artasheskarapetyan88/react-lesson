import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const PrivateRouter = () => {
  const isAuthenticated = Cookies.get("authToken");
  return isAuthenticated ? <>          <Header />
      <Nav />
      <div className="app-wrapper-content"><Outlet />
      </div>
    </>
    : <Navigate to="/login" />;
};

export default PrivateRouter;