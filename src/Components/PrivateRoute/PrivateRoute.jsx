import React, { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  //   console.log(location);
  const { user, loading } = useContext(UserContext);
  if (loading) {
    const now = 60;

    return <ProgressBar animated now={now} label="loading" />;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      {/* {alert("You must login to visit this section")} */}
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    </div>
  );
};

export default PrivateRoute;
