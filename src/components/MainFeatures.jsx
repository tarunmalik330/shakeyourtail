import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Pets } from "./IconImg";
import { Schedule } from "./IconImg";
import { Nortification } from "./IconImg";
import { Blueflower } from "./IconImg";
import { Orangeflower } from "./IconImg";
import { Yellowflower } from "./IconImg";

const MainFeatures = () => {
  return (
    <div id="Features" className="bg-white pt_90">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={3}>
            <div
              className="Clients_card mb-4 position-relative"
              data-aos="zoom-out-up"
            >
              <div className="position-absolute purple-flower">
                <Blueflower />
              </div>
              <Pets />
              <p className="lh_111 fs_6md ff-roboto fw-medium text-black mb-0 pb-2 pt-1">
                Clients & Pets
              </p>
              <p className=" fs_6md fw-lighter text-black ff-HelveticaNeue lh_150 opacity_07 mb-0">
                Managing your Clients and their Pets is effortless; Record their
                details, add emergency contacts, Medical Notes, Grooming notes,
                view their appointment history, set alerts and much more…
              </p>
            </div>
            <div
              className="Notification_card position-relative mt-2 mb-4 mb-lg-0"
              data-aos="zoom-out-up"
            >
              <div className="position-absolute purple-flower">
                <Orangeflower />
              </div>
              <Nortification />
              <p className="lh_111 fs_6md ff-roboto fw-medium text-black mb-0 pb-2 pt-1">
                Notifications & Reminders
              </p>
              <p className=" fs_6md fw-lighter text-black ff-HelveticaNeue lh_150 opacity_07 mb-0">
                We’ll take the strain by automatically sending your Clients,
                their appointment reminders, confirmations, ‘Miss You’s and No
                Shows, by text or email.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className="Schedule_card mt-2 position-relative"
              data-aos="zoom-out-up"
            >
              <div className="position-absolute purple-flower">
                <Yellowflower />
              </div>
              <Schedule />
              <p className="lh_111 fs_6md ff-roboto fw-medium text-black mb-0 pb-2 pt-1">
                Schedule
              </p>
              <p className=" fs_6md fw-lighter text-black ff-HelveticaNeue lh_150 opacity_07 mb-0">
                Powerful and easy to use, book appointments to your team members
                and view your colour coded schedule, ‘at a glance’.
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-around align-items-center pb-5 pb-lg-0"
          >
            <div>
              <h2
                className=" lh_111 text-black fw-normal ff-HelveticaNeue fs_8xl mb-0 pb-3"
                data-aos="zoom-out-down"
              >
                Main Features
              </h2>
              <p
                className="lh_160 fs_6md ff-HelveticaNeue text-black fw-lighter opacity_07 mb-0 pb-2 mw_480"
                data-aos="zoom-out-down"
              >
                ShakeYourTail is an trusted dog grooming software based in the
                cloud; Client, appointment, scheduling and document management
                service.
              </p>
              <p
                className="lh_160 fs_6md ff-HelveticaNeue text-black fw-lighter opacity_07 mb-0 pb-2 mw_480"
                data-aos="zoom-out-down"
              >
                Great for Salons & Groomers on the move; Run it on your PC,
                laptop, Ipad, Tablet or Mobile with a standard internet
                connection.
              </p>
              <p
                className="lh_160 fs_6md ff-HelveticaNeue text-black fw-lighter opacity_07 mb-0 pb-2 mw_480"
                data-aos="zoom-out-down"
              >
                Store everything in one place and leave the tech stuff to us.
              </p>
              <p
                className="lh_160 fs_6md ff-HelveticaNeue text-black fw-lighter opacity_07 mb-0 pb-2 mw_480"
                data-aos="zoom-out-down"
              >
                We provide a complete service solution, giving you peace of
                mind, we support, secure, update and keep your data, all safely
                backed up.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainFeatures;
