import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GooglePlay from "../assets/images/webp/GooglePlay.webp";
import AppStore from "../assets/images/webp/AppStore.webp";
// import MobileGroup from "../assets/images/png/MobileGroup.png";
import { FoundedSvg } from "./IconImg";
import { ProductLounchSvg } from "./IconImg";
import { PetsSvg } from "./IconImg";
import { ServicesSvg } from "./IconImg";
import PinkCard from "../assets/images/webp/Pink_CardImg.webp";

const AboutUs = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centreMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
    <div className="bg_Yellow bg_about">
      <Container>
        <Row className="pt_download">
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <div>
              <h3
                className="fw-medium lh_111 fs_8xl text-lg-start text-center ff-roboto text-white mb-0 pb-2"
                data-aos="fade-right"
              >
                Download App
              </h3>
              <p
                className="text-lg-start text-center ff-HelveticaNeue fs_6md lh_160 fw_lighter text-white opacity_08 mw_393 mb-0 pb-4"
                data-aos="fade-right"
              >
                Are you a mobile groomer or just want to access your
                appointments and client on the go? <br /> Try our app, available
                to Premier or Premier Plus subscribers.
              </p>
              <div className="d-flex gap-4 justify-content-lg-start justify-content-center">
                <img
                  src={GooglePlay}
                  alt="GooglePlay"
                  className="rounded-1"
                  data-aos="fade-right"
                />
                <img
                  src={AppStore}
                  alt="AppStore"
                  className="rounded-2"
                  data-aos="fade-right"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py_about">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h3
            className="fw-medium lh_111 fs_8xl text-center ff-roboto text-white mb-0 pb-2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            About Us
          </h3>
          <p
            className="mw_775 text-center text-white fs_6md lh_160 ff-HelveticaNeue fw-lighter mb-0 pb-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <span className="d-block">
              Software developed by groomers for groomers
            </span>
            Our team has a wealth of experience, over 30 years combined working
            in dog grooming salons and over 45 years combined in working in
            software development.
          </p>
        </div>
        <Slider {...settings}>
          <div className="px_12" data-aos="fade-up" data-aos-duration="3000">
            <div className="about_card Founded_Card">
              <FoundedSvg />
              <h4 className="fw-medium lh_111 fs_6md ff-roboto text-black mb-0 pb-8">
                Founded
              </h4>
              <p className="text_green fs_6md lh_150 ff-HelveticaNeue fw-medium mb-0 pb-1">
                Dec 2009
              </p>
              <p className="ff-HelveticaNeue fs_6md lh_150 opacity_07 fw-lighter text-black mb-0">
                Founded in 2009 to support pet grooming industry to reduce the
                the administration burden of running a business.
              </p>
            </div>
          </div>
          <div className="px_12" data-aos="fade-up" data-aos-duration="3000">
            <div className="about_card ProductLounch_Card position-relative">
              <img
                src={PinkCard}
                alt="PinkCard"
                className="position-absolute bottom-0 end-0"
              />
              <ProductLounchSvg />
              <h4 className="fw-medium lh_111 fs_6md ff-roboto text-black mb-0 pb-8">
                Product Launch
              </h4>
              <p className="text_purple fs_6md lh_150 ff-HelveticaNeue fw-medium mb-0 pb-1">
                July 2010
              </p>
              <p className="ff-HelveticaNeue fs_6md lh_150 opacity_07 fw-lighter text-black mb-0">
                We released our first product 'Border' and made our first sales
                into 3 different countries.
              </p>
            </div>
          </div>
          <div className="px_12" data-aos="fade-up" data-aos-duration="3000">
            <div className="about_card pets_Card">
              <PetsSvg />
              <h4 className="fw-medium lh_111 fs_6md ff-roboto text-black mb-0 pb-8">
                Pet Schedule Released
              </h4>
              <p className="text_pink fs_6md lh_150 ff-HelveticaNeue fw-medium mb-0 pb-1">
                Dec 2012
              </p>
              <p className="ff-HelveticaNeue fs_6md lh_150 opacity_07 fw-lighter text-black mb-0">
                Our new Web based platform was created and released.
              </p>
            </div>
          </div>
          <div className="px_12" data-aos="fade-up" data-aos-duration="3000">
            <div className="about_card Services_Card">
              <ServicesSvg />
              <h4 className="fw-medium lh_111 fs_6md ff-roboto text-black mb-0 pb-8">
                Subscription Service
              </h4>
              <p className="text_sky fs_6md lh_150 ff-HelveticaNeue fw-medium mb-0 pb-1">
                Aug 2013
              </p>
              <p className="ff-HelveticaNeue fs_6md lh_150 opacity_07 fw-lighter text-black mb-0">
                We released our first premier subscription to the market
              </p>
            </div>
          </div>
        </Slider>
        <div
          className="d-flex justify-content-center pt_61"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <button className="viewAll_btn fs_6md fw-regular text-white ff-roboto">
            View All
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
