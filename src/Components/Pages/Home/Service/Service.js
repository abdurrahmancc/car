import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, price, img, description } = service;
  const navigate = useNavigate();

  //optional
  // const handleparams = (id) => {
  //   navigate("/service/" + id);
  // };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{price}</p>
          <p className="card-text">{description}</p>
          {/* <button className="btn btn-primary" onClick={() => navigate("/service/" + id)}> */}
          {/* </button> */} {/* optional */}
          <Link className="btn btn-primary" to={`/service/${_id}`}>
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
