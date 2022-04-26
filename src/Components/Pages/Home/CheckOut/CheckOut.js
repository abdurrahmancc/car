import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceHooks from "../../../Hooks/useServiceHooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/Firebase.init";
import axios from "axios";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { id } = useParams();
  const [service] = useServiceHooks(id);
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      name: user.displayName,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    axios.post("https://still-woodland-48475.herokuapp.com/order", order).then((res) => {
      if (res) {
        toast.success("your order completed");
        e.target.reset();
      }
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>please order: {service?.name}</h1>
      <form onSubmit={handleSubmitInfo}>
        <input
          className="w-100 mb-2"
          value={user?.displayName}
          type="text"
          name="name"
          placeholder="name"
          required
          readOnly
          id=""
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="email"
          placeholder="email"
          value={user?.email}
          required
          readOnly
          id=""
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          placeholder="service"
          value={service?.name}
          required
          readOnly
          id=""
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          autoComplete="off"
          placeholder="address"
          required
          id=""
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone number"
          required
          id=""
        />{" "}
        <br />
        <input type="submit" value="please order" />
      </form>
    </div>
  );
};

export default CheckOut;
