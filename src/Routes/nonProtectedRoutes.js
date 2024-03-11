import React from "react";
import { Navigate } from "react-router-dom";

function NonProtected({ children }) {
  const token = localStorage.getItem("user");

  if (token) {
    return <Navigate to="/choose-organization" replace />;
  }

  return <>{children}</>;
}
export default NonProtected;
