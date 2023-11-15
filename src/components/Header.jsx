import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageLogo from "../assets/images/webp/pagelogo.webp";
import Mobile from "../assets/images/webp/Mobile.webp";
import Manager from "../assets/images/webp/EstherHoward.webp";
import { useState } from "react";
import { GreenStar } from "./IconImg";

const Header = () => {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className="bg_header pb-5">
        <Container>
          <div className="d-flex align-items-center justify-content-between py-3 position_fixed z-2 end-0 start-0 px-4 px-xl-0">
            <div className="curser_pointer">
              <img
                src={PageLogo}
                alt="PageLogo"
                className="W-100 mw_175 h-100"
              />
            </div>
            <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
              <li>
                <a
                  className="fs_6sm text-white fw-medium ff-HelveticaNeue nav_line position-relative"
                  href="#home"
                >
                  Home
                </a>{" "}
              </li>
              <li>
                <a
                  className="fs_6sm text-white fw-medium ff-HelveticaNeue nav_line position-relative"
                  href="#Features"
                >
                  Features
                </a>{" "}
              </li>
              <li>
                <a
                  className="fs_6sm text-white fw-medium ff-HelveticaNeue nav_line position-relative"
                  href="#Pricing"
                >
                  Pricing
                </a>{" "}
              </li>
              <li>
                <a
                  className="fs_6sm text-white fw-medium ff-HelveticaNeue nav_line position-relative"
                  href="#FreeTrial"
                >
                  Free Trial
                </a>{" "}
              </li>
              <li>
                <a
                  className="button fs_6md text-white fw-normal ff-HelveticaNeue"
                  href=""
                >
                  Sign In
                </a>{" "}
              </li>
            </ul>
            <div
              onClick={() => setshow(!show)}
              className={`${show ? "" : "cross"} navline`}
            >
              <span className="crl-1"></span>
              <span className="crl-2"></span>
              <span className="crl-3"></span>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="align-items-center justify-content-center pt-5 pb-4">
            <Col lg={6} className="col-12 pt-lg-0 pt-5">
              <h1
                className="text-capitalize text-center text-lg-start fs_xxl text-white fw-bold ff-roboto lh_101 mb-0 pb-1"
                data-aos="fade-right"
              >
                Smart, Simple Software
              </h1>
              <p
                className="mw_558 text-center text-lg-start text-white lh_150 fs_6md ff-HelveticaNeue fw-medium mb-0 pb-4"
                data-aos="fade-right"
              >
                Dog Grooming Software, helping to reduce 'no shows' with
                appointment confirmations, reminders & more.
              </p>
              <div className="d-flex gap_12 pt-2 justify-content-center align-items-center justify-content-lg-start">
                <button
                  className="button text-white fw-normal fs_6md ff-HelveticaNeue"
                  data-aos="fade-right"
                >
                  Free Trial
                </button>
                <button
                  className="explore_btn text-white fw-normal fs_6md ff-HelveticaNeue"
                  data-aos="fade-right"
                >
                  Explore More
                </button>
              </div>
            </Col>
            <Col
              lg={6}
              className="col-12 d-flex justify-content-center align-items-center position-relative"
            >
              <img
                src={Mobile}
                alt="Mobile"
                className="w-100 mw_411"
                data-aos="zoom-in-up"
              />
              <div
                className="Img_box1 Img_box d-flex align-items-center gap-2"
                data-aos="fade-right"
              >
                <img src={Manager} alt="Manager" />
                <div className="d-flex flex-column">
                  <p className="fw-bold ff-HelveticaNeue lh_150 fs_2md text-black mb-0">
                    Esther Howard
                  </p>
                  <p className="fs_8sm ff-HelveticaNeue lh_150 fw-lighter text-black mb-0">
                    Manager
                  </p>
                </div>
              </div>
              <div
                className="Mobile_box Img_box d-flex align-items-center gap-2"
                data-aos="fade-left"
              >
                <GreenStar />
                <div className="d-flex flex-column">
                  <p className="fw-bold ff-HelveticaNeue lh_150 fs_2md text-black mb-0">
                    Theresa Webb
                  </p>
                  <p className="fs_8sm ff-HelveticaNeue lh_150 fw-lighter text-black mb-0">
                    CEO
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
