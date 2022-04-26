import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../../Api/AxiosPrivet";
import auth from "../../../Firebase/Firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      const email = user.email;
      const url = `https://still-woodland-48475.herokuapp.com/orders?email=${email}`;

      try {
        const { data } = await axiosPrivet.get(url);
        setOrders(data);
      } catch (error) {
        if (
          error.response.status === 500 ||
          error.response.status === 401 ||
          error.response.status === 500
        ) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder();
  }, [user]);
  return (
    <div className="w-50 mx-auto text-center">
      <h1>your orders {orders.length}</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>
            {order.email}: {order.service}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
