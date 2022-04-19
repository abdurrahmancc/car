import React, { useState } from "react";
import Direction from "../Direction/Direction";

const GoogleMap = () => {
  /* api kay: "AIzaSyCnTNyt605g57kJPICxBtiCc0AwmHBRbI4" */
  const [info, setInfo] = useState({ start: "", end: "" });
  const handleInput = (e) => {
    e.preventDefault();
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;
    setInfo({ start: origin, end: destination });
  };

  return (
    <div className="text-center mt-4">
      <form onSubmit={handleInput}>
        <input className="me-2" type="text" name="origin" placeholder="origin" id="" />

        <input className="me-2" type="text" name="destination" placeholder="destination" id="" />

        <input className="mb-2" type="submit" value="search" />
      </form>
      <Direction info={info}></Direction>
    </div>
  );
};

export default GoogleMap;
