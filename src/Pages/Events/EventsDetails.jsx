import React from "react";
import useTitle from "../../Components/hooks/useTitle";

const EventsDetails = ({ event, setevent }) => {
  const { _id, image, name, title, date } = event;
  const [events, setEvents] = setevent;
  // console.log(events);
  useTitle("Events");

  const handleDelete = (id) => {
    const proceed = window.confirm(" Are You sure you want to delete this?");
    if (proceed) {
      fetch(`http://localhost:5000/event/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainig = events.filter((data) => data._id !== id);
          setEvents(remainig);
        });
    }
  };
  return (
    <div className="events">
      <img src={image} alt="" />
      <span className="m-3 my-auto ">
        <h5 className="fw-semibold">{name} </h5>
        <p className="fw-medium">{title} </p>
        <p className="fw-medium">{date} </p>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </span>
    </div>
  );
};

export default EventsDetails;
