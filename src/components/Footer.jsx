import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterLogo from "../assets/images/webp/FooterLogo.webp";
import { FacebookLink } from "./IconImg";
import { Twitter } from "./IconImg";
import { Instagram } from "./IconImg";
import { In } from "./IconImg";
import { Telegrame } from "./IconImg";

const Footer = () => {
  return (
    <div className="Bg_Footer mt_2">
      <Container>
        <Row className="align-items-center justify-content-center py_footer">
          <Col lg={6}>
            <img src={FooterLogo} alt="FooterLogo" className="pb-1" />
            <p className="ff-HelveticaNeue fs_6md fw-lighter lh_150 text-white opacity_08 mw_397 mb-0 pt-4 pb-4">
              Rutrum mauris vitae at vitae augue placerat arcu in. Vel in
              elementum tempor enim accumsan enim a magna at. Dolor lorem nisi
              dignissim nulla.
            </p>
            <div className="d-flex gap-3 mt-2">
              <div className="Icon_circle nav_icon d-flex align-items-center justify-content-center">
                <FacebookLink />
              </div>
              <div className="Icon_circle nav_icon d-flex align-items-center justify-content-center">
                <Twitter />
              </div>
              <div className="Icon_circle nav_icon d-flex align-items-center justify-content-center">
                <Instagram />
              </div>
              <div className="Icon_circle nav_icon d-flex align-items-center justify-content-center">
                <In />
              </div>
              <div className="Icon_circle nav_icon d-flex align-items-center justify-content-center">
                <Telegrame />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-lg-end pt-5 pt-lg-0">
              <Col lg={4} className="col-6">
                <ul className="d-flex gap-2 flex-column p-0">
                  <li className="lh_150 ff-HelveticaNeue fs_6md text-white fw-medium">
                    Important Links
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      How It Work
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      New Features
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={4} className="col-6">
                <ul className="d-flex gap-2 flex-column p-0">
                  <li className="lh_150 ff-HelveticaNeue fs_6md text-white fw-medium">
                    Other Links
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff-HelveticaNeue fs_6md fw-lighter opacity_08 lh_150 mb-0 text-white nav_line position-relative"
                      href=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer_line"></div>
      <div className="d-flex justify-content-center py-4 px_12">
        <p className="text-white mb-0 fs_6md fw-lighter ff-HelveticaNeue lh_150">
          Made with Powered by Petstar -
        </p>
        <a
          className="text-white mb-0 text-decoration-underline fs_6md fw-lighter ff-HelveticaNeue lh_150"
          href="https://www.petstar.co.uk/#"
          target="blank"
        >
          DOG GROOMING BUSINESSES & PET SERVICES
        </a>
      </div>
    </div>
  );
};

export default Footer;
