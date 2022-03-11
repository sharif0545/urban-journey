import React, { useContext, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./CreateAccout.css";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand.js";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu.js";
import { UserContext } from "../../App";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

const app = initializeApp(firebaseConfig);
const CreateAccount = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setnewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });

  const updateUserName = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("User name updated successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "name") {
      const isNameValid = e.target.value.length < 20;
      isFormValid = isNameValid;
    }
    if (e.target.name === "email") {
      isFormValid = /^\S+@\S+$/i.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordNumber = /([\w+?\W+?]{6})/.test(e.target.value);
      isFormValid = passwordNumber;
    }
    if (e.target.name === "confirmPassword") {
      const passwordConfirmNumber = /([\w+?\W+?]{6})/.test(e.target.value);
      isFormValid = passwordConfirmNumber;
    }
    if (isFormValid) {
      let newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.isSignedIn = true;
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          updateUserName(user.name);

          navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;

          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          newUserInfo.isSignedIn = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(errorMessage);
        });
    }
    if (!newUser && user.email && user.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.isSignedIn = true;
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);

          navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          newUserInfo.isSignedIn = false;

          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Container className="">
            <NavBrand />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <NavMenu />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <div id="create-account">
        <div className="account-main">
          <h3 className="account-heading">Create an account</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Your name"
                onBlur={handleBlur}
              />
              {!user.name && (
                <p className="error">
                  Name length should be maximum 20 charecters.
                </p>
              )}
            </Form.Group>

            <Form.Group controlId="validationCustomUsername">
              <Form.Label>Username or email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  name="email"
                  required
                  type="text"
                  placeholder="User email"
                  aria-describedby="basic-addon1"
                  onBlur={handleBlur}
                />
              </InputGroup>

              {!user.email && <p className="error">Email should be valid.</p>}
            </Form.Group>

            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="psaaword"
                  required
                  onBlur={handleBlur}
                />

                {!user.password && (
                  <p className="error">
                    {" "}
                    Password should be al least 6 characters including capital &
                    small letters,numeric and symbolic.
                  </p>
                )}
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="psaaword"
                  required
                  onBlur={handleBlur}
                />
                {!user.confirmPassword && (
                  <p className="error">
                    {" "}
                    Confirm password should be same as given password.
                  </p>
                )}
                <Form.Control.Feedback type="invalid">
                  Please confirm given password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>

              <div className="d-grid">
                <button className="btn btn-warning" type="submit">
                  Create account
                </button>
              </div>

              <div className="already">
                Already have an account?{" "}
                <span>
                  <Link to="/login">Log In</Link>
                </span>
              </div>
            </Row>
          </Form>
        </div>

        <div className="social-login">
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
