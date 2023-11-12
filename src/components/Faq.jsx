import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NewIdea } from "./IconImg";
import { ContactSvg } from "./IconImg";
import FooterWave from "../assets/images/webp/FooterWave.webp";

const Faq = () => {
  return (
    <div className="position-relative pb_faq">
      <img
        src={FooterWave}
        alt="FooterWave"
        className="position-absolute w-100 bottom-0 end-0"
      />
      <Container>
        <h2
          className="fs_8xl text-black fw-medium lh_111 ff-roboto mb-0 pb-4 text-lg-start text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          FAQ’s
        </h2>
        <Row className="align-items-center justify-content-lg-between justify-content-center">
          <Col lg={7}>
            <div
              className="accordion accordion-flush pt-3"
              id="accordionFlushExample"
            >
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ff-HelveticaNeue fw-medium fs_6md text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Do you have a mobile app?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse ff-HelveticaNeue fw-lighter fs_6md text-black opacity_08 mw_596"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ff-HelveticaNeue fw-medium fs_6md text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Do you support start-up business?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse ff-HelveticaNeue fw-lighter fs_6md text-black opacity_08 mw_596"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ff-HelveticaNeue fw-medium fs_6md text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    I’ve used up all my monthly SMS credits, can I buy more?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse ff-HelveticaNeue fw-lighter fs_6md text-black opacity_08 mw_596"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ff-HelveticaNeue fw-medium fs_6md text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What do I need to access the system?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse ff-HelveticaNeue fw-lighter fs_6md text-black opacity_08 mw_596"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ff-HelveticaNeue fw-medium fs_6md text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Can you import my data?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse ff-HelveticaNeue fw-lighter fs_6md text-black opacity_08 mw_596"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="col-10 pt-4 pt-lg-0">
            <div className="help_box">
              <p
                className="ff-roboto fs_2lg lh_111 fw-medium text-black text-center mb-0 pb-2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Need help?
              </p>
              <p
                className="fs_6md ff-HelveticaNeue lh_150 opacity_08 text-black fw-lighter text-center mb-0 pb-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Ask our support team
              </p>
              <div
                className="help_btn d-flex gap-2 align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <NewIdea />
                <p className="text-white fs_6md fw-normal ff-roboto mb-0 text-nowrap">
                  New Idea?
                </p>
              </div>
              <div
                className="help_btn d-flex gap-2 align-items-center justify-content-center mt-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <ContactSvg />
                <p className="text-white fs_6md fw-normal ff-roboto mb-0 text-nowrap">
                  Contact Us
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
