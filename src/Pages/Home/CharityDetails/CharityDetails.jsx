import React from "react";

const CharityDetails = ({ data }) => {
  const { id, name, img } = data;
  return (
    <div className="details">
      <img className=" rounded-0" src={img} alt="" />
      <p className=" fw-medium  text-center p-4 text-bg-info">{name}</p>
    </div>
  );
};

export default CharityDetails;
