import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://still-woodland-48475.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section id="service" className="container ">
      <div className="mx-auto" style={{ maxWidth: "62rem" }}>
        <div className="services-container row g-5 ">
          <h1 className="services-title expert-title">Our Services</h1>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
