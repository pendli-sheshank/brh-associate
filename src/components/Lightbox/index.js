import React from "react";
import { Container } from "react-bootstrap";
import data from "../../Images";
import { SRLWrapper } from "simple-react-lightbox";
import "./index.css";

const Lightbox = () => {
  return (
    <SRLWrapper>
      <Container>
        <Container className="images-container">
          {data.map((img) => (
            <Container className="images">
              <img className="image-thumb" src={img.src} alt="name" />
            </Container>
          ))}
        </Container>
      </Container>
    </SRLWrapper>
  );
};

export default Lightbox;
