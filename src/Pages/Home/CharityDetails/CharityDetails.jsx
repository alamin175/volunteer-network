import React from "react";
import { Link } from "react-router-dom";

const CharityDetails = ({ data }) => {
  const { _id, name, img } = data;
  return (
    <Link to={`/volunteer/${_id}`}>
      <div className="details">
        <img className=" rounded-0" src={img} alt="" />
        <p className=" fw-medium  text-center p-4 text-bg-info">{name}</p>
      </div>
    </Link>
  );
};

export default CharityDetails;
