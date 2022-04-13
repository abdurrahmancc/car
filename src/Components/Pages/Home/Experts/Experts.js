import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
import "./Experts.css";

const Experts = () => {
  const experts = [
    { id: "1", name: "maan kha", img: expert1 },
    { id: "2", name: "panna kha", img: expert2 },
    { id: "3", name: "pani kha", img: expert3 },
    { id: "4", name: "jolil kha", img: expert4 },
    { id: "5", name: "sabana kha", img: expert5 },
    { id: "6", name: "purnima kha", img: expert6 },
  ];
  return (
    <div id="" className="container">
      <div className="mx-auto" style={{ maxWidth: "62rem" }}>
        <div className="row g-5">
          <h1 className="text-center expert-title">Our Experts</h1>
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
