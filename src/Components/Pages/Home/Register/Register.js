import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../../Firebase/Firebase.init";
import toast from "react-hot-toast";

const Register = () => {
  const [agree, setAgree] = useState(false);
  // const [textDanger, setTextDanger] = useState("");
  /*   const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef(""); */
  const [users] = useAuthState(auth);
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const checkbox = e.target.terms.checked;
    console.log(number);
    /*     if (checkbox) {
      setTextDanger("text-black");
    } */
    /*     if (checkbox) {
      createUserWithEmailAndPassword(email, password);
    } */

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumber: number });

    /*  if (agree) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setTextDanger("text-danger");
    } */
  };

  // if (user) {
  //   navigate(from, { replace: true });
  //   // navigate("/home");
  //   console.log("user", user);
  // }
  if (users) {
    navigate(from, { replace: true });
  }

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 || e.code === "Enter") {
      handleRegisterSubmit();
    }
  };
  if (loading) {
    toast.loading("Loading...", { id: "loading1" });
  }
  if (error) {
    toast.dismiss("loading1");
    toast.error(error.message, { id: "error1" });

    /* if (error.message.includes("Firebase: Error (auth/email-already-in-use)"))
      toast.error("You already have an account", { id: "error1" }); */
  }

  return (
    <div className="container mx-auto">
      <div className="register-form">
        <h1 className="text-center">Please Register</h1>
        <form onSubmit={handleRegisterSubmit}>
          <span>Your Full Name</span>
          <input type="text" placeholder="Your full name" name="name" id="" />
          <br />
          <span>Your Number</span>
          <input type="text" placeholder="Your Phone Number" name="number" id="" />
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
          <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          {/* <label className={` ms-2 ${agree || "text-danger"}`} htmlFor="terms"> */}
          {/* <label className={` ms-2 ${!textDanger || textDanger}`} htmlFor="terms"> */}
          <label htmlFor="terms">Accept Genius Car terms & Condition</label>
          <br />
          <br />
          <input disabled={!agree} type="submit" value="Register" />
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
