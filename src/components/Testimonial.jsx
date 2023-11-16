import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialImg from "../assets/images/webp/Testimonial_img.webp";
import DogImg from "../assets/images/webp/DogImg.webp";
import { YellowStar } from "./IconImg";
import { LeftArrow } from "./IconImg";
import { RightArrow } from "./IconImg";

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = React.useRef(null);
  return (
    <div id="Testimonials">
      <Container className="py_Testmonial">
        <h2 className="text-black ff-roboto fs_8xl lh_111 mb-0 text-center fw-medium pb_100">
          Testimonial
        </h2>
        <Row>
          <Col lg={6}>
            <img
              src={TestimonialImg}
              alt="TestimonialImg"
              className="w-100 mw_577"
              data-aos="zoom-out-right"
            />
          </Col>
          <Col lg={6} className="pt-lg-0 position-relative pt-4">
            <Slider ref={slider} {...settings}>
              <div>
                <img src={DogImg} alt="DogImg" data-aos="zoom-out-right" />
                <p
                  className="text-black ff-HelveticaNeue fs_6md lh_150 fw-lighter opacity_08 mb-0 pt-3 pb-2"
                  data-aos="zoom-out-right"
                >
                  “ShakeYourTail is amazing, helping me easily manage my
                  appointments and reduce my business admin with automated
                  confirmations and reminders.”
                </p>
                <div data-aos="zoom-out-right">
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                </div>
                <p
                  className="mb-0 pt-3 ff-HelveticaNeue fs_lg lh_150 fw-bold text_blue"
                  data-aos="zoom-out-right"
                >
                  Mathew Spry
                </p>
                <p
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue pb-4 mb-0 "
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
              </div>
              <div>
                <img src={DogImg} alt="DogImg" data-aos="zoom-out-right" />
                <p
                  className="text-black ff-HelveticaNeue fs_6md lh_150 fw-lighter opacity_08 mb-0 pt-3 pb-2"
                  data-aos="zoom-out-right"
                >
                  “ShakeYourTail is amazing, helping me easily manage my
                  appointments and reduce my business admin with automated
                  confirmations and reminders.”
                </p>
                <div data-aos="zoom-out-right">
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                </div>
                <p
                  className="mb-0 pt-3 ff-HelveticaNeue fs_lg lh_150 fw-bold text_blue"
                  data-aos="zoom-out-right"
                >
                  Mathew Spry
                </p>
                <p
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue mb-0 pb-4"
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
              </div>
              <div>
                <img src={DogImg} alt="DogImg" data-aos="zoom-out-right" />
                <p
                  className="text-black ff-HelveticaNeue fs_6md lh_150 fw-lighter opacity_08 mb-0 pt-3 pb-2"
                  data-aos="zoom-out-right"
                >
                  “ShakeYourTail is amazing, helping me easily manage my
                  appointments and reduce my business admin with automated
                  confirmations and reminders.”
                </p>
                <YellowStar />
                <YellowStar />
                <YellowStar />
                <YellowStar />
                <YellowStar />
                <p
                  className="mb-0 pt-3 ff-HelveticaNeue fs_lg lh_150 fw-bold text_blue"
                  data-aos="zoom-out-right"
                >
                  Mathew Spry
                </p>
                <p
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue mb-0 pb-4"
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
              </div>
            </Slider>
            <div className="d-flex arrows-np position-absolute align-items-center gap-1">
              <button
                onClick={() => slider?.current?.slickPrev()}
                className="border-0 bg-transparent btn-arrow"
              >
                <LeftArrow />
              </button>
              <button
                onClick={() => slider?.current?.slickNext()}
                className="border-0 bg-transparent btn-arrow"
              >
                <RightArrow />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
