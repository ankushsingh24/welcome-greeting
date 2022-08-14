import React from "react";
import { useState } from "react";
import "./Welcome.css";
import Button from "../components/Button";
import Input from "../components/Input";
import Output from "../components/Output";

const Welcome = () => {
  let [Fname, setFname] = useState("");
  let [Lname, setLname] = useState("");
  // let [template, setTemplate] = useState("");
  let [fullName, setfullName] = useState("");

  const getFname = (e) => {
    setFname(e.target.value);
  };

  const getLname = (e) => {
    setLname(e.target.value);
  };

  // const getTemplate = () => {
  //   setTemplate("Welcome to my Website ");
  // };

  const display = () => {
    setfullName(`Hello ${Fname} ${Lname} !!! Welcome to my Website`);
  };

  const clear = () => {
    setFname("");
    setLname("");
    setfullName("");
  };

  return (
    <div className="container mt-5">
      <form action="#" className="row g-3">
        <h1 className="col-md-12 d-flex justify-content-center">
          Welcome Page
        </h1>
        <div className="col-md-6">
          <Input funCall={getFname} label="First Name" />
        </div>
        <div className="col-md-6">
          <Input funCall={getLname} label="Last Name" />
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
