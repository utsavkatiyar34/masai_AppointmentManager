import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

export const List = () => {
        const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:3006/appointments")
      .then((response) => setData(response.data));
  };
  useEffect(() => {
        fetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </>
  );
};