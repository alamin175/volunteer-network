import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase";

export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    return signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log(currentUser);
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    logout,
  };

  return (
    <div>
      <UserContext.Provider value={authInfo}>{children} </UserContext.Provider>
    </div>
  );
};

export default AuthContext;
