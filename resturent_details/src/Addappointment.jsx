import React, { useState, useEffect } from "react";
import "./addappointment.css";
import axios from "axios";
import { v4 } from "uuid";

export default function Addappointment() {
  const [data, setData] = useState({
    id: v4(),
    name: "",
    age: "",
    gender: "",
    details: "",
    time: "",
    date: "",
  });
  let handleInput = (val) => {
    const key = val.target.name;
    const value = val.target.value;
    setData({ ...data, [key]: value });
  };
  let handleClick = () => {
    axios.post('http://localhost:3006/appointments', {...data})
    .then(function (response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}
  return (
    <div className="addform">
      <input
        name="name"
        onChange={handleInput}
        value={data.name}
        type="text"
        placeholder="Enter Name"
      ></input>
      <input
        name="age"
        onChange={handleInput}
        value={data.age}
        type="number"
        placeholder="Enter Age (eg. 1,2,3...)"
      ></input>
      <input
        name="gender"
        onChange={handleInput}
        value={data.gender}
        type="text"
        placeholder="Enter Gender"
      ></input>
      <input
        name="details"
        onChange={handleInput}
        value={data.details}
        type="text"
        placeholder="Enter Appointment Details"
      ></input>
      <input
        name="time"
        onChange={handleInput}
        value={data.time}
        type="time"
        placeholder="Enter Time"
      ></input>
      <input
        name="date"
        onChange={handleInput}
        value={data.date}
        type="date"
        placeholder="Enter Date"
      ></input>
      <button onClick={handleClick}>Add Appointment</button>
    </div>
  );
}
