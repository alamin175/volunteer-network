import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../assets/logos/Group 1329.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={img} alt="" />
      <div>
        <Link>Home</Link>
        <Link>Donation</Link>
        <Link>Events</Link>
        <Link>Blog</Link>
        <Link>
          <Button>Register</Button>
        </Link>
        <Button variant="secondary">Admin</Button>
      </div>
    </div>
  );
};

export default Header;
