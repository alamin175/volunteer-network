import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../assets/logos/Group 1329.png";
import { UserContext } from "../AuthContext/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const handlesignout = () => {
    logout();
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={img} alt="" />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link>Events</Link>
        <Link>Blog</Link>
        <span className={user ? " border border-danger p-1 rounded" : ""}>
          <small>{user ? user.email : ""} </small>
        </span>
        {user ? (
          <>
            <Button onClick={handlesignout} className="mx-3">
              Sign Out
            </Button>
            <Link>
              <Button variant="secondary">Admin</Button>
            </Link>
          </>
        ) : (
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
