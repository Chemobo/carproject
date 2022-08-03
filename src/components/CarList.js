import React, { useState, useEffect } from "react";
import Car from "./Car";
// fetch data
const API_URL = "https://carjay.herokuapp.com/cars";

function CarList() {
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((actualData) => setCounter(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
//map array of cars
  const carName = counter.map((count) => {
    return <Car key={count.id} count={count} />;
  });

  return <div>{carName}</div>;
}

export default CarList;
