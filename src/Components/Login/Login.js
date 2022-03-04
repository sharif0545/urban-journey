import React, { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

import { initializeApp } from "firebase/app";
import "./Login.css";

import firebaseConfig from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu";
const app = initializeApp(firebaseConfig);

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [vehicles, setVehicles] = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          {/* <Container className=""> */}
          <NavBrand />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavMenu />
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
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
              />
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
              />
            </Form.Group>
            <span className="text-muted" style={{ fontSize: "12px" }}>
              Password should be in 6 characters with at least one numeric
              digit.
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
