import React from "react";
import "./AddCharity.css";
import img from "../../assets/logos/Group 1329.png";
import { FaUserCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddCharity = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const image = form.image.value;
    const details = {
      img: image,
      name: title,
      date: date,
      description: description,
    };
    fetch("http://localhost:5000/addCharity", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };
  return (
    <div className="charity-container d-flex">
      <div className="sidebar">
        <Link to="/">
          <img src={img} alt="" />
        </Link>
        <span className="d-flex mt-4 justify-content-center ">
          <FaUserCheck></FaUserCheck>
          <h5 className="text-center mx-1">Volunteer Registered List</h5>
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add">
          <h1>Add Charity Event</h1>
        </div>
        <div className="add-container d-flex">
          <div>
            <p>Event Title</p>
            <input
              type="text"
              name="title"
              placeholder="Charity Title"
              required
            />
            <p>Description</p>
            <textarea
              required
              name="description"
              placeholder="Enter Description"
              cols="40"
              rows="5"
              className="ms-2"
            ></textarea>
          </div>
          <div>
            <p> Event Date </p>
            <input type="text" required name="date" placeholder="Date" />
            <p> Image </p>
            <input type="text" required name="image" placeholder="Image URL" />
            <br />
          </div>
        </div>
        <div className="d-flex justify-content-end mx-5">
          <input
            required
            className="btn btn-primary "
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCharity;
