import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

import "./CreateAccout.css";
import NavBrand from "../AllNav/Navigation/NavBrand/NavBrand.js";
import NavMenu from "../AllNav/Navigation/NavMenu/NavMenu.js";

const CreateAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  // const handleBlur = (e) => {
  //   e.preventtDefault();
  //   console.log("Validate");
  // };
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
                // onBlur={handleBlur}
              />
            </Form.Group>

            <Form.Group controlId="validationCustomUsername">
              <Form.Label>Username or email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>

            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  // onBlur={handleBlur}
                  name="password"
                  type="password"
                  placeholder="psaaword"
                  required
                />
                <span className="text-muted" style={{ fontSize: "12px" }}>
                  Password should be in 6 characters with at least one numeric
                  digit.
                </span>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  // onBlur={handleBlur}
                  name="confirmPassword"
                  type="password"
                  placeholder="psaaword"
                  required
                />
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
                <Button variant="warning" type="submit">
                  Create account
                </Button>
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
