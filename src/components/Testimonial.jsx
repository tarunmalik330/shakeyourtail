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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centreMode: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
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
          <Col lg={6} className="pt-lg-0 pt-4">
            <Slider {...settings}>
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
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue"
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
                <div data-aos="zoom-out-right">
                  <LeftArrow />
                  <RightArrow />
                </div>
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
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue"
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
                <div data-aos="zoom-out-right">
                  <LeftArrow />
                  <RightArrow />
                </div>
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
                  className="lh_150 opacity_08 fs_8md fw-medium ff-HelventicaNeue text-blue"
                  data-aos="zoom-out-right"
                >
                  Director @ BArkingham, UK
                </p>
                <LeftArrow />
                <RightArrow />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
