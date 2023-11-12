import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Righttickicon } from "./IconImg";
import { Togglebtn } from "./IconImg";

const Pricingplan = () => {
  return (
    <div id="Pricing" className="price-padd">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2
            className="mb-0 ff-roboto fs_8xl fw-medium lh_111 text-center text_black12"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Pricing Plan
          </h2>
          <p
            className="mb-0 ff-HelveticaNeue fs_6md fw-light lh-160 text-center text_black12 mw-509 pt-2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Our Subscriptions, simple, flexible and designed for your business
            needs.
          </p>
        </div>
        <div
          className="d-flex align-items-center justify-content-center gap-3 pt-3 card-padd"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <p className="mb-0 ff-roboto fs_4md fw-bold text_blue5">£ GBP</p>
          <Togglebtn />
          <p className="mb-0 ff-roboto fs_4md fw-normal text-black opacity_07">
            $ USD
          </p>
        </div>
        <Row className="justify-content-center">
          <Col
            xl={3}
            lg={4}
            md={6}
            className="px-0 px-2 d-flex align-items-center justify-content-center"
          >
            <div
              className="pricewhite-card d-flex justify-content-between flex-column"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="">
                <h3 className="mb-0 ff-roboto fs_md fw-medium text_black12 lh_111 pb-1">
                  Free
                </h3>
                <p className="mb-0 ff-HelveticaNeue fs_6md fw-light text_black12 opacity_07">
                  Great To Get You Started
                </p>
                <p className="mb-0 ff-roboto fs_2lg fw-bold text_black12 col-hov lh_111 pt-4 pb-3 tr-linear">
                  £0<span className="mb-0 fs_6md fw-normal">/per month</span>
                </p>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Single User
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Single Resource
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    150 Clients
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Appointments
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center btn_padd">
                <button className="btn-get ff-roboto fs_md fw-normal text_black12 w-100 d-flex align-items-center justify-content-center">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            lg={4}
            md={6}
            className="pt-md-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center"
          >
            <div
              className="pricewhite-card yell-box position-relative d-flex justify-content-between flex-column"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="">
                <h3 className="mb-0 ff-roboto fs_md fw-medium text_black12 lh_111 pb-1">
                  Starter Plus
                </h3>
                <p className="mb-0 ff-HelveticaNeue fs_6md fw-light text_black12 opacity_07">
                  Business Essentials
                </p>
                <p className="mb-0 ff-roboto fs_2lg fw-bold text_black12 col-hov lh_111 pt-3 pb-3 tr-linear">
                  £15<span className="mb-0 fs_6md fw-normal">/per month</span>
                </p>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Single User
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Single Resource
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Single User
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Appointments
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Custom Pet Breeds
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    SMS Reminders
                  </p>
                </div>
                <p className="mb-0 ff-HelveticaNeue fs_3md fw-bold lh-130 ls-65 text-black pt-3">
                  100 SMS Credits
                </p>
              </div>
              <div className="d-flex justify-content-center btn_padd">
                <button className="btn-get ff-roboto fs_md fw-normal text_black12 w-100 d-flex align-items-center justify-content-center">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            lg={4}
            md={6}
            className="pt-lg-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center"
          >
            <div
              className="pricewhite-card yell-box position-relative d-flex justify-content-between flex-column"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="">
                <h3 className="mb-0 ff-roboto fs_md fw-medium text_black12 lh_111 pb-1">
                  Premier
                </h3>
                <p className="mb-0 ff-HelveticaNeue fs_6md fw-light text_black12 opacity_07">
                  Ideal For Busy Businesses
                </p>
                <p className="mb-0 ff-roboto fs_2lg fw-bold text_black12 col-hov lh_111 pt-3 pb-3 tr-linear">
                  £25<span className="mb-0 fs_6md fw-normal">/per month</span>
                </p>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Multi User
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Multi Resource
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Clients
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Appointments
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Custom Pet Breeds
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Email Confirmations & Reminders
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Email Marketing
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Online Booking
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Electronic Contracts
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Mobile App
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Reporting
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Support
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center btn_padd">
                <button className="btn-get ff-roboto fs_md fw-normal text_black12 w-100 d-flex align-items-center justify-content-center">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            lg={4}
            md={6}
            className="pt-xl-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center"
          >
            <div
              className="pricewhite-card yell-box position-relative d-flex justify-content-between flex-column"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div>
                <h3 className="mb-0 ff-roboto fs_md fw-medium text_black12 lh_111 pb-1">
                  Premier Plus
                </h3>
                <p className="mb-0 ff-HelveticaNeue fs_6md fw-light text_black12 opacity_07">
                  Unlimited Possibilities
                </p>
                <p className="mb-0 ff-roboto fs_2lg fw-bold text_black12 col-hov lh_111 pt-3 pb-3 tr-linear">
                  £37<span className="mb-0 fs_6md fw-normal">/per month</span>
                </p>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Multi User
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Multi Resource
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Clients
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Unlimited Appointments
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Custom Pet Breeds
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Email Confirmations & Reminders
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Email Marketing
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Online Booking
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Electronic Contracts
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Mobile App
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pb-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Reporting
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Righttickicon />
                  <p className="mb-0 ff-HelveticaNeue fs_3md fw-light lh-130 ls-65 text-black opacity_07">
                    Support
                  </p>
                </div>
                <p className="mb-0 ff-HelveticaNeue fs_3md fw-bold lh-130 ls-65 text-black pt-3">
                  100 SMS Credits
                </p>
              </div>
              <div className="d-flex justify-content-center btn_padd">
                <button className="btn-get ff-roboto fs_md fw-normal text_black12 w-100 d-flex align-items-center justify-content-center">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricingplan;
