import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import useVolunteerDetails from "../../Components/hooks/useVolunteerDetails";
import EventsDetails from "./EventsDetails";

const Events = () => {
  const [events, setEvents] = useState([]);
  // const [volunteer] = useVolunteerDetails();
  // console.log(volunteer);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <h1 className="text-center">This is your events</h1>
      <div className="events-container">
        {events.map((event) => (
          <EventsDetails key={event._id} event={event}></EventsDetails>
        ))}
      </div>
    </div>
  );
};

export default Events;
