import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import "./TransPort.css";
const Transport = (props) => {
  const { vechileId, vechileCategory, vehicleImage } = props.trans;

  return (
    <Col md={3}>
      <Link to={"/booking/" + vechileId}>
        <div className="vehicle-img-wrapper">
          <img className="vehicle-img" src={vehicleImage} alt="vehicleImage" />
          <div class="overlay">
            <div class="text">{vechileCategory}</div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Transport;
