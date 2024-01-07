import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/logos/Group 1329.png";
import auth, { provider } from "../../../firebase";
import Header from "../../Header/Header";

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from.pathname;
  //   console.log(from);
  //   setError("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setSuccess("");
        setError("");
        alert("user login successfully");
        setSuccess("User Login Successfully");
        console.log(user);
        navigate(from, { replace: true });
        event.target.reset();
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //
        // console.log(result);
        setSuccess("user login successfully");
        navigate(from, { replace: true });
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
          <h1>Please Login </h1>
          <form onSubmit={handleLogin}>
            <input
              className="mx-auto d-block m-4 "
              type="email"
              name="email"
              placeholder="Email"
            />

            <input
              className=" mx-auto d-block m-4 "
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="btn btn-primary w-25"
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-danger">{error} </p>
          <p className="text-success">{success} </p>
          <p>
            <small>
              New on Volunteer Network? <Link to="/register">Register</Link>
            </small>
          </p>
          <div>
            <p>
              <small>Or</small>
            </p>
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

export default Login;
