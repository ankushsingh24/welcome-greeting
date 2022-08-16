import React from "react";
import { useState } from "react";
import "./Welcome.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Output from "../components/Output/Output";

const Welcome = () => {
  let [Fname, setFname] = useState("");
  let [Lname, setLname] = useState("");
  // let [template, setTemplate] = useState("");
  let [fullName, setfullName] = useState("");

  const getFname = (e) => {
    // e.preventDefault();
    setFname(e.target.value);
  };

  const getLname = (e) => {
    // e.preventDefault();
    setLname(e.target.value);
  };

  // const getTemplate = () => {
  //   setTemplate("Welcome to my Website ");
  // };

  const display = (e) => {
    // e.preventDefault();
    setfullName(`Hello ${Fname} ${Lname} !!! Welcome to my Website`);
  };

  const clear = (e) => {
    // e.preventDefault();
    setFname("");
    setLname("");
    setfullName("");
  };

  return (
    <div className="container mt-5">
      <form action="" className="row g-3">
        <h1 className="col-md-12 d-flex justify-content-center">
          Welcome Page
        </h1>
        <hr />
        <div className="col-md-6">
          <Input funCall={getFname} label="First Name" val={Fname} />
        </div>
        <div className="col-md-6">
          <Input funCall={getLname} label="Last Name" val={Lname} />
        </div>

        <div className="d-flex gap-2 d-md-flex">
          <Button color="success" funCall={display} label="Submit" />
        </div>
        <div className="d-flex gap-2 d-md-flex">
          <Button color="danger" funCall={clear} label="Clear" />
        </div>

        <div className="col-md-12 d-flex justify-content-center">
          <Output name={fullName} />
        </div>
      </form>
    </div>
  );
};

export default Welcome;
