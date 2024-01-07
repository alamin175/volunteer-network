import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth, { provider } from "../../../firebase";
import img from "../../../assets/logos/Group 1329.png";
import Header from "../../Header/Header";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  useTitle("Register");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        event.target.reset();
        setError("");
        setSuccess("User created successfully");
        alert("user created succesfully");
        navigate("/");
        // console.log(user);
      })
      .catch((error) => {
        setSuccess(null);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //
        // console.log(result);
        setSuccess("user login successfully");
        alert("user created successfully");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="d-flex register align-items-center justify-content-center mx-auto ">
        <div className=" m-4 p-4 w-50 text-center  border border-black">
          <img src={img} alt="" />
          <h1>Please Register on Volunteer</h1>
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
              className="mx-auto d-block m-4 "
              type="email"
              name="email"
              placeholder="Email"
            />
            {/* <input
            className="mx-auto d-block m-4 "
            type="text"
            name="Date"
            placeholder="Date"
          /> */}
            {/* <input
            className="mx-auto d-block m-4 "
            type="text"
            name="description"
            placeholder="Description"
          /> */}
            <input
              required
              className=" mx-auto d-block m-4 "
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="btn btn-primary w-25"
              type="submit"
              value="Register"
            />
          </form>
          <p className="text-success">{success} </p>
          <p className="text-danger">{error} </p>
          <p>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
          <div>
            <p>Or</p>
            <h5>Login With</h5>
            <button
              onClick={handleGoogleLogin}
              className="w-50 btn btn-primary"
            >
              <span>
                <FaGoogle></FaGoogle>
              </span>
              <span className="text-center">Continue With Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
