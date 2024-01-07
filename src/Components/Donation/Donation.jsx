import React from "react";
import Header from "../Header/Header";
import useTitle from "../hooks/useTitle";

const Donation = () => {
  useTitle("Donation");
  return (
    <div>
      <Header></Header>
      <h1>This is Donation section</h1>
    </div>
  );
};

export default Donation;
