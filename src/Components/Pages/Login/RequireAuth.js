import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast, { ToastBar } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "./Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // console.log(user);
  if (user?.providerData[0]?.providerId === "password" && !user?.emailVerified) {
    return (
      <div>
        <h5 className="text-danger">your email is not verified</h5>
        <h4>please verified your email {user?.email}</h4>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
