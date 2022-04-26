import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Loading from "./Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [users] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("https://still-woodland-48475.herokuapp.com/login", {
      email,
    });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  if (users) {
    // navigate(from, { replace: true });
  }

  const passwordReset = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-center">Please LogIn</h1>
      <div className="mx-auto w-50">
        <PageTitle title={"login"}></PageTitle>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="rounded-pill w-25 py-2" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div>
          {error && <p className="text-danger text-center">Error: {error.message}</p>}
          {loading && <p>Loading...</p>}
        </div>
        <div>
          <p className="">
            New to Genius car?{" "}
            <Link className="text-decoration-none" to={"/register"}>
              Please Register
            </Link>
          </p>
          <p className="">
            Forget Password?
            <button className="text-decoration-none btn-link btn" onClick={passwordReset}>
              Reset Password
            </button>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
