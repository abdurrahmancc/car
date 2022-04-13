import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../../Firebase/Firebase.init";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
    // navigate("/home");
  }

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 || e.code === "Enter") {
      handleRegisterSubmit();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="register-form">
        <h1 className="text-center">Please Register</h1>
        <form onSubmit={handleRegisterSubmit}>
          <span>Your Full Name</span>
          <input type="text" placeholder="Your full name" name="name" id="" />
          <br />
          <span>Your Email</span>
          <input type="email" placeholder="Enter your email" required name="email" id="" />
          <br />
          <span>Your Password</span>
          <input
            type="password"
            onClick={handleEnterPress}
            placeholder="Enter your Password"
            required
            name="password"
            id=""
          />
          <br />
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-decoration-none" to={"/login"}>
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
