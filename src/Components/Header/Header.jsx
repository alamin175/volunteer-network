import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../assets/logos/Group 1329.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={img} alt="" />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link>Donation</Link>
        <Link>Events</Link>
        <Link>Blog</Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link>
          <Button variant="secondary">Admin</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
