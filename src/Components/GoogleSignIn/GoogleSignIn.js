import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";

import VehicleData from "../../VehicleData/VehicleData";
import google from "../../images/social/google.png";
import "./GoogleSignIn.css";

const app = initializeApp(firebaseConfig);

const GoogleSignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const { transportID } = useParams();
  let { from } = location.state || { from: { pathname: "/" } };

  const selectedTransport = VehicleData.find(
    (trans) => trans.vechileId === transportID
  );
  // console.log(selectedTransport, transportID);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          success: true,
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
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div className="social-login">
      <span className="or">Or</span>
      <p onClick={handleGoogleSignIn}>
        <span>
          {" "}
          <img src={google} alt="google" />{" "}
        </span>{" "}
        <span className="social-text-google">
          {" "}
          <Link
            style={{ textDecoration: "none" }}
            to={"/booking/" + selectedTransport}
          >
            Continue with google
          </Link>
        </span>
      </p>
    </div>
  );
};

export default GoogleSignIn;

//<FontAwesomeIcon icon="fa-brands fa-google" />
