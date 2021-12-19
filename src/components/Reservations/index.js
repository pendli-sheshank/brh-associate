import React from "react";
import { Button, Container } from "react-bootstrap";
import reservatons from "../../ReservationsData";
import "./index.css";

const Reservations = () => {
  return (
    <div className="reservation-container">
      <h4>Reservations Plans</h4>
      <hr />
      <div className="bg-card">
        {reservatons.map((reser) => (
          <div className="bg">
            <div className="img-container">
              <img
                className="reservation-images"
                src={reser.src}
                alt="images"
              />
            </div>
            <Container>
              <h6>{reser.name}</h6>
              <p>{reser.duration}</p>
              <p>{reser.price}</p>
              <Button variant="outline-warning">{reser.book}</Button>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
