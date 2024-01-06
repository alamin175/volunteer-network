import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  //   console.log(location);
  const { user } = useContext(UserContext);
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
