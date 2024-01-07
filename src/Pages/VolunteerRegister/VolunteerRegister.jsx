import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import img from "../../assets/logos/Group 1329.png";
import { useNavigate, useParams } from "react-router-dom";
import useVolunteerDetails from "../../Components/hooks/useVolunteerDetails";
import { UserContext } from "../../Components/AuthContext/AuthContext";

const VolunteerRegister = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [volunteer] = useVolunteerDetails(id);
  const navigate = useNavigate();
  // console.log(volunteer);
  //   console.log(id);
  const url = ` http://localhost:5000/volunteer/${id}`;
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const date = form.date.value;
    const title = form.title.value;
    const img = form.img.value;
    const description = form.description.value;
    const totalData = {
      name: name,
      email: email,
      date: date,
      title: title,
      description: description,
      image: img,
    };
    // console.log(totalData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.insertedId) {
          alert("your registration for volunteer successfully");
          form.reset();
          navigate("/events");
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div className="d-flex register align-items-center justify-content-center mx-auto ">
        <div className=" m-4 p-4 w-50 text-center  border border-black">
          {/* <img src={img} alt="" /> */}
          <h1>Please Register as a Volunteer</h1>

          <form onSubmit={handleRegister}>
            <input
              required
              className="mx-auto justify-content-center d-block m-4 "
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              required
              className="mx-auto justify-content-center d-block m-4 "
              type="text"
              name="img"
              placeholder="Image"
              value={volunteer?.img}
            />

            <input
              required
              className="mx-auto d-block m-4 "
              type="email"
              name="email"
              placeholder="Email"
              value={user?.email}
              readOnly
            />
            <input
              className="mx-auto d-block m-4 "
              type="text"
              name="date"
              placeholder="Date"
              required
            />
            <input
              className="mx-auto d-block m-4 "
              type="text"
              name="title"
              placeholder="Title"
              value={volunteer.name}
              readOnly
            />
            <textarea
              style={{ width: 260 }}
              className="mx-auto d-block  m-4 "
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <input
              className="btn btn-primary w-25"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default VolunteerRegister;
