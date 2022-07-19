import React, { useState, useEffect } from "react";
import "./signup.css";
import axios from "axios";
import { v4 } from "uuid";

export default function Addappointment() {
  const [userdata, setUserData] = useState({
    id: v4(),
    name: "",
    email: "",
    PassWord: "",
  });
  let handleInput = (val) => {
    const key = val.target.name;
    const value = val.target.value;
    setUserData({ ...userdata, [key]: value });
  };
  let handleClick = () => {
    axios.post('http://localhost:3006/users', {...userdata})
    .then(function (response){
        console.log(response);
        if(response.status==201){
          alert("Signup Successful");
        }
    })
    .catch(function(error){
        console.log(error);
    });
}
  return (
    <div className="signupform">
      <input
        name="name"
        onChange={handleInput}
        value={userdata.name}
        type="text"
        placeholder="Enter Name"
      ></input>
      <input
        name="email"
        onChange={handleInput}
        value={userdata.email}
        type="text"
        placeholder="Enter Email"
      ></input>
      <input
        name="PassWord"
        onChange={handleInput}
        value={userdata.PassWord}
        type="password"
        placeholder="Enter Password"
      ></input>
      <button onClick={handleClick}>Signup</button>
    </div>
  );
}
