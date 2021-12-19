import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { Button, Container } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import Lightbox from "../Lightbox";
import "../Space/index.css";

import Reservations from "../Reservations";
import { MapContainer } from "../Map";

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

      <SimpleReactLightbox>
        <Lightbox />
      </SimpleReactLightbox>
      <Container className="book-space">
        <h4>BRH ASSOCIATE CENTER TG002 </h4>
        <p>
          GB 2, Hyndava Technopark, Huda Techno Enclave, Hyderabad, Telangana -
          500001, India
        </p>
        <h4 className="timing">Monday - Saturday : 09:00 - 19:00 </h4>
        <Button variant="outline-warning">Book Space</Button>
        <hr />
        <h4 className="timing">About BRH Associate Center TG002</h4>
        <p p className="desc">
          Premium Co Working Space Currently we are based in Hyderabad, soon
          another co working center will be coming up in Mumbai.
        </p>

        <Reservations />
        <div>
          <h6>Amenities</h6>
          <div className="aminities-container">
            <div className="aminities">
              <input type="checkbox" readonly checked />
              <label for="Wi-Fi / Shared Internet">Air-conditioning</label>
            </div>
            <div>
              <input type="checkbox" readonly checked />
              <label for="Wi-Fi / Shared Internet">Pantry / Cafe</label>
            </div>
            <div>
              <input type="checkbox" readonly checked />
              <label for="Wi-Fi / Shared Internet">Parking</label>
            </div>
            <div>
              <input type="checkbox" readonly checked />
              <label for="Wi-Fi / Shared Internet">Print / Photocopy</label>
            </div>
            <div>
              <input type="checkbox" readonly checked />
              <label for="Wi-Fi / Shared Internet">
                Wi-Fi / Shared Internet
              </label>
            </div>
          </div>
          <div className="map">
            <MapContainer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Space;
