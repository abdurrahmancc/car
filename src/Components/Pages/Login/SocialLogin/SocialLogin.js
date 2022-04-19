import React from "react";
import logo from "../../../images/Social/google-logo.png";
import facebook from "../../../images/Social//facebook.png";
import gitHub from "../../../images/Social//github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const [signInWitGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (user || user1) {
    navigate("/home");
    toast.success("Successfully created!", { id: "success" });
  }
  if (error || error1) {
    toast.error(error?.message || error1?.message, { id: "error" });
  }
  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className=" bg-dark w-50"></div>
        <p className="mt-3 px-3">or</p>
        <div style={{ height: "1px" }} className=" bg-dark w-50"></div>
      </div>
      <div>
        {error && <p className="text-danger text-center">Error: {error.message}</p>}
        {error1 && <p className="text-danger text-center">Error: {error1.message}</p>}
        {loading1 && <p>Loading...</p>}
      </div>
      <div>
        <button
          onClick={() => signInWitGoogle()}
          className="btn btn-light border-dark py-2 my-2 w-100 rounded-pill"
        >
          {" "}
          <img className="mx-2" src={logo} alt="Google Logo" /> CONTINUE WITH Google
        </button>
        <button className="btn btn-light border-dark py-2 w-100 my-2 rounded-pill">
          {" "}
          <img className="mx-2" src={facebook} alt="Google Logo" /> CONTINUE WITH FACEBOOK
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-light border-dark py-2 w-100 my-2 rounded-pill"
        >
          {" "}
          <img className="mx-2" src={gitHub} alt="Google Logo" /> CONTINUE WITH GITHUB
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
