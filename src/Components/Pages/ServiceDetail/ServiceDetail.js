import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceHooks from "../../Hooks/useServiceHooks";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service] = useServiceHooks(id);

  return (
    <div>
      <h1 className="text-center">welcome to our service {service.name}</h1>
      <div className="text-center">
        <Link to={`/checkout/${id}`}>
          <button className="btn btn-primary mt-5">Proceed CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
