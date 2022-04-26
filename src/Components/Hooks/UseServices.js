import React, { useEffect, useState } from "react";

const UseServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://still-woodland-48475.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default UseServices;
