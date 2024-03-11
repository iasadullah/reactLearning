import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Protected({ children, allowedRoles }) {
  return <>{children}</>;
}
export default Protected;
