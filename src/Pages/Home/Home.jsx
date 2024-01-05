import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../SharedPages/Footer/Footer";
import CharityDetails from "./CharityDetails/CharityDetails";

const Home = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("volunteer.json")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div className="home-conatainer">
      <Header></Header>
      <h1 className="text-center fw-semibold mt-3">
        I GROW BY HELPING PEOPLE IN NEED
      </h1>
      <div className="text-center">
        <input
          type="text"
          className=" w-25 p-2"
          placeholder="Search anything"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        ></input>
        <Button>Search</Button>
      </div>
      <div className="charity">
        {information.map((data) => (
          <CharityDetails key={data.id} data={data}></CharityDetails>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
