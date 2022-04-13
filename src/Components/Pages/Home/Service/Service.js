import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();

  //optional
  // const handleparams = (id) => {
  //   navigate("/service/" + id);
  // };

  return (
    <div className="col-lg-4 col-md-6">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p>{price}</p>
          <p class="card-text">{description}</p>
          {/* <button class="btn btn-primary" onClick={() => navigate("/service/" + id)}> */}
          {/* </button> */} {/* optional */}
          <Link class="btn btn-primary" to={`/service/${id}`}>
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
