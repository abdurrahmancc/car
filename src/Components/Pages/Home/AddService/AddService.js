import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = "https://still-woodland-48475.herokuapp.com/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("created!!!!");
    reset();
  };
  return (
    <div className="mx-auto w-50">
      <h1 className="text-center">please add a service</h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price", { min: 18, max: 99 })}
        />
        <textarea
          className="mb-2"
          required
          placeholder="description"
          {...register("description")}
        />
        <input className="mb-2" required placeholder="photo URL" {...register("img")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
