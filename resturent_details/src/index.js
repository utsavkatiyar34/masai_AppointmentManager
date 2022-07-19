import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import './index.css';
import Login from './Login';
import Signup from './Signup'
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import { List } from './List';
import Addappointment from './Addappointment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <React.StrictMode>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<List />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="//addappointment" element={<Addappointment />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
