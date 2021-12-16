import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { Button, Container } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import Lightbox from "../Lightbox";

import "./index.css";

const Space = () => {
  return (
    <div>
      <Container className="heading-container">
        <div>
          <h4 className="heading">BRH Associate Center TN056</h4>
        </div>
        <div className="button-container">
          <Button variant="outline-warning">Back</Button>
          <a href="#share" className="share">
            <FaShareAlt />
          </a>
        </div>
      </Container>
      <hr className="line" />
      <SimpleReactLightbox>
        <Lightbox />
      </SimpleReactLightbox>
    </div>
  );
};

export default Space;
