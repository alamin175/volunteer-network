import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const useInformation = () => {
  const [user] = useAuthState(auth);
  const [information, setInformation] = useState([]);

  const email = user?.email;
  // console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/data`)
      .then((res) => res.json())
      .then((data) => {
        setInformation(data);
      });
  }, [email]);

  return [information];
};

export default useInformation;
