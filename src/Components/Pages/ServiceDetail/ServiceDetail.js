import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">welcome to our service {service.name}</h1>
      <div className="text-center">
        <Link to={"/checkout"}>
          <button className="btn btn-primary mt-5">Proceed CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
