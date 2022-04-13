import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-center">welcome to our service {id}</h1>
      <div className="text-center">
        <Link to={"/checkout"}>
          <button className="btn btn-primary mt-5">Proceed CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
