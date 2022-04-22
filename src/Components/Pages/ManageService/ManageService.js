import React from "react";
import UseServices from "../../Hooks/UseServices";

const ManageService = () => {
  const [services, setServices] = UseServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure ");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <h1>manage your service</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h1>
            {service.name} <button onClick={() => handleDelete(service._id)}>x</button>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
