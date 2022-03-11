import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";

import google from "../images/social/google.png";
import "./GoogleSignIn.css";

const app = initializeApp(firebaseConfig);

const GoogleSignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        let signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          success: true,
          error: "",
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        let signedInUser = {
          isSignedIn: false,
          name: "",
          email: "",
          success: false,
          error: errorMessage,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div className="social-login">
      <span className="or">Or</span>
      <button onClick={handleGoogleSignIn}>
        <div>
          {" "}
          <img style={{ width: "10%" }} src={google} alt="google" />{" "}
        </div>{" "}
        <div className="social-text-google">
          {" "}
          <>Continue with google</>
        </div>
      </button>
    </div>
  );
};

export default GoogleSignIn;
