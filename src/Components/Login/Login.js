import React, { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

import { initializeApp } from "firebase/app";
import "./Login.css";

import firebaseConfig from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
const app = initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordNumber = /([\w+?\W+?]{6})/.test(e.target.value);
      isFormValid = passwordNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        const { displayName, email, password } = res.user;
        let signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: password,
          error: "",
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);

        navigate(from);
      })
      .catch((error) => {
        let signedInUser = {
          isSignedIn: false,
          name: "",
          email: "",
          password: "",
          error: error.message,
          success: false,
        };

        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        console.log(error.message);
      });

    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <NavBrand />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavMenu />
          </Navbar.Collapse>
        </Navbar>
        {loggedInUser.email && (
          <h4
            style={{ textAlign: "center", fontWeight: "500", color: "green" }}
          >
            Hello <span style={{ color: "coral" }}>{loggedInUser.name}</span> ,
            Your account created successfully!
          </h4>
        )}
      </Container>
      <div id="create-login">
        <div className="create-login">
          <h3 className="login-heading">Log In </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
                onBlur={handleBlur}
              />
              {!user.email && <p className="error">Invalid email.</p>}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                onBlur={handleBlur}
              />
              {!user.password && <p className="error">Invalid password.</p>}
            </Form.Group>
            <span className="text-muted" style={{ fontSize: "12px" }}>
              Password should be in 6 characters including capital & small
              letters,numeric and literal charecters.
            </span>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Form.Check type="checkbox" label="Remember me" />
              <span style={{ color: "#f39c12" }}>Forgot your password?</span>
            </Form.Group>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <div style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <span style={{ color: "#f39c12" }}>
              <Link style={{ textDecoration: "none" }} to="/createaccount">
                Create an account
              </Link>
            </span>
          </div>
        </div>

        <div className="social-login">
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
