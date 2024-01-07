import { useEffect, useState } from "react";

const useInformation = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);

  return [information];
};

export default useInformation;
