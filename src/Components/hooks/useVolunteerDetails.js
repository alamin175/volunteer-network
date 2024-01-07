import { useEffect, useState } from "react";

const useVolunteerDetails = (id) => {
  const [volunteer, setVolunteer] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/volunteer/${id}`)
      .then((res) => res.json())
      .then((data) => setVolunteer(data));
  }, [id]);
  return [volunteer];
};

export default useVolunteerDetails;
